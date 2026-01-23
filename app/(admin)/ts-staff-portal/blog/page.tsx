"use client";

import React, { useState } from 'react';
import { Plus, ArrowLeft } from 'lucide-react';
import CreateBlog from '@/components/admin/blog/CreateBlog';

const BlogAdminPage = () => {
  // নতুন পোস্ট পেজ দেখাবে কি না তার জন্য স্টেট
  const [showCreateForm, setShowCreateForm] = useState(false);

  // এটি আপনার ডামি ডাটা, পরে API থেকে নিয়ে আসবেন
  const posts = [
    { id: 1, title: "প্রথম ব্লগ পোস্ট", date: "2024-05-20" },
    { id: 2, title: "ভিসা প্রসেসিং টিপস", date: "2024-05-18" },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* হেডার সেকশন */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            {showCreateForm ? "নতুন ব্লগ তৈরি করুন" : "সকল ব্লগ পোস্ট"}
          </h1>
          <p className="text-gray-500 text-sm">ব্লগ ম্যানেজমেন্ট প্যানেল</p>
        </div>

        <button
          onClick={() => setShowCreateForm(!showCreateForm)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all cursor-pointer ${
            showCreateForm 
              ? "bg-gray-200 text-gray-700 hover:bg-gray-300" 
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {showCreateForm ? (
            <><ArrowLeft size={18} /> Go Back</>
          ) : (
            <><Plus size={18} /> New Post</>
          )}
        </button>
      </div>

      <hr className="mb-8 border-gray-200" />

      {/* কন্ডিশনাল রেন্ডারিং */}
      {showCreateForm ? (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <CreateBlog/>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">শিরোনাম</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">তারিখ</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600 text-right">অ্যাকশন</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50/50 transition">
                  <td className="px-6 py-4 text-gray-800 font-medium">{post.title}</td>
                  <td className="px-6 py-4 text-gray-500 text-sm">{post.date}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-blue-600 hover:underline text-sm mr-4">Edit</button>
                    <button className="text-red-500 hover:underline text-sm">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {posts.length === 0 && (
            <div className="p-10 text-center text-gray-400">কোনো পোস্ট পাওয়া যায়নি।</div>
          )}
        </div>
      )}
    </div>
  );
};

export default BlogAdminPage;