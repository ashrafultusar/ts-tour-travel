"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface FormLayoutProps {
    title: string;
    description?: string;
    children: React.ReactNode;
    backUrl?: string;
    icon?: React.ReactNode;
}

const FormLayout: React.FC<FormLayoutProps> = ({
    title,
    description,
    children,
    backUrl,
    icon,
}) => {
    const router = useRouter();

    const handleBack = () => {
        if (backUrl) {
            router.push(backUrl);
        } else {
            router.back();
        }
    };

    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {/* Header with Back Button */}
            <div className="mb-6">
                <button
                    onClick={handleBack}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors"
                >
                    <ArrowLeft size={20} />
                    <span className="font-medium cursor-pointer">Back</span>
                </button>

                <div className="flex items-center gap-3">
                    {icon && <div className="text-blue-600">{icon}</div>}
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                            {title}
                        </h1>
                        {description && (
                            <p className="text-gray-500 text-sm mt-1">{description}</p>
                        )}
                    </div>
                </div>
            </div>

            {/* Form Content */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
                {children}
            </div>
        </div>
    );
};

export default FormLayout;
