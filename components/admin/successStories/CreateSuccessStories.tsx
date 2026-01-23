"use client";
import React, { useState } from "react";
import { Camera, Save, X, GraduationCap } from "lucide-react";

interface Props {
  onCancel: () => void;
}

const CreateSuccessStory = ({ onCancel }: Props) => {
  const [preview, setPreview] = useState<string | null>(null);

  // Image Preview Handler
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm animate-in fade-in duration-500">
      <form className="space-y-6">
        
        {/* ================= IMAGE UPLOAD ================= */}
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-xl py-6 bg-gray-50/50">
          {preview ? (
            <div className="relative h-32 w-32">
              <img 
                src={preview} 
                alt="Student Preview" 
                className="h-full w-full object-cover rounded-full border-4 border-white shadow-md" 
              />
              <button 
                type="button" 
                onClick={() => setPreview(null)}
                className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-1 shadow-sm hover:bg-red-600 transition"
              >
                <X size={14} />
              </button>
            </div>
          ) : (
            <label className="flex flex-col items-center cursor-pointer group">
              <div className="p-4 bg-white rounded-full shadow-sm group-hover:scale-110 transition">
                <Camera className="text-blue-500" size={28} />
              </div>
              <span className="mt-2 text-sm text-gray-500 font-medium group-hover:text-blue-500 transition">
                Upload Student Photo
              </span>
              <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
            </label>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* ================= STUDENT NAME ================= */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 tracking-tight">
              Student Name
            </label>
            <input 
              type="text" 
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition bg-gray-50/30" 
              placeholder="e.g. John Doe" 
            />
          </div>

          {/* ================= SUBJECT ================= */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 tracking-tight">
              Subject / Major
            </label>
            <input 
              type="text" 
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition bg-gray-50/30" 
              placeholder="e.g. B.Sc in Computer Science" 
            />
          </div>

          {/* ================= UNIVERSITY ================= */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2 tracking-tight">
              University & Country
            </label>
            <div className="relative">
              <input 
                type="text" 
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition bg-gray-50/30" 
                placeholder="e.g. Harvard University, USA" 
              />
              <GraduationCap className="absolute left-3 top-3.5 text-gray-400" size={18} />
            </div>
          </div>
        </div>

        {/* ================= SUCCESS STORY ================= */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2 tracking-tight">
            Success Story Details
          </label>
          <textarea 
            rows={6} 
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition bg-gray-50/30 resize-none" 
            placeholder="Share the journey, visa approval process, and student experience..."
          ></textarea>
        </div>

        {/* ================= ACTION BUTTONS ================= */}
        <div className="flex justify-end items-center gap-4 pt-4 border-t border-gray-50">
          <button 
            type="button" 
            onClick={onCancel} 
            className="px-6 py-2.5 text-gray-500 font-medium hover:text-gray-800 transition"
          >
            Cancel
          </button>
          <button 
            type="submit" 
            className="flex items-center gap-2 px-8 py-2.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-100 transition active:scale-95"
          >
            <Save size={18} />
            Publish Story
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateSuccessStory;