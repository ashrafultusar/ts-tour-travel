"use client";

import { useState } from "react";
import { Plus, ArrowLeft, ShieldCheck, UserCog, Trash2, Shield, X } from "lucide-react";
import RegisterPage from "@/app/(auth)/register/page";

const AdminManagementPage = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  
  const [admins, setAdmins] = useState([
    { id: 1, name: "Tanvir Ahmed", email: "tanvir@tstour.com", role: "Super Admin", status: "Active" },
    { id: 2, name: "Sarah Khan", email: "sarah@tstour.com", role: "Editor", status: "Active" },
    { id: 3, name: "Rahat Kabir", email: "rahat@tstour.com", role: "Moderator", status: "Inactive" },
  ]);

  const updateRole = (id, newRole) => {
    setAdmins(admins.map(admin => admin.id === id ? { ...admin, role: newRole } : admin));
    setEditingId(null);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center gap-2">
            <ShieldCheck className="text-indigo-600 shrink-0" size={24} />
            <span>{showCreateForm ? "Invite New Admin" : "System Administrators"}</span>
          </h1>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">Manage staff permissions and access levels</p>
        </div>

        <button
          onClick={() => {
            setShowCreateForm(!showCreateForm);
            setEditingId(null);
          }}
          className={`w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all ${
            showCreateForm 
              ? "bg-white border border-gray-200 text-gray-600 shadow-sm" 
              : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-100"
          }`}
        >
          {showCreateForm ? <><ArrowLeft size={18} /> View All</> : <><Plus size={18} /> Add Admin</>}
        </button>
      </div>

      <hr className="mb-8 border-gray-200" />

      {showCreateForm ? (
        <RegisterPage onCancel={() => setShowCreateForm(false)} />
      ) : (
        <div className="space-y-2">
          
       
          <div className="hidden md:grid grid-cols-4 bg-gray-100/50 border border-gray-200 px-6 py-3 rounded-xl">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Admin Name</span>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Role</span>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Status</span>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Actions</span>
          </div>

          {/* Admin Cards List */}
          {admins.map((admin) => (
            <div 
              key={admin.id} 
              className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-0 px-6 py-5 md:py-4 items-center bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all group"
            >
              {/* Name & Email */}
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 font-bold shrink-0 border border-indigo-100">
                  {admin.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-gray-800 truncate">{admin.name}</p>
                  <p className="text-xs text-gray-500 truncate">{admin.email}</p>
                </div>
              </div>

              {/* Role Selection */}
              <div className="flex md:block items-center justify-between">
                <span className="md:hidden text-[10px] font-bold text-gray-400 uppercase">Current Role:</span>
                <div className="w-full max-w-[140px] md:max-w-[160px]">
                  {editingId === admin.id ? (
                    <select 
                      defaultValue={admin.role}
                      onChange={(e) => updateRole(admin.id, e.target.value)}
                      className="bg-gray-50 border border-indigo-200 text-gray-900 text-xs rounded-lg p-1.5 w-full outline-none focus:ring-1 focus:ring-indigo-500"
                    >
                      <option value="Super Admin">Super Admin</option>
                      <option value="Editor">Editor</option>
                      <option value="Moderator">Moderator</option>
                    </select>
                  ) : (
                    <span className="flex items-center gap-1.5 text-sm text-gray-700">
                      <Shield size={14} className="text-indigo-400 shrink-0" />
                      {admin.role}
                    </span>
                  )}
                </div>
              </div>

              {/* Status Badge */}
              <div className="flex md:block items-center justify-between">
                <span className="md:hidden text-[10px] font-bold text-gray-400 uppercase">Account Status:</span>
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tight ${
                  admin.status === 'Active' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-500'
                }`}>
                  {admin.status}
                </span>
              </div>

              {/* Actions */}
              <div className="flex justify-end gap-1 md:gap-2 border-t md:border-none pt-3 md:pt-0 mt-2 md:mt-0">
                {editingId === admin.id ? (
                  <button onClick={() => setEditingId(null)} className="p-2 text-red-500 bg-red-50 md:bg-transparent rounded-lg hover:bg-red-50 transition">
                    <X size={18} />
                  </button>
                ) : (
                  <button 
                    onClick={() => setEditingId(admin.id)} 
                    className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition"
                  >
                    <UserCog size={18} />
                  </button>
                )}
                <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}

          {/* Empty State */}
          {admins.length === 0 && (
            <div className="py-20 text-center bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
              <p className="text-gray-400 font-medium">No administrators found.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminManagementPage;