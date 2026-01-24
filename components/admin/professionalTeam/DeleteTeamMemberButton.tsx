"use client";

import { Trash2 } from "lucide-react";
import { deleteTeamMember } from "@/actions/professionalTeamActions";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function DeleteTeamMemberButton({ id }: { id: string }) {
    const router = useRouter();

    const handleDelete = async () => {
        if (!confirm("Are you sure you want to delete this team member?")) return;

        try {
            const result = await deleteTeamMember(id);
            if (result.success) {
                toast.success("Team member deleted successfully");
                router.refresh();
            } else {
                toast.error("Failed to delete team member");
            }
        } catch (error) {
            toast.error("Error deleting team member");
        }
    };

    return (
        <button
            onClick={handleDelete}
            className="p-2 bg-white/20 backdrop-blur-md text-white hover:bg-red-500 rounded-lg transition"
        >
            <Trash2 size={16} />
        </button>
    );
}
