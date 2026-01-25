import { Trophy } from "lucide-react";
import FormLayout from "@/components/admin/shared/FormLayout";
import SuccessStoryForm from "@/components/admin/successStories/SuccessStoryForm";
import { getSuccessStoryById } from "@/lib/data/successStory";
import { notFound } from "next/navigation";

interface EditSuccessStoryPageProps {
    params: Promise<{ id: string }>;
}

export default async function EditSuccessStoryPage({ params }: EditSuccessStoryPageProps) {
    const { id } = await params;
    const result = await getSuccessStoryById(id);

    if (!result.success || !result.story) {
        notFound();
    }

    return (
        <FormLayout
            title="Edit Success Story"
            description="Update student achievement details"
            backUrl="/ts-staff-portal/successStories"
            icon={<Trophy size={28} />}
        >
            <SuccessStoryForm mode="edit" initialData={result.story} />
        </FormLayout>
    );
}
