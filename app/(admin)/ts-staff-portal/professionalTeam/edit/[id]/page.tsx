import { Trophy } from "lucide-react";
import FormLayout from "@/components/admin/shared/FormLayout";
import ProfessionalTeamForm from "@/components/admin/professionalTeam/ProfessionalTeamForm";
import { getTeamMemberById } from "@/lib/data/team";
import { notFound } from "next/navigation";

interface EditProfessionalTeamPageProps {
    params: Promise<{ id: string }>;
}

export default async function EditProfessionalTeamPage({
    params,
}: EditProfessionalTeamPageProps) {
    const { id } = await params;
    const result = await getTeamMemberById(id);

    if (!result.success || !result.member) {
        notFound();
    }

    return (
        <FormLayout
            title="Edit Team Member"
            description="Update team member information"
            backUrl="/ts-staff-portal/professionalTeam"
            icon={<Trophy size={28} />}
        >
            <ProfessionalTeamForm mode="edit" initialData={result.member} />
        </FormLayout>
    );
}
