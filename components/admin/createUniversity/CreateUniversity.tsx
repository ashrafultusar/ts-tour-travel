"use client";
import React, { useState } from "react";
import { Camera, Save, X, } from "lucide-react";

interface Props {
  onCancel: () => void;
}

const CreateUniversity = ({ onCancel }: Props) => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
      <form className="space-y-6">
        {/* IMAGE UPLOAD */}
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-2xl py-8 bg-gray-50/50">
          {preview ? (
            <div className="relative h-40 w-full max-w-sm">
              <img
                src={preview}
                alt="University"
                className="h-full w-full object-cover rounded-xl shadow-md"
              />
              <button
                type="button"
                onClick={() => setPreview(null)}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1.5 shadow-lg"
              >
                <X size={16} />
              </button>
            </div>
          ) : (
            <label className="flex flex-col items-center cursor-pointer">
              <div className="p-4 bg-white rounded-full shadow-sm mb-2">
                <Camera className="text-blue-500" size={30} />
              </div>
              <span className="text-sm text-gray-500 font-medium">
                Upload Campus Image
              </span>
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* UNIVERSITY NAME */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              University Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50/30"
              placeholder="e.g. Oxford University"
            />
          </div>

          {/* STATE / LOCATION */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              State / Region
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50/30"
              placeholder="e.g. California, USA"
            />
          </div>

          {/* LEVEL OF INTEREST */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Level of Interest
            </label>
            <select className="w-full px-4 py-3 border border-gray-200 cursor-pointer rounded-xl outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50/30 appearance-none">
              <option value="High"> Diploma</option>
              <option value="Medium">Bachelor Degree</option>
              <option value="Low">Masters Degree</option>
              <option value="Low">Doctoral Degree (PhD)</option>
              <option value="Low">Advance Diploma</option>
              <option value="Low">Certificate</option>
              <option value="Low">Foundation / A-level</option>
            </select>
          </div>

          {/* OFFER LETTER TYPE */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Offer Letter Type
            </label>
            <select className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50/30 appearance-none">
              <option value="Conditional">Free Offer Lette</option>
              <option value="Both">Offer Letter Fees Apply</option>
            </select>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Description
          </label>
          <textarea
            rows={5}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50/30 resize-none"
            placeholder="Provide details about the university, admission criteria, etc..."
          ></textarea>
        </div>

        {/* ACTIONS */}
        <div className="flex justify-end gap-4 pt-4 border-t border-gray-50">
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-2.5 text-gray-500 font-medium hover:text-gray-800 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex items-center gap-2 px-8 py-2.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-100 transition"
          >
            <Save size={18} />
            Save University
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateUniversity;
