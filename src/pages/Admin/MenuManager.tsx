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
    <div className="p-8 mt-16"> {/*  mt-16 pushes below navbar */}
      <h1 className="text-3xl font-extrabold mb-8 text-gray-800 border-b pb-3">
        🧭 Menu Manager
      </h1>

      {/* Add Menu Form */}
      <div className="mb-8 bg-white p-6 shadow-md rounded-xl border space-y-3">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          ➕ Add New Menu
        </h2>
        <input
          type="text"
          placeholder="Menu Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border p-3 w-full rounded-md focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Path (optional if subMenu)"
          value={form.path}
          onChange={(e) => setForm({ ...form, path: e.target.value })}
          className="border p-3 w-full rounded-md focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleAdd}
          className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Menu"}
        </button>
      </div>

      {/* Menu List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {menus.map((menu, menuIndex) => (
          <div
            key={menu._id ? `menu-${menu._id}` : `menu-${menuIndex}`}
            className="bg-white border rounded-xl shadow-md p-5 hover:shadow-lg transition"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg text-gray-800">
                {menu.name}
              </h3>
              <button
                onClick={() => handleDelete(menu._id)}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>

            {/* Submenus */}
            {menu.subMenu?.length > 0 && (
              <ul className="ml-4 mt-3 space-y-2">
                {menu.subMenu.map((sub, subIndex) => (
                  <li
                    key={
                      sub._id
                        ? `menu-${menu._id || menuIndex}-sub-${sub._id}`
                        : `menu-${menu._id || menuIndex}-sub-${subIndex}`
                    }
                    className="flex justify-between items-center bg-gray-50 px-3 py-2 rounded-md"
                  >
                    <span>
                      {sub.name}{" "}
                      <span className="text-gray-500">({sub.path})</span>
                    </span>
                    <button
                      onClick={() =>
                        sub._id && handleDeleteSubmenu(menu._id, sub._id)
                      }
                      className="text-red-500 text-sm hover:underline"
                    >
                      ❌ Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {/* Add Submenu Form */}
            <div className="mt-4 flex gap-2">
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
                className="border p-2 rounded-md flex-1 focus:ring-2 focus:ring-blue-400"
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
                className="border p-2 rounded-md flex-1 focus:ring-2 focus:ring-blue-400"
              />
              <button
                onClick={() => handleAddSubmenu(menu._id)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
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