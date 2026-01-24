"use client";

import React, { useState } from "react";
import { GraduationCap, Save, Loader2 } from "lucide-react";
import { createSuccessStory, updateSuccessStory } from "@/actions/successStoryActions";
import { handleServerResponse } from "@/lib/utils/formHelpers";
import ImageUpload from "@/components/admin/shared/ImageUpload";
import { useRouter } from "next/navigation";

interface SuccessStoryFormProps {
    mode: "create" | "edit";
    initialData?: {
        _id?: string;
        studentName: string;
        subject: string;
        university: string;
        country?: string;
        story: string;
        image?: string;
    };
}

const SuccessStoryForm: React.FC<SuccessStoryFormProps> = ({ mode, initialData }) => {
    const router = useRouter();
    const [preview, setPreview] = useState<string | null>(initialData?.image || null);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [isCompressing, setIsCompressing] = useState(false);

    const handleImageChange = (file: File | null, previewUrl: string | null) => {
        setImageFile(file);
        setPreview(previewUrl);
    };

    const handleCompressionStateChange = (compressing: boolean) => {
        setIsCompressing(compressing);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const form = e.currentTarget;
        const formData = new FormData();

        // Manually add form fields
        const studentNameInput = form.querySelector('[name="studentName"]') as HTMLInputElement;
        const subjectInput = form.querySelector('[name="subject"]') as HTMLInputElement;
        const universityInput = form.querySelector('[name="university"]') as HTMLInputElement;
        const storyInput = form.querySelector('[name="story"]') as HTMLTextAreaElement;

        if (studentNameInput?.value) formData.append("studentName", studentNameInput.value);
        if (subjectInput?.value) formData.append("subject", subjectInput.value);
        if (universityInput?.value) formData.append("university", universityInput.value);
        if (storyInput?.value) formData.append("story", storyInput.value);

        // Add compressed image file if available
        if (imageFile) {
            formData.append("image", imageFile, imageFile.name);
        }

        try {
            const result =
                mode === "edit" && initialData?._id
                    ? await updateSuccessStory(initialData._id, formData)
                    : await createSuccessStory(formData);

            handleServerResponse(result, () => {
                router.push("/ts-staff-portal/successStories");
            });
        } catch (error) {
            console.error("Error submitting success story:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Image Upload */}
            <ImageUpload
                name="image"
                preview={preview}
                onImageChange={handleImageChange}
                onCompressionStateChange={handleCompressionStateChange}
                label="Upload Student Photo"
                shape="circle"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Student Name */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 tracking-tight">
                        Student Name
                    </label>
                    <input
                        name="studentName"
                        type="text"
                        required
                        defaultValue={initialData?.studentName}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition bg-gray-50/30"
                        placeholder="e.g. John Doe"
                    />
                </div>

                {/* Subject */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 tracking-tight">
                        Subject / Major
                    </label>
                    <input
                        name="subject"
                        type="text"
                        required
                        defaultValue={initialData?.subject}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition bg-gray-50/30"
                        placeholder="e.g. B.Sc in Computer Science"
                    />
                </div>

                {/* University */}
                <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 tracking-tight">
                        University & Country
                    </label>
                    <div className="relative">
                        <input
                            name="university"
                            type="text"
                            required
                            defaultValue={initialData?.university}
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition bg-gray-50/30"
                            placeholder="e.g. Harvard University, USA"
                        />
                        <GraduationCap className="absolute left-3 top-3.5 text-gray-400" size={18} />
                    </div>
                </div>
            </div>

            {/* Success Story */}
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 tracking-tight">
                    Success Story Details
                </label>
                <textarea
                    name="story"
                    rows={6}
                    required
                    defaultValue={initialData?.story}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition bg-gray-50/30 resize-none"
                    placeholder="Share the journey, visa approval process, and student experience..."
                ></textarea>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end items-center gap-4 pt-4 border-t border-gray-50">
                <button
                    type="button"
                    onClick={() => router.push("/ts-staff-portal/successStories")}
                    disabled={loading || isCompressing}
                    className="px-6 py-2.5 text-gray-500 font-medium hover:text-gray-800 transition disabled:opacity-50"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    disabled={loading || isCompressing}
                    className="flex items-center gap-2 px-8 py-2.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-100 transition active:scale-95 disabled:bg-blue-400 disabled:cursor-not-allowed"
                >
                    {loading ? <Loader2 className="animate-spin" size={18} /> : isCompressing ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
                    {isCompressing ? "Optimizing..." : loading ? "Saving..." : mode === "edit" ? "Update Story" : "Publish Story"}
                </button>
            </div>
        </form>
    );
};

export default SuccessStoryForm;
