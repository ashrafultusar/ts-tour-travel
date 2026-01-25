"use client";
import React, { useState, useEffect } from "react";
import { Camera, Save, X, Loader2, CheckCircle2 } from "lucide-react";
import { createUniversityAction } from "@/actions/addUniversity";
import { toast } from "react-hot-toast";

interface Props {
  onCancel: () => void;
}

const LEVELS = [
  "Diploma", 
  "Bachelor Degree", 
  "Masters Degree", 
  "Doctoral Degree (PhD)", 
  "Advance Diploma", 
  "Certificate", 
  "Foundation / A-level"
];

const CreateUniversity = ({ onCancel }: Props) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});

  // Clean up preview URL to prevent memory leaks
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        return toast.error("Image size must be less than 2MB");
      }
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setFieldErrors({});

    const formData = new FormData(e.currentTarget);
    
    try {
      const result = await createUniversityAction(formData);

      if (result.success) {
        toast.success(result.message || "University saved successfully!");
        onCancel();
      } else {
        if (result.errors) {
          setFieldErrors(result.errors);
          toast.error("Please fix the validation errors.");
        } else {
          toast.error(result.message || "Something went wrong");
        }
      }
    } catch (error) {
      toast.error("Failed to connect to server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-2xl max-w-5xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Add New University</h2>
        <p className="text-gray-500">Fill in the details below to list a new institution.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* IMAGE UPLOAD SECTION */}
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-3xl py-10 bg-gray-50/50 hover:bg-gray-50 transition-colors">
          {preview ? (
            <div className="relative h-48 w-full max-w-md">
              <img
                src={preview}
                alt="University Preview"
                className="h-full w-full object-cover rounded-2xl shadow-lg"
              />
              <button
                type="button"
                onClick={() => setPreview(null)}
                className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full p-2 shadow-xl hover:bg-red-600 transition"
              >
                <X size={18} />
              </button>
            </div>
          ) : (
            <label className="flex flex-col items-center cursor-pointer group">
              <div className="p-5 bg-white rounded-full shadow-md mb-3 group-hover:scale-110 transition-transform">
                <Camera className="text-blue-500" size={32} />
              </div>
              <span className="text-base text-gray-600 font-semibold">Upload Campus Header Image</span>
              <span className="text-xs text-gray-400 mt-1">PNG, JPG up to 2MB</span>
              <input
                type="file"
                name="image"
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* UNIVERSITY NAME */}
          <div className="md:col-span-2">
            <label className="block text-sm font-bold text-gray-700 mb-2">University Full Name</label>
            <input
              name="universityName"
              type="text"
              className={`w-full px-5 py-3.5 border rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                fieldErrors.universityName ? 'border-red-500 bg-red-50/10' : 'border-gray-200 bg-gray-50/30'
              }`}
              placeholder="e.g. Harvard University"
            />
            {fieldErrors.universityName && <p className="text-red-500 text-xs mt-2 ml-1 italic font-medium">{fieldErrors.universityName[0]}</p>}
          </div>

          {/* STATE / LOCATION */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">State / Region & Country</label>
            <input
              name="location"
              type="text"
              className={`w-full px-5 py-3.5 border rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                fieldErrors.location ? 'border-red-500' : 'border-gray-200'
              } bg-gray-50/30`}
              placeholder="e.g. Cambridge, USA"
            />
            {fieldErrors.location && <p className="text-red-500 text-xs mt-2 ml-1 italic font-medium">{fieldErrors.location[0]}</p>}
          </div>

          {/* OFFER LETTER TYPE */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Offer Letter Policy</label>
            <select 
              name="offerLetterType" 
              className="w-full px-5 py-3.5 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50/30 appearance-none cursor-pointer"
            >
              <option value="Free">Free Offer Letter</option>
              <option value="Paid">Offer Letter Fees Apply</option>
            </select>
          </div>

          {/* LEVELS OFFERED (Multiple Choice) */}
          <div className="md:col-span-2">
            <label className="block text-sm font-bold text-gray-700 mb-3">Programs & Levels Offered (Select all that apply)</label>
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-5 rounded-2xl border-2 transition-colors ${
              fieldErrors.level ? 'border-red-200 bg-red-50/20' : 'border-gray-100 bg-gray-50/30'
            }`}>
              {LEVELS.map((level) => (
                <label 
                  key={level} 
                  className="relative flex items-center p-3 rounded-xl border border-transparent bg-white shadow-sm hover:border-blue-300 cursor-pointer transition-all group"
                >
                  <input 
                    type="checkbox" 
                    name="level" 
                    value={level} 
                    className="peer hidden" 
                  />
                  <div className="w-5 h-5 border-2 border-gray-300 rounded-md mr-3 peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-all flex items-center justify-center">
                    <CheckCircle2 size={14} className="text-white hidden peer-checked:block" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600">{level}</span>
                </label>
              ))}
            </div>
            {fieldErrors.level && <p className="text-red-500 text-xs mt-2 ml-1 italic font-medium">{fieldErrors.level[0]}</p>}
          </div>
        </div>

        {/* DESCRIPTION */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">About University</label>
          <textarea
            name="description"
            rows={5}
            className="w-full px-5 py-4 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50/30 resize-none transition-all"
            placeholder="Write a brief overview of the university, admission rules, and facilities..."
          ></textarea>
        </div>

        {/* ACTIONS */}
        <div className="flex flex-col sm:flex-row justify-end gap-4 pt-6 border-t border-gray-100">
          <button
            type="button"
            onClick={onCancel}
            disabled={loading}
            className="px-8 py-3.5 text-gray-500 font-bold hover:bg-gray-100 rounded-2xl transition disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-2 px-10 py-3.5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all active:scale-95 disabled:bg-blue-400"
          >
            {loading ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} />}
            {loading ? "Processing..." : "Submit University"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateUniversity;