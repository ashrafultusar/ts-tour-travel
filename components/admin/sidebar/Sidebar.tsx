'use client'
import React, { useState } from "react";
import { usePathname } from "next/navigation"; 
import {
  LayoutDashboard,
  Users,
  FileText,
  MessageSquare,
  Star,
  LogOut,
  Menu,
  X,
  GraduationCap,
  Plane,
  Bell,
} from "lucide-react";
import { cn } from "@/lib/utils"; 
import Link from "next/link";

const navigation = [
  { name: "ড্যাশবোর্ড", href: "/", icon: LayoutDashboard },
  { name: "স্টুডেন্ট/লিড", href: "/students", icon: Users },
  { name: "অ্যাপ্লিকেশন", href: "/applications", icon: FileText },
  { name: "ইনকোয়ারি", href: "/inquiries", icon: MessageSquare },
  { name: "রিভিউ", href: "/reviews", icon: Star },
];

const services = [
  { name: "Student Visa", href: "/student-visa", icon: GraduationCap },
  { name: "Tourist Visa", href: "/tourist-visa", icon: Plane },
];

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname(); // বর্তমান URL পাথ পেতে

  // অ্যাক্টিভ চেক করার ফাংশন
  const isActive = (path: string) => pathname === path;

  return (
    <div className="flex min-h-screen bg-[#F8FAFC] antialiased">
      
      {/* ১. মোবাইল ব্যাকড্রপ */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ২. সাইডবার */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-[280px] bg-[#1e2634] transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full shadow-2xl">
          {/* লোগো সেকশন */}
          <div className="p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#3b82f6] flex items-center justify-center shadow-lg shadow-blue-500/30">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-white font-bold text-[17px] tracking-tight leading-none">TS Tour Travel</h1>
                <p className="text-[#64748b] text-[11px] font-medium mt-1">Admin Panel</p>
              </div>
            </div>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-gray-400 hover:text-white">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* নেভিগেশন লিংক */}
          <nav className="flex-1 px-4 py-4 space-y-8 overflow-y-auto">
            <div>
              <h3 className="px-4 text-[11px] font-bold text-gray-500 uppercase tracking-[0.15em] mb-4">
                প্রধান মেনু
              </h3>
              <div className="space-y-1.5">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href} // Next.js এ to এর বদলে href হয়
                    onClick={() => setSidebarOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-[11px] rounded-[14px] transition-all duration-200 group",
                      isActive(item.href)
                        ? "bg-[#3b82f6] text-white shadow-md shadow-blue-500/20"
                        : "text-[#94a3b8] hover:bg-white/5 hover:text-white"
                    )}
                  >
                    <item.icon className={cn("w-5 h-5", isActive(item.href) ? "text-white" : "text-[#64748b] group-hover:text-white")} />
                    <span className="text-[14.5px] font-medium">{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="px-4 text-[11px] font-bold text-gray-500 uppercase tracking-[0.15em] mb-4">
                সার্ভিস
              </h3>
              <div className="space-y-1.5">
                {services.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-[11px] rounded-[14px] transition-all duration-200 group",
                      isActive(item.href)
                        ? "bg-[#3b82f6] text-white"
                        : "text-[#94a3b8] hover:bg-white/5 hover:text-white"
                    )}
                  >
                    <item.icon className={cn("w-5 h-5", isActive(item.href) ? "text-white" : "text-[#64748b] group-hover:text-white")} />
                    <span className="text-[14.5px] font-medium">{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* ফুটার */}
          <div className="p-4 border-t border-white/5 space-y-1">
            <button className="flex items-center gap-3 w-full px-4 py-3 rounded-[12px] text-[#94a3b8] hover:bg-red-500/10 hover:text-red-400 transition-all">
              <LogOut className="w-5 h-5" />
              <span className="text-[14px] font-medium">লগআউট</span>
            </button>
          </div>
        </div>
      </aside>

      {/* ৩. মেইন কন্টেন্ট এরিয়া */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* টপ হেডার */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
            <h2 className="text-[16px] font-bold text-gray-800 hidden sm:block">Ts Admin Portal</h2>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
              <Bell className="w-5 h-5" />
            </button>
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold border border-blue-200">
            TS
            </div>
          </div>
        </header>

      </div>
    </div>
  );
}