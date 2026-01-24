"use client";

import React, { useEffect, useState, useCallback } from "react"; // useCallback যোগ করা হয়েছে
import { Camera, X, Loader2 } from "lucide-react";
import { toast } from "react-hot-toast";
import imageCompression from "browser-image-compression";

interface ImageUploadProps {
    name?: string;
    preview: string | null;
    onImageChange: (file: File | null, preview: string | null) => void;
    onCompressionStateChange?: (isCompressing: boolean) => void;
    label?: string;
    shape?: "circle" | "rectangle";
    maxSizeMB?: number;
    maxLimitMB?: number;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
    name = "image",
    preview,
    onImageChange,
    onCompressionStateChange,
    label = "Upload Image",
    shape = "rectangle",
    maxSizeMB = 1,
    maxLimitMB = 10,
}) => {
    const [isCompressing, setIsCompressing] = useState(false);
    const isCircle = shape === "circle";

    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Reset input value so same file can be selected again if removed
        e.target.value = "";

        if (!file.type.startsWith("image/")) {
            toast.error("Only image files are allowed");
            return;
        }

        if (file.size > maxLimitMB * 1024 * 1024) {
            toast.error(`Image too large (max ${maxLimitMB}MB)`);
            return;
        }

        // No compression needed if already small
        if (file.size <= maxSizeMB * 1024 * 1024) {
            const previewUrl = URL.createObjectURL(file);
            onImageChange(file, previewUrl);
            return;
        }

        try {
            setIsCompressing(true);
            onCompressionStateChange?.(true);
            const toastId = toast.loading("Optimizing image...");

            const options = {
                maxSizeMB: maxSizeMB,
                maxWidthOrHeight: 1920,
                useWebWorker: false,
                initialQuality: 0.8,
            };

            const compressed = await imageCompression(file, options);

            // Renaming and creating File object
            const renamedFile = new File([compressed], file.name, {
                type: file.type,
                lastModified: Date.now(),
            });

            const previewUrl = URL.createObjectURL(renamedFile);
            onImageChange(renamedFile, previewUrl);

            toast.success("Image optimized!", { id: toastId });
        } catch (err) {
            console.error("Compression Error:", err);
            toast.error("Compression failed");
        } finally {
            setIsCompressing(false);
            onCompressionStateChange?.(false);
        }
    };

    const handleRemove = useCallback(() => {
        if (preview) URL.revokeObjectURL(preview);
        onImageChange(null, null);
    }, [preview, onImageChange]);

    // Cleanup to prevent memory leaks
    useEffect(() => {
        return () => {
            if (preview && preview.startsWith("blob:")) {
                URL.revokeObjectURL(preview);
            }
        };
    }, [preview]);

    return (
        <div className={`w-full flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-xl py-6 bg-gray-50/50 hover:bg-gray-50 transition-colors ${isCompressing ? 'opacity-70 pointer-events-none' : ''}`}>
            {preview ? (
                <div className={`relative ${isCircle ? "h-32 w-32" : "h-48 w-full max-w-md px-4"}`}>
                    <img
                        src={preview}
                        alt="Preview"
                        className={`h-full w-full object-cover shadow-md transition-all ${isCircle ? "rounded-full border-4 border-white" : "rounded-lg"
                            }`}
                    />
                    <button
                        type="button"
                        onClick={handleRemove}
                        className="absolute -top-2 -right-1 bg-red-500 text-white rounded-full p-1.5 shadow-lg hover:bg-red-600 transition-transform hover:scale-110"
                    >
                        <X size={16} />
                    </button>
                </div>
            ) : (
                <label className="flex flex-col items-center cursor-pointer group w-full">
                    <div className="p-4 bg-white rounded-full shadow-sm mb-3 group-hover:scale-105 transition-transform border border-gray-100">
                        {isCompressing ? (
                            <Loader2 className="animate-spin text-blue-500" size={28} />
                        ) : (
                            <Camera className="text-blue-500" size={28} />
                        )}
                    </div>

                    <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition">
                        {isCompressing ? "Processing..." : label}
                    </span>

                    <span className="text-[11px] text-gray-400 mt-1 uppercase tracking-wider">
                        Max size: {maxSizeMB}MB
                    </span>

                    <input
                        type="file"
                        name={name}
                        accept="image/*"
                        disabled={isCompressing}
                        className="hidden"
                        onChange={handleImageChange}
                    />
                </label>
            )}
        </div>
    );
};

export default ImageUpload;