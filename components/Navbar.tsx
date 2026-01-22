"use client";

import { useState } from "react";
import Link from "next/link";
import { LogoutButton } from "@/components/auth/LogoutButton";
import {
  Menu,
  X,
  ChevronRight,
  Home,
  Info,
  Briefcase,
  Map,
  Mail,
  UserCircle,
  User,
  Settings,
  LogOut,
} from "lucide-react";

export default function Navbar({ session }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "About Us", href: "/aboutUs", icon: Info },
    { name: "Study in Malaysia", href: "/studyInMalaysia", icon: Briefcase },
    { name: "Tourist Visa", href: "/touristVisa", icon: Map },
    { name: "Blog", href: "/blog", icon: Mail },
    { name: "Contact Us", href: "/contactUs", icon: Mail },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur sticky top-0 z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1665a1] to-[#0891B2] flex items-center justify-center">
              <span className="text-white font-extrabold">TS</span>
            </div>
            <span className="font-bold text-xl">
              Tour & <span className="text-[#1665a1]">Travel</span>
            </span>
          </Link>

          {/* Desktop Nav (Middle) */}
          <div className="hidden lg:flex gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.name}
                href={l.href}
                className="text-sm font-medium text-slate-600 hover:text-[#1665a1] transition-colors"
              >
                {l.name}
              </Link>
            ))}
          </div>

          {/* Right Side (Profile/Login) */}
          <div className="flex items-center gap-4">
            {session?.user ? (
              <div className="relative hidden lg:block">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="p-1 rounded-full hover:bg-slate-100 transition-all"
                >
                  <UserCircle className="w-9 h-9 text-[#1665a1]" />
                </button>

                {profileOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border overflow-hidden animate-in fade-in zoom-in duration-200">
                    <div className="p-4 border-b bg-slate-50/50">
                      <p className="text-xs text-slate-500">Signed in as</p>
                      <p className="text-sm font-bold truncate">{session.user.name}</p>
                    </div>
                    <Link href="/profile" className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-slate-50">
                      <User size={16} /> Profile
                    </Link>
                    <Link href="/settings" className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-slate-50">
                      <Settings size={16} /> Settings
                    </Link>
                    <div className="p-2 border-t">
                      <LogoutButton className="w-full text-red-600 text-sm justify-start" />
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/login"
                className="hidden sm:block px-6 py-2 rounded-xl bg-gradient-to-r from-[#1665a1] to-[#0891B2] text-white font-bold text-sm hover:shadow-lg transition-all active:scale-95"
              >
                Login
              </Link>
            )}

            {/* Mobile Menu Button (Visible on Mobile/Tab) */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <Menu size={26} className="text-slate-700" />
            </button>
          </div>
        </div>
      </div>

      {/* ===== MOBILE SIDEBAR ===== */}
      
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-[90] transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[300px] bg-white z-[100] shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="p-6 flex justify-between items-center border-b">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#1665a1] flex items-center justify-center">
              <span className="text-white text-xs font-bold">TS</span>
            </div>
            <span className="font-bold text-slate-800">Menu</span>
          </div>
          <button 
            onClick={() => setMobileOpen(false)}
            className="p-2 rounded-full hover:bg-slate-100 transition-transform active:rotate-90"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto py-4">
          {navLinks.map((l) => (
            <Link
              key={l.name}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between px-6 py-4 hover:bg-blue-50 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <l.icon className="w-5 h-5 text-slate-400 group-hover:text-[#1665a1]" />
                <span className="font-medium text-slate-700 group-hover:text-[#1665a1]">{l.name}</span>
              </div>
              <ChevronRight size={16} className="text-slate-300 group-hover:translate-x-1 transition-transform" />
            </Link>
          ))}
        </div>

        {/* Mobile Sidebar Footer (Logout/Profile section) */}
        <div className="p-6 border-t bg-slate-50/50">
          {session?.user ? (
            <div className="space-y-4">
              <div className="flex items-center gap-3 px-2">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <UserCircle className="w-8 h-8 text-[#1665a1]" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-sm font-bold text-slate-800 truncate">{session.user.name}</p>
                  <p className="text-xs text-slate-500 truncate">{session.user.email}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-2">
                 <Link 
                   href="/profile" 
                   onClick={() => setMobileOpen(false)}
                   className="flex items-center gap-3 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-white rounded-lg border border-transparent hover:border-slate-200"
                 >
                   <User size={18} /> My Profile
                 </Link>
                 <div className="pt-2">
                   <LogoutButton className="w-full flex items-center justify-center gap-2 bg-red-50 text-red-600 py-3 rounded-xl font-bold hover:bg-red-100 transition-colors" />
                 </div>
              </div>
            </div>
          ) : (
            <LogoutButton className="w-full flex items-center gap-3 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors" />
          )}
        </div>
      </div>
    </nav>
  );
}