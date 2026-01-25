"use client";

import { useState, useMemo } from "react";
import { Plus, ArrowLeft, ShieldCheck, UserCog, Trash2, Shield, X, Loader2, Users } from "lucide-react";
import RegisterPage from "@/app/(auth)/register/page";
import { deleteUser, updateUserRole } from "@/lib/data/administrators";

interface Admin {
  _id: string; 
  name: string;
  email: string;
  role: string;
  status?: string;
}

const AdminManagement = ({ initialUsers }: { initialUsers: Admin[] }) => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [admins, setAdmins] = useState<Admin[]>(initialUsers);
  const [isPending, setIsPending] = useState<string | null>(null);

  // ডাটা গ্রুপিং এবং সর্টিং (Memoized for performance)
  const { staff, regularUsers } = useMemo(() => {
    const staffList = admins.filter(u => u.role === "admin" || u.role === "moderator")
      .sort((a, b) => (a.role === "admin" ? -1 : 1)); // Admin সবার উপরে
    
    const userList = admins.filter(u => u.role !== "admin" && u.role !== "moderator");
    
    return { staff: staffList, regularUsers: userList };
  }, [admins]);

  const handleUpdateRole = async (id: string, newRole: string) => {
    setIsPending(id);
    const res = await updateUserRole(id, newRole);
    if (res.success) {
      setAdmins(prev => prev.map(admin => admin._id === id ? { ...admin, role: newRole } : admin));
      setEditingId(null);
    } else {
      alert("Error updating role");
    }
    setIsPending(null);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this user?")) {
      setIsPending(id);
      const res = await deleteUser(id);
      if (res.success) {
        setAdmins(prev => prev.filter(admin => admin._id !== id));
      } else {
        alert("Error deleting user");
      }
      setIsPending(null);
    }
  };

  // রিইউজেবল রো কম্পোনেন্ট
  const UserRow = ({ admin }: { admin: Admin }) => (
    <div key={admin._id} className={`grid grid-cols-1 md:grid-cols-4 gap-4 px-6 py-4 items-center bg-white border border-gray-100 rounded-2xl shadow-sm transition-opacity ${isPending === admin._id ? 'opacity-50' : 'opacity-100'}`}>
      <div className="flex items-center gap-3">
        <div className={`h-10 w-10 rounded-full flex items-center justify-center font-bold border ${admin.role === 'admin' ? 'bg-cyan-100 text-[#0891B2] border-cyan-200' : 'bg-gray-50 text-gray-500 border-gray-100'}`}>
          {admin.name.charAt(0)}
        </div>
        <div className="min-w-0">
          <p className="font-semibold text-gray-800 truncate">{admin.name}</p>
          <p className="text-xs text-gray-500 truncate">{admin.email}</p>
        </div>
      </div>

      <div className="flex md:block items-center justify-between">
        <div className="w-full max-w-[140px] md:max-w-[160px]">
          {editingId === admin._id ? (
            <select 
              disabled={isPending === admin._id}
              defaultValue={admin.role}
              onChange={(e) => handleUpdateRole(admin._id, e.target.value)}
              className="bg-gray-50 border border-cyan-200 text-gray-900 text-xs rounded-lg p-1.5 w-full outline-none"
            >
              <option value="admin">Admin</option>
              <option value="moderator">Moderator</option>
              <option value="user">User</option>
            </select>
          ) : (
            <span className="flex items-center gap-1.5 text-sm text-gray-700 capitalize">
              <Shield size={14} className={admin.role === 'admin' ? 'text-[#0891B2]' : 'text-gray-400'} />
              {admin.role}
            </span>
          )}
        </div>
      </div>

      <div className="flex md:block items-center justify-between">
        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${admin.status === 'Inactive' ? 'bg-red-50 text-red-500' : 'bg-green-50 text-green-600'}`}>
          {admin.status || 'Active'}
        </span>
      </div>

      <div className="flex justify-end gap-2">
        {editingId === admin._id ? (
          <button onClick={() => setEditingId(null)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg cursor-pointer"><X size={18} /></button>
        ) : (
          <button onClick={() => setEditingId(admin._id)} className="p-2 text-gray-400 hover:text-[#0891B2] transition cursor-pointer"><UserCog size={18} /></button>
        )}
        <button onClick={() => handleDelete(admin._id)} disabled={isPending === admin._id} className="p-2 text-gray-400 hover:text-red-500 transition cursor-pointer">
          {isPending === admin._id ? <Loader2 size={18} className="animate-spin" /> : <Trash2 size={18} />}
        </button>
      </div>
    </div>
  );

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center gap-2">
            <ShieldCheck className="text-[#0891B2] shrink-0" size={24} />
            <span>{showCreateForm ? "Invite New Admin" : "User Management"}</span>
          </h1>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">Manage system staff and user permissions</p>
        </div>

        <button
          onClick={() => { setShowCreateForm(!showCreateForm); setEditingId(null); }}
          className={`w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all cursor-pointer ${showCreateForm ? "bg-white border border-gray-200 text-gray-600" : "bg-[#0891B2] text-white hover:bg-[#06748d]"}`}
        >
          {showCreateForm ? <><ArrowLeft size={18} /> View All</> : <><Plus size={18} /> Add User</>}
        </button>
      </div>

      {showCreateForm ? (
        <RegisterPage onCancel={() => setShowCreateForm(false)} />
      ) : (
        <div className="space-y-8">
          {/* STAFF SECTION */}
          <section>
            <div className="flex items-center gap-2 mb-4 px-2">
              <ShieldCheck size={18} className="text-[#0891B2]" />
              <h2 className="text-sm font-bold text-gray-600 uppercase tracking-wider">System Staff ({staff.length})</h2>
            </div>
            <div className="space-y-2">
              {staff.map(admin => <UserRow key={admin._id} admin={admin} />)}
              {staff.length === 0 && <p className="text-sm text-gray-400 text-center py-4 bg-gray-50 rounded-xl">No staff members found.</p>}
            </div>
          </section>

          {/* NORMAL USERS SECTION */}
          <section>
            <div className="flex items-center gap-2 mb-4 px-2">
              <Users size={18} className="text-gray-400" />
              <h2 className="text-sm font-bold text-gray-600 uppercase tracking-wider">Registered Users ({regularUsers.length})</h2>
            </div>
            <div className="space-y-2">
              {regularUsers.map(user => <UserRow key={user._id} admin={user} />)}
              {regularUsers.length === 0 && <p className="text-sm text-gray-400 text-center py-4 bg-gray-50 rounded-xl">No regular users found.</p>}
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default AdminManagement;