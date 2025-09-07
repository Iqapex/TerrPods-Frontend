// src/pages/Admin/MenuManager.tsx
import { useState, useEffect } from "react";
import axios from "axios";

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
  const [submenuForms, setSubmenuForms] = useState<{
    [key: string]: { name: string; path: string };
  }>({});
  const [loading, setLoading] = useState(false);

  const fetchMenus = async () => {
    const res = await axios.get("http://localhost:5000/api/menu");
    setMenus(res.data);
  };

  useEffect(() => {
    fetchMenus();
  }, []);

  const handleAdd = async () => {
    setLoading(true);
    await axios.post("http://localhost:5000/api/menu", form);
    setForm({ name: "", path: "", subMenu: [] });
    fetchMenus();
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    setLoading(true);
    await axios.delete(`http://localhost:5000/api/menu/${id}`);
    fetchMenus();
    setLoading(false);
  };

  const handleAddSubmenu = async (menuId: string) => {
    const submenuForm = submenuForms[menuId] || { name: "", path: "" };
    await axios.post(
      `http://localhost:5000/api/menu/${menuId}/submenu`,
      submenuForm
    );
    setSubmenuForms((prev) => ({
      ...prev,
      [menuId]: { name: "", path: "" },
    }));
    fetchMenus();
  };

  const handleDeleteSubmenu = async (menuId: string, subId: string) => {
    await axios.delete(
      `http://localhost:5000/api/menu/${menuId}/submenu/${subId}`
    );
    fetchMenus();
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 mt-16 max-w-7xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-extrabold mb-6 sm:mb-8 text-gray-900 border-b-4 border-[#C5A900] pb-2 sm:pb-3">
        🧭 Menu Manager
      </h1>

      {/* Add Menu Form */}
      <div className="mb-6 sm:mb-8 bg-white p-4 sm:p-6 shadow-lg rounded-xl border-l-4 border-[#C5A900] space-y-3">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          ➕ Add New Menu
        </h2>
        <input
          type="text"
          placeholder="Menu Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border p-2 sm:p-3 w-full rounded-md focus:ring-2 focus:ring-[#C5A900]"
        />
        <input
          type="text"
          placeholder="Path (optional if subMenu)"
          value={form.path}
          onChange={(e) => setForm({ ...form, path: e.target.value })}
          className="border p-2 sm:p-3 w-full rounded-md focus:ring-2 focus:ring-[#C5A900]"
        />
        <button
          onClick={handleAdd}
          className="bg-[#C5A900] text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-md hover:bg-[#b19a00] transition disabled:opacity-50 w-full sm:w-auto"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Menu"}
        </button>
      </div>

      {/* Menu List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {menus.map((menu, menuIndex) => (
          <div
            key={menu._id ? `menu-${menu._id}` : `menu-${menuIndex}`}
            className="bg-white border-l-4 border-[#C5A900] rounded-xl shadow-lg p-4 sm:p-5 hover:shadow-xl transition flex flex-col"
          >
            <div className="flex justify-between items-center mb-3 sm:mb-4">
              <h3 className="font-semibold text-lg text-gray-800">{menu.name}</h3>
              <button
                onClick={() => handleDelete(menu._id)}
                className="bg-red-500 text-white px-2 sm:px-3 py-1 rounded-md hover:bg-red-600 transition text-sm sm:text-base"
              >
                Delete
              </button>
            </div>

            {/* Submenus */}
            {menu.subMenu?.length > 0 && (
              <ul className="ml-2 sm:ml-4 mb-3 sm:mb-4 space-y-1 sm:space-y-2 overflow-x-auto">
                {menu.subMenu.map((sub, subIndex) => (
                  <li
                    key={
                      sub._id
                        ? `menu-${menu._id || menuIndex}-sub-${sub._id}`
                        : `menu-${menu._id || menuIndex}-sub-${subIndex}`
                    }
                    className="flex justify-between items-center bg-gray-50 px-2 sm:px-3 py-1 sm:py-2 rounded-md text-sm sm:text-base whitespace-nowrap"
                  >
                    <span>
                      {sub.name}{" "}
                      <span className="text-gray-500">({sub.path})</span>
                    </span>
                    <button
                      onClick={() =>
                        sub._id && handleDeleteSubmenu(menu._id, sub._id)
                      }
                      className="text-red-500 text-xs sm:text-sm hover:underline ml-2 sm:ml-0"
                    >
                      ❌ Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {/* Add Submenu Form */}
            <div className="mt-auto flex flex-col sm:flex-row gap-2 sm:gap-2.5">
              <input
                type="text"
                placeholder="Submenu Name"
                value={submenuForms[menu._id]?.name || ""}
                onChange={(e) =>
                  setSubmenuForms((prev) => ({
                    ...prev,
                    [menu._id]: {
                      ...(prev[menu._id] || { name: "", path: "" }),
                      name: e.target.value,
                    },
                  }))
                }
                className="border p-2 rounded-md flex-1 focus:ring-2 focus:ring-[#C5A900]"
              />
              <input
                type="text"
                placeholder="Path"
                value={submenuForms[menu._id]?.path || ""}
                onChange={(e) =>
                  setSubmenuForms((prev) => ({
                    ...prev,
                    [menu._id]: {
                      ...(prev[menu._id] || { name: "", path: "" }),
                      path: e.target.value,
                    },
                  }))
                }
                className="border p-2 rounded-md flex-1 focus:ring-2 focus:ring-[#C5A900]"
              />
              <button
                onClick={() => handleAddSubmenu(menu._id)}
                className="bg-[#C5A900] text-white px-3 py-2 rounded-md hover:bg-[#b19a00] transition w-full sm:w-auto"
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
