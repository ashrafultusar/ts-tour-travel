import AdminManagement from "@/components/admin/administrators/AdminManagement";
import { getAllUsers } from "@/lib/data/administrators";


export default async function AdminManagementPage() {

  const users = await getAllUsers();

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <AdminManagement initialUsers={users} />
    </div>
  );
}