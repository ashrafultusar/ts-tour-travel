import { School } from "lucide-react";
import FormLayout from "@/components/admin/shared/FormLayout";
import UniversityForm from "@/components/admin/universities/UniversityForm";

export default function CreateUniversityPage() {
    return (
        <FormLayout
            title="Add New University"
            description="List a new partner institution"
            backUrl="/ts-staff-portal/universities"
            icon={<School size={28} />}
        >
            <UniversityForm mode="create" />
        </FormLayout>
    );
}
