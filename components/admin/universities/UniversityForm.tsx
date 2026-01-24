"use client";

import React, { useState, useEffect } from "react";
import { Camera, Save, X, Loader2, CheckCircle2 } from "lucide-react";
import { createUniversity, updateUniversity } from "@/actions/universityActions";
import { handleServerResponse, displayValidationErrors } from "@/lib/utils/formHelpers";
import ImageUpload from "@/components/admin/shared/ImageUpload";
import { useRouter } from "next/navigation";

interface UniversityFormProps {
    mode: "create" | "edit";
    initialData?: {
        _id?: string;
        name: string;
        location: string;
        level: string[];
        offerType: "Free" | "Paid";
        description?: string;
        image?: string;
    };
}

const LEVELS = [
    "Diploma",
    "Bachelor Degree",
    "Masters Degree",
    "Doctoral Degree (PhD)",
    "Advance Diploma",
    "Certificate",
    "Foundation / A-level",
];

const UniversityForm: React.FC<UniversityFormProps> = ({ mode, initialData }) => {
    const router = useRouter();
    const [preview, setPreview] = useState<string | null>(initialData?.image || null);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [isCompressing, setIsCompressing] = useState(false);
    const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});
    const [selectedLevels, setSelectedLevels] = useState<string[]>(initialData?.level || []);

    const handleImageChange = (file: File | null, previewUrl: string | null) => {
        setImageFile(file);
        setPreview(previewUrl);
    };

    const handleCompressionStateChange = (compressing: boolean) => {
        setIsCompressing(compressing);
    };

    const handleLevelToggle = (level: string) => {
        setSelectedLevels((prev) =>
            prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]
        );
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setFieldErrors({});

        const form = e.currentTarget;
        const formData = new FormData();

        // Manually add form fields
        const nameInput = form.querySelector('[name="universityName"]') as HTMLInputElement;
        const locationInput = form.querySelector('[name="location"]') as HTMLInputElement;
        const offerTypeInput = form.querySelector('[name="offerLetterType"]') as HTMLSelectElement;
        const descInput = form.querySelector('[name="description"]') as HTMLTextAreaElement;

        if (nameInput?.value) formData.append("universityName", nameInput.value);
        if (locationInput?.value) formData.append("location", locationInput.value);
        if (offerTypeInput?.value) formData.append("offerLetterType", offerTypeInput.value);
        if (descInput?.value) formData.append("description", descInput.value);

        // Add selected levels
        selectedLevels.forEach(level => formData.append("level", level));

        // Add compressed image file if available
        if (imageFile) {
            formData.append("image", imageFile, imageFile.name);
        }

        try {
            const result =
                mode === "edit" && initialData?._id
                    ? await updateUniversity(initialData._id, formData)
                    : await createUniversity(formData);

            if (result.success) {
                handleServerResponse(result, () => {
                    router.push("/ts-staff-portal/universities");
                });
            } else {
                if (result.errors) {
                    setFieldErrors(result.errors);
                    displayValidationErrors(result.errors);
                } else {
                    handleServerResponse(result);
                }
            }
        } catch (error) {
            console.error("Error submitting university:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            {/* IMAGE UPLOAD SECTION */}
            <ImageUpload
                name="image"
                preview={preview}
                onImageChange={handleImageChange}
                onCompressionStateChange={handleCompressionStateChange}
                label="Upload Campus Header Image"
                shape="rectangle"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* UNIVERSITY NAME */}
                <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                        University Full Name
                    </label>
                    <input
                        name="universityName"
                        type="text"
                        defaultValue={initialData?.name}
                        className={`w-full px-5 py-3.5 border rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 transition-all ${fieldErrors.universityName ? "border-red-500 bg-red-50/10" : "border-gray-200 bg-gray-50/30"
                            }`}
                        placeholder="e.g. Harvard University"
                    />
                    {fieldErrors.universityName && (
                        <p className="text-red-500 text-xs mt-2 ml-1 italic font-medium">
                            {fieldErrors.universityName[0]}
                        </p>
                    )}
                </div>

                {/* STATE / LOCATION */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                        State / Region & Country
                    </label>
                    <input
                        name="location"
                        type="text"
                        defaultValue={initialData?.location}
                        className={`w-full px-5 py-3.5 border rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 transition-all ${fieldErrors.location ? "border-red-500" : "border-gray-200"
                            } bg-gray-50/30`}
                        placeholder="e.g. Cambridge, USA"
                    />
                    {fieldErrors.location && (
                        <p className="text-red-500 text-xs mt-2 ml-1 italic font-medium">
                            {fieldErrors.location[0]}
                        </p>
                    )}
                </div>

                {/* OFFER LETTER TYPE */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                        Offer Letter Policy
                    </label>
                    <select
                        name="offerLetterType"
                        defaultValue={initialData?.offerType || "Free"}
                        className="w-full px-5 py-3.5 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50/30 appearance-none cursor-pointer"
                    >
                        <option value="Free">Free Offer Letter</option>
                        <option value="Paid">Offer Letter Fees Apply</option>
                    </select>
                </div>

                {/* LEVELS OFFERED (Multiple Choice) */}
                <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-gray-700 mb-3">
                        Programs & Levels Offered (Select all that apply)
                    </label>
                    <div
                        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-5 rounded-2xl border-2 transition-colors ${fieldErrors.level ? "border-red-200 bg-red-50/20" : "border-gray-100 bg-gray-50/30"
                            }`}
                    >
                        {LEVELS.map((level) => (
                            <label
                                key={level}
                                className="relative flex items-center p-3 rounded-xl border border-transparent bg-white shadow-sm hover:border-blue-300 cursor-pointer transition-all group"
                            >
                                <input
                                    type="checkbox"
                                    name="level"
                                    value={level}
                                    checked={selectedLevels.includes(level)}
                                    onChange={() => handleLevelToggle(level)}
                                    className="peer hidden"
                                />
                                <div className="w-5 h-5 border-2 border-gray-300 rounded-md mr-3 peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-all flex items-center justify-center">
                                    {selectedLevels.includes(level) && (
                                        <CheckCircle2 size={14} className="text-white" />
                                    )}
                                </div>
                                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600">
                                    {level}
                                </span>
                            </label>
                        ))}
                    </div>
                    {fieldErrors.level && (
                        <p className="text-red-500 text-xs mt-2 ml-1 italic font-medium">
                            {fieldErrors.level[0]}
                        </p>
                    )}
                </div>
            </div>

            {/* DESCRIPTION */}
            <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                    About University
                </label>
                <textarea
                    name="description"
                    rows={5}
                    defaultValue={initialData?.description}
                    className="w-full px-5 py-4 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50/30 resize-none transition-all"
                    placeholder="Write a brief overview of the university, admission rules, and facilities..."
                ></textarea>
            </div>

            {/* ACTIONS */}
            <div className="flex flex-col sm:flex-row justify-end gap-4 pt-6 border-t border-gray-100">
                <button
                    type="button"
                    onClick={() => router.push("/ts-staff-portal/universities")}
                    disabled={loading || isCompressing}
                    className="px-8 py-3.5 text-gray-500 font-bold hover:bg-gray-100 rounded-2xl transition disabled:opacity-50"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    disabled={loading || isCompressing}
                    className="flex items-center justify-center gap-2 px-10 py-3.5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all active:scale-95 disabled:bg-blue-400 disabled:cursor-not-allowed"
                >
                    {loading ? <Loader2 className="animate-spin" size={20} /> : isCompressing ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} />}
                    {isCompressing ? "Optimizing..." : loading ? "Processing..." : mode === "edit" ? "Update University" : "Submit University"}
                </button>
            </div>
        </form>
    );
};

export default UniversityForm;
