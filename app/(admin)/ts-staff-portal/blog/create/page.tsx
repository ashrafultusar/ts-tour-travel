import { FileText } from "lucide-react";
import FormLayout from "@/components/admin/shared/FormLayout";
import BlogForm from "@/components/admin/blog/BlogForm";

export default function CreateBlogPage() {
    return (
        <FormLayout
            title="Create New Blog Post"
            description="Share insights and updates with your audience"
            backUrl="/ts-staff-portal/blog"
            icon={<FileText size={28} />}
        >
            <BlogForm mode="create" />
        </FormLayout>
    );
}
