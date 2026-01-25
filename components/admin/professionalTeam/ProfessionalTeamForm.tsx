"use client";

import React, { useState } from "react";
import { Briefcase, Globe, Save, Loader2 } from "lucide-react";
import { createTeamMember, updateTeamMember } from "@/actions/professionalTeamActions";
import { handleServerResponse } from "@/lib/utils/formHelpers";
import ImageUpload from "@/components/admin/shared/ImageUpload";
import { useRouter } from "next/navigation";

interface ProfessionalTeamFormProps {
    mode: "create" | "edit";
    initialData?: {
        _id?: string;
        name: string;
        country: string;
        designation: string;
        image?: string;
    };
}

const ProfessionalTeamForm: React.FC<ProfessionalTeamFormProps> = ({
    mode,
    initialData,
}) => {
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
        const nameInput = form.querySelector('[name="name"]') as HTMLInputElement;
        const countryInput = form.querySelector('[name="country"]') as HTMLInputElement;
        const designationInput = form.querySelector('[name="designation"]') as HTMLInputElement;

        if (nameInput?.value) formData.append("name", nameInput.value);
        if (countryInput?.value) formData.append("country", countryInput.value);
        if (designationInput?.value) formData.append("designation", designationInput.value);

        // Add compressed image file if available
        if (imageFile) {
            formData.append("image", imageFile, imageFile.name);
        }

        try {
            const result =
                mode === "edit" && initialData?._id
                    ? await updateTeamMember(initialData._id, formData)
                    : await createTeamMember(formData);

            handleServerResponse(result, () => {
                router.push("/ts-staff-portal/professionalTeam");
            });
        } catch (error) {
            console.error("Error submitting team member:", error);
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
                label="Upload Photo"
                shape="circle"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name
                    </label>
                    <input
                        name="name"
                        type="text"
                        required
                        defaultValue={initialData?.name}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50/30"
                        placeholder="John Doe"
                    />
                </div>

                {/* Country */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Country
                    </label>
                    <div className="relative">
                        <input
                            name="country"
                            type="text"
                            required
                            defaultValue={initialData?.country}
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50/30"
                            placeholder="Bangladesh"
                        />
                        <Globe className="absolute left-3 top-3.5 text-gray-400" size={18} />
                    </div>
                </div>

                {/* Designation */}
                <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Designation
                    </label>
                    <div className="relative">
                        <input
                            name="designation"
                            type="text"
                            required
                            defaultValue={initialData?.designation}
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50/30"
                            placeholder="Senior Researcher"
                        />
                        <Briefcase className="absolute left-3 top-3.5 text-gray-400" size={18} />
                    </div>
                </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end items-center gap-4 pt-4 border-t border-gray-50">
                <button
                    type="button"
                    onClick={() => router.push("/ts-staff-portal/professionalTeam")}
                    disabled={loading || isCompressing}
                    className="px-6 py-2.5 text-gray-500 font-medium hover:text-gray-800 transition disabled:opacity-50"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    disabled={loading || isCompressing}
                    className="flex items-center gap-2 px-8 py-2.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition disabled:bg-blue-400 disabled:cursor-not-allowed"
                >
                    {loading ? <Loader2 className="animate-spin" size={18} /> : isCompressing ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
                    {isCompressing ? "Optimizing..." : loading ? "Saving..." : mode === "edit" ? "Update Member" : "Publish Member"}
                </button>
            </div>
        </form>
    );
};

export default ProfessionalTeamForm;
