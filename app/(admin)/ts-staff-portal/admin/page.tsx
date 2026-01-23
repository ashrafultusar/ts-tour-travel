"use client";

import { useState } from "react";
import { Plus, ArrowLeft, ShieldCheck, UserCog, Trash2, Shield, Save, X } from "lucide-react";
import RegisterPage from "@/app/(auth)/register/page";

const AdminManagementPage = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  
  // Mock Admin Data
  const [admins, setAdmins] = useState([
    { id: 1, name: "Tanvir Ahmed", email: "tanvir@tstour.com", role: "Super Admin", status: "Active" },
    { id: 2, name: "Sarah Khan", email: "sarah@tstour.com", role: "Editor", status: "Active" },
    { id: 3, name: "Rahat Kabir", email: "rahat@tstour.com", role: "Moderator", status: "Inactive" },
  ]);

  // Handle Role Update
  const updateRole = (id: number, newRole: string) => {
    setAdmins(admins.map(admin => admin.id === id ? { ...admin, role: newRole } : admin));
    setEditingId(null); // Close edit mode after saving
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <ShieldCheck className="text-indigo-600" size={24} />
            {showCreateForm ? "Invite New Admin" : "System Administrators"}
          </h1>
          <p className="text-gray-500 text-sm">Manage staff permissions and access levels</p>
        </div>

        <button
          onClick={() => {
            setShowCreateForm(!showCreateForm);
            setEditingId(null);
          }}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl cursor-pointer font-medium transition-all ${
            showCreateForm 
              ? "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50" 
              : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-100"
          }`}
        >
          {showCreateForm ? (
            <><ArrowLeft size={18} /> View All Admins</>
          ) : (
            <><Plus size={18} /> Add Administrator</>
          )}
        </button>
      </div>

      <hr className="mb-8 border-gray-200" />

      {/* Main Content */}
      {showCreateForm ? (
        <RegisterPage onCancel={() => setShowCreateForm(false)} />
      ) : (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50/50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Admin Name</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Role</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {admins.map((admin) => (
                <tr key={admin.id} className="hover:bg-gray-50/30 transition">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 font-bold">
                        {admin.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">{admin.name}</p>
                        <p className="text-xs text-gray-500">{admin.email}</p>
                      </div>
                    </div>
                  </td>
                  
                  {/* ROLE COLUMN - Switch between text and select */}
                  <td className="px-6 py-4">
                    {editingId === admin.id ? (
                      <select 
                        defaultValue={admin.role}
                        onChange={(e) => updateRole(admin.id, e.target.value)}
                        className="bg-gray-50 border border-indigo-200 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2 outline-none"
                      >
                        <option value="Super Admin">Super Admin</option>
                        <option value="Editor">Editor</option>
                        <option value="Moderator">Moderator</option>
                      </select>
                    ) : (
                      <span className="flex items-center gap-1.5 text-sm text-gray-700">
                        <Shield size={14} className="text-indigo-400" />
                        {admin.role}
                      </span>
                    )}
                  </td>

                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                      admin.status === 'Active' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-500'
                    }`}>
                      {admin.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-right">
                    {editingId === admin.id ? (
                      <button 
                        onClick={() => setEditingId(null)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
                      >
                        <X size={18} />
                      </button>
                    ) : (
                      <button 
                        onClick={() => setEditingId(admin.id)}
                        className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition mr-2"
                      >
                        <UserCog size={18} />
                      </button>
                    )}
                    <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition">
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminManagementPage;