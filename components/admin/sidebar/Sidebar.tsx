"use client";

import  { useState } from "react";
import {
  LayoutDashboard,
  Users,
  FileText,
  MessageSquare,
  Star,
  GraduationCap,
  Plane,
  LogOut,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

/* ===== MENU DATA ===== */
const mainMenuItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/ts-staff-portal" },
  { name: "students", icon: Users, href: "/students" },
  { name: "applications", icon: FileText, href: "/ts-staff-portal/applications" },
  { name: "inquiry", icon: MessageSquare, href: "/ts-staff-portal/inquiry" },
  { name: "reviews", icon: Star, href: "/ts-staff-portal/reviews" },
  { name: "blog", icon: Star, href: "/ts-staff-portal/blog" },
  { name: "Success Stories", icon: Star, href: "/ts-staff-portal/successStories" },
];



export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      {/* ================= MOBILE HEADER ================= */}
      <div className="lg:hidden flex items-center justify-between px-4 py-3 bg-[#1e2634] text-white">
        <div className="flex items-center gap-2">
          <div className="bg-blue-500 p-1.5 rounded-md">
            <GraduationCap size={18} />
          </div>
          <span className="text-sm font-semibold">TS Tour Travel</span>
        </div>
        <button className="cursor-pointer" onClick={() => setIsMobileOpen(!isMobileOpen)}>
          {isMobileOpen ? <X  size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ================= SIDEBAR ================= */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50
          bg-[#1e2634] text-gray-400
          transition-all duration-300
          ${isOpen ? "w-96" : "w-20"}
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static
        `}
      >
        <div className="flex flex-col h-full">
          {/* ===== LOGO ===== */}
          <div className="relative flex items-center gap-3 px-4 py-4">
            <div className="bg-blue-500 p-2 rounded-md shrink-0">
              <GraduationCap size={30} className="text-white" />
            </div>

            <div className={`${!isOpen && "lg:hidden opacity-0"}`}>
              <h1 className="text-md font-semibold text-white leading-none">
                TS Tour Travel
              </h1>
              <p className="text-[13px] text-gray-500">Admin Panel</p>
            </div>

            {/* Collapse Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hidden lg:flex absolute -right-3 top-6
                bg-[#1e2634] border border-gray-700
                rounded-full p-1 hover:text-white cursor-pointer"
            >
              {isOpen ? (
                <ChevronLeft size={14} />
              ) : (
                <ChevronRight size={14} />
              )}
            </button>
          </div>

          {/* ===== MENU ===== */}
          <div className="flex-1 overflow-y-auto px-3">
            {/* Main Menu */}
            <p
              className={`text-[9px] uppercase tracking-wide text-gray-500 mb-2 mt-4 ${
                !isOpen && "lg:hidden"
              }`}
            >
              প্রধান মেনু
            </p>

            <nav className="space-y-1">
              {mainMenuItems.map((item) => (
                <Link onClick={()=>setIsMobileOpen(false)}
                  key={item.name}
                  href={item.href}
                  className="
                    flex items-center gap-3
                    px-3 py-2
                    text-md uppercase
                    rounded-md
                    hover:bg-white/5 hover:text-white
                    transition
                  "
                >
                  <item.icon size={18} className="shrink-0" />
                  <span className={`${!isOpen && "lg:hidden opacity-0"}`}>
                    {item.name}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* ===== LOGOUT ===== */}
          <div className="px-3 py-3 border-t border-white/5">
            <button
              className="
                w-full flex items-center gap-3
                px-3 py-2
                text-sm
                rounded-md
                hover:bg-red-500/10 hover:text-red-400
                transition
              "
            >
              <LogOut size={18} />
              <span className={`${!isOpen && "lg:hidden"}`}>লগআউট</span>
            </button>
          </div>
        </div>
      </aside>

      {/* ===== MOBILE OVERLAY ===== */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
}
