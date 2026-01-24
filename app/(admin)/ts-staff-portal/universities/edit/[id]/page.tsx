import { School } from "lucide-react";
import FormLayout from "@/components/admin/shared/FormLayout";
import UniversityForm from "@/components/admin/universities/UniversityForm";
import { getUniversityById } from "@/lib/data/university";
import { notFound } from "next/navigation";

interface EditUniversityPageProps {
    params: Promise<{ id: string }>;
}

export default async function EditUniversityPage({ params }: EditUniversityPageProps) {
    const { id } = await params;
    const result = await getUniversityById(id);

    if (!result.success || !result.university) {
        notFound();
    }

    return (
        <FormLayout
            title="Edit University"
            description="Update university information"
            backUrl="/ts-staff-portal/universities"
            icon={<School size={28} />}
        >
            <UniversityForm mode="edit" initialData={result.university} />
        </FormLayout>
    );
}
