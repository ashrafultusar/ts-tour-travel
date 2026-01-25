import { FileText } from "lucide-react";
import FormLayout from "@/components/admin/shared/FormLayout";
import BlogForm from "@/components/admin/blog/BlogForm";
import LoadingSpinner from "@/components/admin/shared/LoadingSpinner";
import { getBlogById } from "@/lib/data/blog";
import { notFound } from "next/navigation";

interface EditBlogPageProps {
    params: Promise<{ id: string }>;
}

export default async function EditBlogPage({ params }: EditBlogPageProps) {
    const { id } = await params;
    const result = await getBlogById(id);

    if (!result.success || !result.blog) {
        notFound();
    }

    return (
        <FormLayout
            title="Edit Blog Post"
            description="Update your blog content and details"
            backUrl="/ts-staff-portal/blog"
            icon={<FileText size={28} />}
        >
            <BlogForm mode="edit" initialData={result.blog} />
        </FormLayout>
    );
}
