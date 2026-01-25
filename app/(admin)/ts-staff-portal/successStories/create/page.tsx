import { Trophy } from "lucide-react";
import FormLayout from "@/components/admin/shared/FormLayout";
import SuccessStoryForm from "@/components/admin/successStories/SuccessStoryForm";

export default function CreateSuccessStoryPage() {
    return (
        <FormLayout
            title="Create New Success Story"
            description="Showcase student achievements and inspire others"
            backUrl="/ts-staff-portal/successStories"
            icon={<Trophy size={28} />}
        >
            <SuccessStoryForm mode="create" />
        </FormLayout>
    );
}
