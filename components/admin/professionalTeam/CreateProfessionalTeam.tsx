"use client";
import React, { useState, useEffect } from "react";
import { Camera, Save, X, Briefcase, Globe, Loader2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { createTeamMember } from "@/actions/professionalTeam";

interface Props {
  onCancel: () => void;
}

const CreateProfessionalTeam = ({ onCancel }: Props) => {
  const router = useRouter();
  const [preview, setPreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    designation: "",
  });

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("country", formData.country);
      data.append("designation", formData.designation);
      if (imageFile) {
        data.append("image", imageFile);
      }

      const response = await createTeamMember(data);

      if (response.success) {
        alert(response.message);
        onCancel();
        router.refresh();
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* IMAGE UPLOAD */}
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-xl py-6 bg-gray-50/50">
          {preview ? (
            <div className="relative h-32 w-32">
              <Image 
                src={preview} 
                alt="Preview" 
                fill 
                className="object-cover rounded-full border-4 border-white shadow-md" 
              />
              <button 
                type="button" 
                onClick={() => { setPreview(null); setImageFile(null); }}
                className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-1 z-10"
              >
                <X size={14} />
              </button>
            </div>
          ) : (
            <label className="flex flex-col items-center cursor-pointer group">
              <div className="p-4 bg-white rounded-full shadow-sm group-hover:scale-110 transition">
                <Camera className="text-blue-500" size={28} />
              </div>
              <span className="mt-2 text-sm text-gray-500 font-medium">Upload Photo</span>
              <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
            </label>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* NAME */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
            <input 
              type="text" 
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50/30" 
              placeholder="John Doe" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          {/* COUNTRY */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Country</label>
            <div className="relative">
              <input 
                type="text" 
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50/30" 
                placeholder="Bangladesh" 
                value={formData.country}
                onChange={(e) => setFormData({...formData, country: e.target.value})}
              />
              <Globe className="absolute left-3 top-3.5 text-gray-400" size={18} />
            </div>
          </div>

          {/* DESIGNATION */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Designation</label>
            <div className="relative">
              <input 
                type="text" 
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50/30" 
                placeholder="Senior Researcher" 
                value={formData.designation}
                onChange={(e) => setFormData({...formData, designation: e.target.value})}
              />
              <Briefcase className="absolute left-3 top-3.5 text-gray-400" size={18} />
            </div>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex justify-end items-center gap-4 pt-4 border-t border-gray-50">
          <button type="button" onClick={onCancel} disabled={loading} className="px-6 py-2.5 text-gray-500 font-medium disabled:opacity-50">
            Cancel
          </button>
          <button 
            type="submit" 
            disabled={loading}
            className="flex items-center gap-2 px-8 py-2.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition disabled:bg-blue-400"
          >
            {loading ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
            {loading ? "Saving..." : "Publish Member"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProfessionalTeam;