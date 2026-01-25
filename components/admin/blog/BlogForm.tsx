"use client";

import { useState } from "react";
import {
    Type,
    Tag,
    Send,
    X,
    PlusCircle,
    Loader2,
    Image as ImageIcon,
} from "lucide-react";
import { createBlog, updateBlog } from "@/actions/blogActions";
import { handleServerResponse } from "@/lib/utils/formHelpers";
import ImageUpload from "@/components/admin/shared/ImageUpload";
import { useRouter } from "next/navigation";

interface BlogFormProps {
    mode: "create" | "edit";
    initialData?: {
        _id?: string;
        title: string;
        category: string;
        readTime: number;
        content: string;
        tags: string[];
        image?: string;
    };
}

const BlogForm: React.FC<BlogFormProps> = ({ mode, initialData }) => {
    const router = useRouter();
    const [tags, setTags] = useState<string[]>(initialData?.tags || ["Education", "Visa"]);
    const [tagInput, setTagInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [isCompressing, setIsCompressing] = useState(false);
    const [preview, setPreview] = useState<string | null>(initialData?.image || null);
    const [imageFile, setImageFile] = useState<File | null>(null);

    const handleImageChange = (file: File | null, previewUrl: string | null) => {
        setImageFile(file);
        setPreview(previewUrl);
    };

    const handleCompressionStateChange = (compressing: boolean) => {
        setIsCompressing(compressing);
    };

    const handleAddTag = () => {
        if (tagInput.trim() && !tags.includes(tagInput.trim())) {
            setTags([...tags, tagInput.trim()]);
            setTagInput("");
        }
    };

    const removeTag = (tagToRemove: string) => {
        setTags(tags.filter((tag) => tag !== tagToRemove));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Prevent submission if image is still compressing
        const form = e.currentTarget;
        const hiddenCompressionFlag = form.querySelector('[data-compressing]');
        if (hiddenCompressionFlag?.getAttribute('data-compressing') === 'true') {
            return; // Exit if compression is in progress
        }

        setLoading(true);

        const formData = new FormData();

        // Manually add all form fields to ensure we have full control
        const titleInput = form.querySelector('[name="title"]') as HTMLInputElement;
        const categoryInput = form.querySelector('[name="category"]') as HTMLSelectElement;
        const readTimeInput = form.querySelector('[name="readTime"]') as HTMLInputElement;
        const contentInput = form.querySelector('[name="content"]') as HTMLTextAreaElement;

        if (titleInput?.value) formData.append("title", titleInput.value);
        if (categoryInput?.value) formData.append("category", categoryInput.value);
        if (readTimeInput?.value) formData.append("readTime", readTimeInput.value);
        if (contentInput?.value) formData.append("content", contentInput.value);

        formData.append("tags", JSON.stringify(tags));

        // CRITICAL: Add the compressed image file if available
        if (imageFile) {
            formData.append("image", imageFile, imageFile.name);
        }

        try {
            const result =
                mode === "edit" && initialData?._id
                    ? await updateBlog(initialData._id, formData)
                    : await createBlog(formData);

            const success = handleServerResponse(result, () => {
                router.refresh();
                router.push("/ts-staff-portal/blog");
            });
        } catch (error) {
            console.error("Error submitting blog:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            {/* Hidden field to prevent submission during compression */}
            <input type="hidden" data-compressing={loading ? "false" : "false"} />

            {/* Image Upload */}
            <ImageUpload
                name="image"
                preview={preview}
                onImageChange={handleImageChange}
                onCompressionStateChange={handleCompressionStateChange}
                label="Upload Featured Image"
                shape="rectangle"
            />

            {/* Post Title */}
            <div>
                <label className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 ml-1">
                    <Type className="w-3.5 h-3.5" /> Post Title
                </label>
                <input
                    name="title"
                    type="text"
                    placeholder="Enter a catchy title here..."
                    required
                    defaultValue={initialData?.title}
                    className="w-full text-3xl md:text-4xl font-black text-[#0d4a7e] placeholder:text-gray-200 border-none focus:ring-0 p-0 leading-tight outline-none"
                />
            </div>

            {/* Meta Info: Category & Read Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 ml-1">
                        <Tag className="w-3.5 h-3.5" /> Category
                    </label>
                    <select
                        name="category"
                        defaultValue={initialData?.category || "Education"}
                        className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-gray-600 focus:outline-none focus:border-[#1a8a81] transition-all"
                    >
                        <option value="Education">Education</option>
                        <option value="Scholarship">Scholarship</option>
                        <option value="Visa">Visa</option>
                        <option value="Lifestyle">Lifestyle</option>
                    </select>
                </div>
                <div>
                    <label className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 ml-1">
                        <ImageIcon className="w-3.5 h-3.5" /> Read Time (Min)
                    </label>
                    <input
                        name="readTime"
                        type="number"
                        placeholder="e.g. 5"
                        required
                        min="1"
                        defaultValue={initialData?.readTime}
                        className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-gray-600 focus:outline-none focus:border-[#1a8a81]"
                    />
                </div>
            </div>

            {/* Rich Text Content */}
            <div>
                <label className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 ml-1">
                    Content Body
                </label>
                <textarea
                    name="content"
                    placeholder="Tell your story... Use markdown or plain text."
                    rows={12}
                    required
                    defaultValue={initialData?.content}
                    className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-6 py-5 text-gray-700 leading-relaxed focus:outline-none focus:border-[#1a8a81] transition-all resize-none"
                ></textarea>
            </div>

            {/* Tags Input Area */}
            <div className="pt-8 border-t border-gray-50">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 block ml-1">
                    Search Engine Tags
                </label>
                <div className="flex flex-wrap gap-2 items-center">
                    {tags.map((tag, i) => (
                        <span
                            key={i}
                            className="flex items-center gap-2 px-3 py-1.5 bg-[#f0fdfa] text-[#1a8a81] rounded-lg text-sm font-bold border border-[#ccfbf1]"
                        >
                            {tag}{" "}
                            <X
                                className="w-3 h-3 cursor-pointer hover:text-red-500"
                                onClick={() => removeTag(tag)}
                            />
                        </span>
                    ))}

                    <div className="flex items-center gap-2">
                        <input
                            type="text"
                            value={tagInput}
                            onChange={(e) => setTagInput(e.target.value)}
                            placeholder="Add tag"
                            className="bg-transparent border-none outline-none text-sm w-24"
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    e.preventDefault();
                                    handleAddTag();
                                }
                            }}
                        />
                        <button
                            type="button"
                            onClick={handleAddTag}
                            className="text-gray-400 hover:text-[#1a8a81]"
                        >
                            <PlusCircle className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end gap-4 pt-6 border-t border-gray-100">
                <button
                    type="button"
                    onClick={() => router.push("/ts-staff-portal/blog")}
                    disabled={loading || isCompressing}
                    className="px-6 py-3 text-gray-500 font-medium hover:text-gray-800 transition disabled:opacity-50"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    disabled={loading || isCompressing}
                    className="flex items-center gap-2 px-8 py-3 bg-[#1a8a81] text-white font-bold rounded-xl hover:bg-[#146b64] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading ? <Loader2 className="animate-spin" /> : isCompressing ? <Loader2 className="animate-spin" /> : <Send size={18} />}
                    {isCompressing ? "Optimizing..." : loading ? "Saving..." : mode === "edit" ? "Update Blog" : "Publish Blog"}
                </button>
            </div>
        </form>
    );
};

export default BlogForm;
