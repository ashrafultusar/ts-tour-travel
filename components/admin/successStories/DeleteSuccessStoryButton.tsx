"use client";

import { Trash2 } from "lucide-react";
import { deleteSuccessStory } from "@/actions/successStoryActions";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function DeleteSuccessStoryButton({ id }: { id: string }) {
    const router = useRouter();

    const handleDelete = async () => {
        if (!confirm("Are you sure you want to delete this story?")) return;

        try {
            const result = await deleteSuccessStory(id);
            if (result.success) {
                toast.success("Story deleted successfully");
                router.refresh();
            } else {
                toast.error("Failed to delete story");
            }
        } catch (error) {
            toast.error("Error deleting story");
        }
    };

    return (
        <button
            onClick={handleDelete}
            className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition"
            title="Delete"
        >
            <Trash2 size={16} />
        </button>
    );
}
