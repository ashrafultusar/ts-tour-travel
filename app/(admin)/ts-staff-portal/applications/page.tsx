"use client";

import React, { useState } from "react";
import {
  Search,
  Filter,
  Download,
  Plus,
  MoreHorizontal,
  Clock,
  Loader2,
  CheckCircle2,
  XCircle,
} from "lucide-react";

const ApplicationsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  // ডাটাবেস বা API থেকে আসা স্যাম্পল ডাটা
  const applications = [
    {
      id: "APP001",
      name: "মোহাম্মদ রাহাত",
      email: "rahat@email.com",
      service: "Malaysia Student Visa",
      university: "University of Malaya",
      documents: 8,
      status: "processing",
      date: "২১ জানুয়ারি, ২০২৬",
    },
    {
      id: "APP002",
      name: "ফাতিমা আক্তার",
      email: "fatima@email.com",
      service: "Malaysia Admission",
      university: "Taylor's University",
      documents: 12,
      status: "approved",
      date: "২০ জানুয়ারি, ২০২৬",
    },
    {
      id: "APP003",
      name: "আব্দুল করিম",
      email: "karim@email.com",
      service: "Tourist Visa",
      university: "",
      documents: 5,
      status: "pending",
      date: "১৯ জানুয়ারি, ২০২৬",
    },
    {
      id: "APP004",
      name: "নুসরাত জাহান",
      email: "nusrat@email.com",
      service: "Air Ticket",
      university: "",
      documents: 3,
      status: "approved",
      date: "১৮ জানুয়ারি, ২০২৬",
    },
    {
      id: "APP005",
      name: "তানভীর হাসান",
      email: "tanvir@email.com",
      service: "Malaysia Student Visa",
      university: "UCSI University",
      documents: 10,
      status: "rejected",
      date: "১৭ জানুয়ারি, ২০২৬",
    },
    {
      id: "APP006",
      name: "সাবরিনা রহমান",
      email: "sabrina@email.com",
      service: "Malaysia Admission",
      university: "Sunway University",
      documents: 9,
      status: "processing",
      date: "১৬ জানুয়ারি, ২০২৬",
    },
  ];

  const statusStyles = {
    processing: "bg-blue-50 text-blue-600 border-blue-100",
    approved: "bg-green-50 text-green-600 border-green-100",
    pending: "bg-orange-50 text-orange-600 border-orange-100",
    rejected: "bg-red-50 text-red-600 border-red-100",
  };

  const statusLabels = {
    processing: {
      label: "প্রসেসিং",
      icon: <Loader2 className="w-3.5 h-3.5 animate-spin" />,
    },
    approved: {
      label: "অনুমোদিত",
      icon: <CheckCircle2 className="w-3.5 h-3.5" />,
    },
    pending: { label: "পেন্টিং", icon: <Clock className="w-3.5 h-3.5" /> },
    rejected: { label: "বাতিল", icon: <XCircle className="w-3.5 h-3.5" /> },
  };

  return (
    <div className="p-6 bg-[#F8FAFC] min-h-screen font-sans">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">অ্যাপ্লিকেশন</h1>
          <p className="text-slate-500 text-sm mt-1">
            সকল আবেদন ট্র্যাক ও ম্যানেজ করুন
          </p>
        </div>
        <button className="bg-[#1D4ED8] hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-all shadow-sm">
          <Plus className="w-4 h-4" /> নতুন আবেদন
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-slate-800">6</span>
          <span className="text-xs text-slate-500">মোট আবেদন</span>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-orange-500">1</span>
          <span className="text-xs text-slate-500">পেন্ডিং</span>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-blue-500">2</span>
          <span className="text-xs text-slate-500">প্রসেসিং</span>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-green-500">2</span>
          <span className="text-xs text-slate-500">অনুমোদিত</span>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="আইডি, নাম বা ইমেইল দিয়ে খুঁজুন..."
            className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
          />
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50">
            <Filter className="w-4 h-4" /> ফিল্টার
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50">
            <Download className="w-4 h-4" /> এক্সপোর্ট
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="px-6 py-4 text-[13px] font-semibold text-slate-600">
                  আবেদন আইডি
                </th>
                <th className="px-6 py-4 text-[13px] font-semibold text-slate-600">
                  আবেদনকারী
                </th>
                <th className="px-6 py-4 text-[13px] font-semibold text-slate-600">
                  সার্ভিস
                </th>
                <th className="px-6 py-4 text-[13px] font-semibold text-slate-600">
                  ডকুমেন্ট
                </th>
                <th className="px-6 py-4 text-[13px] font-semibold text-slate-600">
                  স্ট্যাটাস
                </th>
                <th className="px-6 py-4 text-[13px] font-semibold text-slate-600">
                  তারিখ
                </th>
                <th className="px-6 py-4 text-[13px] font-semibold text-slate-600 text-right">
                  অ্যাকশন
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {applications.map((app) => (
                <tr
                  key={app.id}
                  className="hover:bg-slate-50/80 transition-colors group"
                >
                  <td className="px-6 py-4 text-sm font-medium text-blue-600">
                    {app.id}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-slate-700">
                        {app.name}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        {app.email}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm text-slate-600">
                        {app.service}
                      </span>
                      <span className="text-[11px] text-slate-400 italic">
                        {app.university}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    {app.documents} টি
                  </td>
                  <td className="px-6 py-4">
                    <div
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[12px] font-medium ${
                        statusStyles[app.status as keyof typeof statusStyles]
                      }`}
                    >
                      {
                        statusLabels[app.status as keyof typeof statusLabels]
                          .icon
                      }
                      {
                        statusLabels[app.status as keyof typeof statusLabels]
                          .label
                      }
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">
                    {app.date}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-1 hover:bg-slate-100 rounded-md transition-colors text-slate-400 group-hover:text-slate-600">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="px-6 py-4 flex items-center justify-between bg-slate-50/30 border-t border-slate-100">
          <span className="text-[13px] text-slate-500 font-medium">
            মোট 6 আবেদন দেখাচ্ছে
          </span>
          <div className="flex gap-2">
            <button className="px-4 py-1.5 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 disabled:opacity-50">
              পূর্ববর্তী
            </button>
            <button className="px-4 py-1.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
              পরবর্তী
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationsPage;
