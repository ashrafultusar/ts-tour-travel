"use client";

import React, { useState } from "react";
import { Save, X, Loader2, CheckCircle2, Plus, Trash2, ChevronDown, ChevronUp } from "lucide-react";
import { createUniversity, updateUniversity } from "@/actions/universityActions";
import { handleServerResponse, displayValidationErrors } from "@/lib/utils/formHelpers";
import ImageUpload from "@/components/admin/shared/ImageUpload";
import { useRouter } from "next/navigation";

interface UniversityFormProps {
    mode: "create" | "edit";
    initialData?: any;
}

const LEVELS = [
    "Diploma", "Bachelor Degree", "Masters Degree", "Doctoral Degree (PhD)",
    "Advance Diploma", "Certificate", "Foundation / A-level",
];

const UniversityForm: React.FC<UniversityFormProps> = ({ mode, initialData }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [isCompressing, setIsCompressing] = useState(false);
    const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});
    const [selectedLevels, setSelectedLevels] = useState<string[]>(initialData?.level || []);

    // Image States
    const [preview, setPreview] = useState<string | null>(initialData?.image || null);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [aboutPreview, setAboutPreview] = useState<string | null>(initialData?.aboutImage || null);
    const [aboutImageFile, setAboutImageFile] = useState<File | null>(null);

    // Departments & Courses State
    const [departments, setDepartments] = useState(
        initialData?.departments || [{ name: "", courses: [{ name: "", duration: "" }] }]
    );
    const [openDept, setOpenDept] = useState<number | null>(0);

    const handleLevelToggle = (level: string) => {
        setSelectedLevels((prev) =>
            prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]
        );
    };

    // Department Handlers
    const addDepartment = () => {
        setDepartments([...departments, { name: "", courses: [{ name: "", duration: "" }] }]);
        setOpenDept(departments.length);
    };

    const updateDeptName = (index: number, name: string) => {
        const newDepts = [...departments];
        newDepts[index].name = name;
        setDepartments(newDepts);
    };

    const addCourse = (dIdx: number) => {
        const newDepts = [...departments];
        newDepts[dIdx].courses.push({ name: "", duration: "" });
        setDepartments(newDepts);
    };

    const updateCourse = (dIdx: number, cIdx: number, field: string, val: string) => {
        const newDepts = [...departments];
        newDepts[dIdx].courses[cIdx][field] = val;
        setDepartments(newDepts);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setFieldErrors({});

        const formData = new FormData(e.currentTarget);
        
        // Append levels manually
        formData.delete("level");
        selectedLevels.forEach(lvl => formData.append("level", lvl));

        // Append dynamic departments as JSON string
        formData.append("departments", JSON.stringify(departments));

        // Append images
        if (imageFile) formData.append("image", imageFile);
        if (aboutImageFile) formData.append("aboutImage", aboutImageFile);

        try {
            const result = mode === "edit" && initialData?._id
                ? await updateUniversity(initialData._id, formData)
                : await createUniversity(formData);

            if (result.success) {
                handleServerResponse(result, () => router.push("/ts-staff-portal/universities"));
            } else if (result.errors) {
                setFieldErrors(result.errors);
                displayValidationErrors(result.errors);
            }
        } catch (error) {
            console.error("Submission error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-10 max-w-5xl mx-auto pb-10">
            {/* 1. IMAGES SECTION */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ImageUpload
                    label="Campus logo Image"
                    preview={preview}
                    onImageChange={(file, url) => { setImageFile(file); setPreview(url); }}
                    onCompressionStateChange={setIsCompressing}
                    shape="rectangle"
                />
                <ImageUpload
                    label="About Section Image"
                    preview={aboutPreview}
                    onImageChange={(file, url) => { setAboutImageFile(file); setAboutPreview(url); }}
                    onCompressionStateChange={setIsCompressing}
                    shape="rectangle"
                />
            </div>

            {/* 2. BASIC INFORMATION */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                        <label className="block text-sm font-bold text-gray-700 mb-2">University Full Name</label>
                        <input
                            name="universityName"
                            type="text"
                            defaultValue={initialData?.name}
                            className={`w-full px-5 py-3.5 border rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 transition-all ${fieldErrors.universityName ? "border-red-500" : "border-gray-200 bg-gray-50/30"}`}
                            placeholder="e.g. Harvard University"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Location (State/Country)</label>
                        <input
                            name="location"
                            type="text"
                            defaultValue={initialData?.location}
                            className="w-full px-5 py-3.5 border border-gray-200 rounded-2xl bg-gray-50/30 outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="e.g. Cambridge, USA"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Offer Letter Policy</label>
                        <select
                            name="offerLetterType"
                            defaultValue={initialData?.offerType || "Free"}
                            className="w-full px-5 py-3.5 border border-gray-200 rounded-2xl bg-gray-50/30 outline-none cursor-pointer"
                        >
                            <option value="Free">Free Offer Letter</option>
                            <option value="Paid">Offer Letter Fees Apply</option>
                        </select>
                    </div>
                </div>

                {/* Levels Selection */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3 text-gray-700">Programs & Levels Offered</label>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                        {LEVELS.map((level) => (
                            <label key={level} className="flex items-center p-3 rounded-xl border border-gray-100 bg-gray-50/50 cursor-pointer hover:border-blue-400 transition-all group">
                                <input
                                    type="checkbox"
                                    checked={selectedLevels.includes(level)}
                                    onChange={() => handleLevelToggle(level)}
                                    className="peer hidden"
                                />
                                <div className={`w-5 h-5 border-2 rounded-md mr-3 flex items-center justify-center transition-all ${selectedLevels.includes(level) ? "bg-blue-600 border-blue-600" : "bg-white border-gray-300"}`}>
                                    {selectedLevels.includes(level) && <CheckCircle2 size={14} className="text-white" />}
                                </div>
                                <span className="text-sm font-medium text-gray-600 group-hover:text-blue-600">{level}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>

            {/* 3. DYNAMIC DEPARTMENTS & COURSES */}
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800">Departments and Courses</h3>
                {departments.map((dept: any, dIdx: number) => (
                    <div key={dIdx} className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                        {/* Dept Header */}
                        <div 
                            className="flex items-center justify-between p-4 bg-gray-50/80 cursor-pointer"
                            onClick={() => setOpenDept(openDept === dIdx ? null : dIdx)}
                        >
                            <input
                                placeholder="Department Name (e.g. Faculty of Engineering)"
                                className="bg-transparent font-bold text-blue-900 outline-none w-full placeholder:text-gray-400"
                                value={dept.name}
                                onClick={(e) => e.stopPropagation()}
                                onChange={(e) => updateDeptName(dIdx, e.target.value)}
                            />
                            <div className="flex items-center gap-4 text-gray-500">
                                <button type="button" onClick={(e) => { e.stopPropagation(); setDepartments(departments.filter((_:any, i:number) => i !== dIdx)) }}><Trash2 size={18} className="hover:text-red-500" /></button>
                                {openDept === dIdx ? <ChevronUp /> : <ChevronDown />}
                            </div>
                        </div>

                        {/* Dept Content - Table Style */}
                        {openDept === dIdx && (
                            <div className="animate-in slide-in-from-top-2 duration-300">
                                <table className="w-full">
                                    <thead>
                                        <tr className="bg-[#1a2b3c] text-white text-xs uppercase tracking-wider">
                                            <th className="p-3 text-left font-semibold">Course Name</th>
                                            <th className="p-3 text-left font-semibold">Duration</th>
                                            <th className="w-10"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {dept.courses.map((course: any, cIdx: number) => (
                                            <tr key={cIdx} className="hover:bg-gray-50/50">
                                                <td className="p-2">
                                                    <input 
                                                        className="w-full p-2 text-sm outline-none bg-transparent" 
                                                        placeholder="e.g. B.Sc in Software Engineering"
                                                        value={course.name}
                                                        onChange={(e) => updateCourse(dIdx, cIdx, "name", e.target.value)}
                                                    />
                                                </td>
                                                <td className="p-2 border-l border-gray-50">
                                                    <input 
                                                        className="w-full p-2 text-sm outline-none bg-transparent" 
                                                        placeholder="e.g. 4 Years"
                                                        value={course.duration}
                                                        onChange={(e) => updateCourse(dIdx, cIdx, "duration", e.target.value)}
                                                    />
                                                </td>
                                                <td className="p-2">
                                                    <button type="button" onClick={() => {
                                                        const newD = [...departments];
                                                        newD[dIdx].courses.splice(cIdx, 1);
                                                        setDepartments(newD);
                                                    }} className="text-gray-300 hover:text-red-500"><X size={16} /></button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <button type="button" onClick={() => addCourse(dIdx)} className="m-4 text-xs font-bold text-blue-600 flex items-center gap-1 hover:underline">
                                    <Plus size={14} /> Add More Course
                                </button>
                            </div>
                        )}
                    </div>
                ))}
                <button type="button" onClick={addDepartment} className="w-full py-4 border-2 border-dashed border-gray-200 rounded-2xl text-gray-400 font-bold hover:bg-gray-50 hover:border-blue-200 hover:text-blue-500 transition-all">
                    + Add New Department
                </button>
            </div>

            {/* 4. DESCRIPTION */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100">
                <label className="block text-sm font-bold text-gray-700 mb-2">About University</label>
                <textarea
                    name="description"
                    rows={6}
                    defaultValue={initialData?.description}
                    className="w-full px-5 py-4 border border-gray-200 rounded-2xl bg-gray-50/30 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="Brief overview, admission rules, etc..."
                ></textarea>
            </div>

            {/* 5. ACTIONS */}
            <div className="flex justify-end gap-4 pt-6 border-t border-gray-100">
                <button
                    type="button"
                    onClick={() => router.push("/ts-staff-portal/universities")}
                    className="px-8 py-3.5 text-gray-500 font-bold hover:bg-gray-100 rounded-2xl transition"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    disabled={loading || isCompressing}
                    className="flex items-center gap-2 px-10 py-3.5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 shadow-lg shadow-blue-100 transition-all active:scale-95 disabled:opacity-70"
                >
                    {loading ? <Loader2 className="animate-spin" /> : isCompressing ? <Loader2 className="animate-spin" /> : <Save size={20} />}
                    {isCompressing ? "Optimizing..." : loading ? "Processing..." : mode === "edit" ? "Update University" : "Submit University"}
                </button>
            </div>
        </form>
    );
};

export default UniversityForm;