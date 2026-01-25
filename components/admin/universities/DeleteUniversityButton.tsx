"use client";

import { Trash2 } from "lucide-react";
import { deleteUniversity } from "@/actions/universityActions";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function DeleteUniversityButton({ id }: { id: string }) {
    const router = useRouter();

    const handleDelete = async () => {
        if (!confirm("Are you sure you want to delete this university?")) return;

        try {
            const result = await deleteUniversity(id);
            if (result.success) {
                toast.success("University deleted successfully");
                router.refresh();
            } else {
                toast.error("Failed to delete university");
            }
        } catch (error) {
            toast.error("Error deleting university");
        }
    };

    return (
        <button
            onClick={handleDelete}
            className="p-2 bg-white/90 backdrop-blur-sm text-gray-600 hover:text-red-500 rounded-lg shadow-sm transition"
        >
            <Trash2 size={16} />
        </button>
    );
}
