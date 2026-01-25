import { Trophy } from "lucide-react";
import FormLayout from "@/components/admin/shared/FormLayout";
import ProfessionalTeamForm from "@/components/admin/professionalTeam/ProfessionalTeamForm";

export default function CreateProfessionalTeamPage() {
    return (
        <FormLayout
            title="Add New Team Member"
            description="Add professionals to your team roster"
            backUrl="/ts-staff-portal/professionalTeam"
            icon={<Trophy size={28} />}
        >
            <ProfessionalTeamForm mode="create" />
        </FormLayout>
    );
}
