"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { LogoutButton } from "@/components/auth/LogoutButton";
import {
  Menu,
  X,
  Home,
  Info,
  Briefcase,
  Map,
  Mail,
  UserCircle,
  User,
} from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const pathName = usePathname();


  const session = {
    user: {
      name: "Ashraful Tusar",
      email: "tusar@example.com",
      image: "https://i.pravatar.cc/150?u=tusar",
    },
  };

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Universities", href: "/universities", icon: Info },
    { name: "About Us", href: "/aboutUs", icon: Info },
    { name: "Study in Malaysia", href: "/studyInMalaysia", icon: Briefcase },
    { name: "Tourist Visa", href: "/touristVisa", icon: Map },
    { name: "Blog", href: "/blog", icon: Mail },
    { name: "Contact Us", href: "/contactUs", icon: Mail },
  ];

  return (
    <>
      <nav className="bg-white/90 backdrop-blur sticky top-0 z-50 border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-20 flex items-center justify-between">
            {/* 1. Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2"
            >
              <Menu size={26} className="text-slate-700 cursor-pointer" />
            </button>

            {/* 2. Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1665a1] to-[#0891B2] flex items-center justify-center shrink-0 shadow-sm">
                <span className="text-white font-extrabold text-lg">TS</span>
              </div>
              <span className="font-bold text-xl text-slate-900 tracking-tight block">
                Tour & <span className="text-[#1665a1]">Travel</span>
              </span>
            </Link>

            {/* 3. Desktop Links */}
            <div className="hidden lg:flex gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors ${
                    pathName === link.href
                      ? "text-[#1665a1]"
                      : "text-slate-600 hover:text-[#1665a1]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* 4. Auth Section */}
            <div className="flex items-center gap-4">
              {session?.user ? (
                <div className="relative">
                  <button
                    onClick={() => setProfileOpen(!profileOpen)}
                    className="flex items-center p-1 rounded-full border border-transparent hover:border-slate-200 transition-all outline-none"
                  >
                    {session.user?.image ? (
                      <img
                        src={session.user.image}
                        alt="User"
                        className="w-9 h-9 rounded-full object-cover"
                      />
                    ) : (
                      <UserCircle className="w-9 h-9 text-[#1665a1]" />
                    )}
                  </button>

                  {profileOpen && (
                    <>
                      {/* Overlay to close dropdown when clicking outside */}
                      <div
                        className="fixed inset-0 z-10"
                        onClick={() => setProfileOpen(false)}
                      ></div>

                      <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden z-50">
                        <div className="p-4 border-b bg-slate-50/50">
                          <p className="text-sm font-bold truncate text-slate-800">
                            {session.user?.name}
                          </p>
                          <p className="text-xs text-slate-500 truncate">
                            {session.user?.email}
                          </p>
                        </div>
                        <Link
                          href="/profile"
                          onClick={() => setProfileOpen(false)}
                          className="flex items-center gap-3 px-4 py-3 text-sm text-slate-600 hover:bg-slate-50 transition-colors"
                        >
                          <User size={16} /> Profile
                        </Link>
                        <div className="p-2 border-t">
                          <LogoutButton className="w-full text-red-600 text-sm py-2 px-3 rounded-lg hover:bg-red-50 transition-colors text-left font-medium" />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <Link
                  href="/login"
                  className="px-6 py-2.5 rounded-xl bg-[#1665a1] text-white font-bold text-sm hover:bg-[#0e4b7a] transition-all active:scale-95 shadow-md shadow-blue-100"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* ===== MOBILE SIDEBAR ===== */}
      <div
        className={`fixed inset-0 bg-black/60 z-[90] transition-opacity duration-300 ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
      />
      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-white z-[100] transform transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex justify-between items-center border-b">
          <span className="font-bold text-slate-800">Menu</span>
          <button onClick={() => setMobileOpen(false)}>
            <X size={22} className="text-slate-600 cursor-pointer" />
          </button>
        </div>

        <div className="py-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-4 px-6 py-4 hover:bg-slate-50 transition-colors ${
                pathName === link.href ? "bg-blue-50" : ""
              }`}
            >
              <link.icon
                size={20}
                className={
                  pathName === link.href ? "text-[#1665a1]" : "text-slate-400"
                }
              />
              <span
                className={`font-semibold ${
                  pathName === link.href ? "text-[#1665a1]" : "text-slate-600"
                }`}
              >
                {link.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
