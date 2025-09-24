import { useState, useEffect } from "react";
import api from "../../api"; // correct path to api.ts

interface SubMenu {
  _id?: string;
  name: string;
  path: string;
}

interface Menu {
  _id: string;
  name: string;
  path?: string;
  subMenu: SubMenu[];
}

const MenuManager = () => {
  const [menus, setMenus] = useState<Menu[]>([]);
  const [form, setForm] = useState({ name: "", path: "", subMenu: [] });
  const [submenuForms, setSubmenuForms] = useState<{ [key: string]: { name: string; path: string } }>({});
  const [loading, setLoading] = useState(false);

  const fetchMenus = async () => {
    try {
      const res = await api.get("/menu");
      setMenus(res.data);
    } catch (err) {
      console.error("Error fetching menus:", err);
    }
  };

  useEffect(() => {
    fetchMenus();
  }, []);

  const handleAdd = async () => {
    setLoading(true);
    try {
      await api.post("/menu", form);
      setForm({ name: "", path: "", subMenu: [] });
      fetchMenus();
    } catch (err) {
      console.error("Error adding menu:", err);
    }
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    setLoading(true);
    try {
      await api.delete(`/menu/${id}`);
      fetchMenus();
    } catch (err) {
      console.error("Error deleting menu:", err);
    }
    setLoading(false);
  };

  const handleAddSubmenu = async (menuId: string) => {
    const submenuForm = submenuForms[menuId] || { name: "", path: "" };
    try {
      await api.post(`/menu/${menuId}/submenu`, submenuForm);
      setSubmenuForms(prev => ({ ...prev, [menuId]: { name: "", path: "" } }));
      fetchMenus();
    } catch (err) {
      console.error("Error adding submenu:", err);
    }
  };

  const handleDeleteSubmenu = async (menuId: string, subId: string) => {
    try {
      await api.delete(`/menu/${menuId}/submenu/${subId}`);
      fetchMenus();
    } catch (err) {
      console.error("Error deleting submenu:", err);
    }
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 mt-16 max-w-7xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-extrabold mb-6 border-b-4 border-[#C5A900] pb-2">
        🧭 Menu Manager
      </h1>

      {/* Add Menu */}
      <div className="mb-6 bg-white p-4 shadow-lg rounded-xl border-l-4 border-[#C5A900] space-y-3">
        <h2 className="text-lg font-semibold">➕ Add New Menu</h2>
        <input
          type="text"
          placeholder="Menu Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border p-2 w-full rounded-md focus:ring-2 focus:ring-[#C5A900]"
        />
        <input
          type="text"
          placeholder="Path (optional)"
          value={form.path}
          onChange={(e) => setForm({ ...form, path: e.target.value })}
          className="border p-2 w-full rounded-md focus:ring-2 focus:ring-[#C5A900]"
        />
        <button
          onClick={handleAdd}
          className="bg-[#C5A900] text-white px-4 py-2 rounded-md hover:bg-[#b19a00] transition w-full sm:w-auto"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Menu"}
        </button>
      </div>

      {/* Menu List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {menus.map((menu, menuIndex) => (
          <div key={menu._id || menuIndex} className="bg-white border-l-4 border-[#C5A900] rounded-xl shadow-lg p-4 flex flex-col">
            <div className="flex justify-between mb-3">
              <h3 className="font-semibold text-lg">{menu.name}</h3>
              <button
                onClick={() => handleDelete(menu._id)}
                className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </div>

            {/* Submenus */}
            {menu.subMenu?.length > 0 && (
              <ul className="mb-3 space-y-1 overflow-x-auto">
                {menu.subMenu.map((sub, subIndex) => (
                  <li key={sub._id || subIndex} className="flex justify-between bg-gray-50 px-2 py-1 rounded-md">
                    <span>{sub.name} ({sub.path})</span>
                    <button
                      onClick={() => sub._id && handleDeleteSubmenu(menu._id, sub._id)}
                      className="text-red-500 text-xs hover:underline"
                    >
                      ❌
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {/* Add Submenu */}
            <div className="flex flex-col gap-2 mt-auto">
              <input
                type="text"
                placeholder="Submenu Name"
                value={submenuForms[menu._id]?.name || ""}
                onChange={(e) =>
                  setSubmenuForms(prev => ({
                    ...prev,
                    [menu._id]: { ...(prev[menu._id] || { name: "", path: "" }), name: e.target.value },
                  }))
                }
                className="border p-2 rounded-md"
              />
              <input
                type="text"
                placeholder="Path"
                value={submenuForms[menu._id]?.path || ""}
                onChange={(e) =>
                  setSubmenuForms(prev => ({
                    ...prev,
                    [menu._id]: { ...(prev[menu._id] || { name: "", path: "" }), path: e.target.value },
                  }))
                }
                className="border p-2 rounded-md"
              />
              <button
                onClick={() => handleAddSubmenu(menu._id)}
                className="bg-[#C5A900] text-white px-3 py-2 rounded-md hover:bg-[#b19a00]"
              >
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuManager;
