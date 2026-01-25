"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  LayoutDashboard,
  ChevronDown,
  User,
} from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";

// লিঙ্কগুলো কম্পোনেন্টের বাইরে রাখলে রেন্ডারিং পারফরম্যান্স বাড়ে
const NAVIGATION_LINKS = [
  { name: "Home", href: "/", icon: Home },
  { name: "About Us", href: "/aboutUs", icon: Info },
  { name: "Universities", href: "/universities", icon: Info },
  { name: "Why Malaysia", href: "/studyInMalaysia", icon: Briefcase },
  { name: "Tourist Visa", href: "/touristVisa", icon: Map },
  { name: "Blog", href: "/blog", icon: Mail },
  { name: "Contact Us", href: "/contactUs", icon: Mail },
];

export default function Navbar() {
  const { data: session, status } = useSession();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const pathName = usePathname();

  const isLoading = status === "loading";

  // মেমোরাইজড রোল চেক (সিকিউরিটি ও পারফরম্যান্সের জন্য)
  const isStaff = useMemo(() => {
    return (
      session?.user?.role === "admin" || session?.user?.role === "moderator"
    );
  }, [session?.user?.role]);

  // ডায়নামিক লিঙ্ক জেনারেশন
  const navLinks = useMemo(() => {
    if (isStaff) {
      return [
        { name: "Dashboard", href: "/ts-staff-portal", icon: LayoutDashboard },
        ...NAVIGATION_LINKS,
      ];
    }
    return NAVIGATION_LINKS;
  }, [isStaff]);

  // মোবাইল মেনু বা প্রোফাইল খোলা থাকলে বডি স্ক্রল বন্ধ রাখা (UX)
  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [mobileOpen]);

  return (
    <>
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-[60] border-b border-slate-100 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-20 flex items-center justify-between">
            {/* --- Left Side: Mobile Toggle & Logo --- */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open Menu"
                className="lg:hidden p-2 hover:bg-slate-100 rounded-xl transition-colors"
              >
                <Menu size={26} className="text-slate-700" />
              </button>

              <Link
                href="/"
                className="flex items-center gap-2 group active:scale-95 transition-transform"
              >
                <div className="relative h-12 w-12 sm:h-14 sm:w-14 shrink-0 overflow-hidden rounded-full border-2 border-white shadow-md bg-white p-0.5">
                  <Image
                    src="/assets/logo/logo.jpg"
                    alt="Agency Logo"
                    fill
                    sizes="(max-width: 768px) 48px, 56px"
                    priority
                    className="object-contain rounded-full"
                  />
                </div>
              </Link>
            </div>

            {/* --- Center: Desktop Navigation --- */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = pathName === link.href;
                const isDashboard = link.name === "Dashboard";

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 text-[15px] font-semibold transition-all duration-200 rounded-full ${
                      isActive
                        ? "text-blue-700 bg-blue-50"
                        : isDashboard
                          ? "text-orange-600 hover:bg-orange-50"
                          : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* --- Right Side: User Actions --- */}
            <div className="flex items-center gap-3">
              {isLoading ? (
                <div className="h-10 w-10 bg-slate-100 animate-pulse rounded-full" />
              ) : session?.user ? (
                <div className="relative">
                  <button
                    onClick={() => setProfileOpen(!profileOpen)}
                    className="flex items-center gap-1 p-1 rounded-full border border-blue-200 hover:border-blue-400 hover:bg-slate-50 transition-all outline-none"
                  >
                   <User className="text-[#14919B]"/>
                    <ChevronDown
                      size={14}
                      className={`text-slate-400 transition-transform duration-200 ${profileOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Profile Dropdown */}
                  {profileOpen && (
                    <>
                      <div
                        className="fixed inset-0 z-10"
                        onClick={() => setProfileOpen(false)}
                      ></div>
                      <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="p-4 border-b bg-linear-to-br from-slate-50 to-white">
                          <p className="text-sm font-bold text-slate-900 truncate">
                            {session?.user?.name}
                          </p>
                          <p className="text-xs text-slate-500 truncate mb-2">
                            {session?.user?.email}
                          </p>
                          {isStaff && (
                            <span className="inline-flex items-center px-2.5 py-0.5 bg-orange-100 text-orange-700 text-[10px] font-black rounded-full uppercase tracking-tighter">
                              {session?.user?.role}
                            </span>
                          )}
                        </div>
                        <div className="p-2">
                          <Link
                            href="/profile"
                            onClick={() => setProfileOpen(false)}
                            className="flex items-center gap-3 px-3 py-2.5 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-700 rounded-xl transition-colors"
                          >
                            <UserCircle size={18} /> My Profile
                          </Link>
                          <div className="border-t border-slate-50 my-1"></div>
                          <LogoutButton className="w-full text-red-600 text-sm py-2.5 px-3 rounded-xl hover:bg-red-50 transition-colors text-left font-semibold flex items-center gap-3" />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <Link
                  href="/login"
                  className="px-6 py-2.5 rounded-full bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-blue-200"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* --- Mobile Sidebar --- */}
      <div
        className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[90] transition-opacity duration-300 ${
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      <aside
        className={`fixed top-0 left-0 h-full w-[280px] bg-white z-[100] shadow-2xl transform transition-transform duration-300 ease-out ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex justify-between items-center border-b">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 relative">
              <Image
                src="/assets/logo/logo.jpg"
                alt="Logo"
                fill
                className="rounded-full object-contain"
              />
            </div>
            <span className="font-bold text-slate-800">Menu</span>
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X size={22} className="text-slate-500" />
          </button>
        </div>

        <nav className="py-4 px-3 h-[calc(100vh-100px)] overflow-y-auto">
          {navLinks.map((link) => {
            const isActive = pathName === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all mb-1 ${
                  isActive
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <link.icon
                  size={20}
                  className={isActive ? "text-blue-600" : "text-slate-400"}
                />
                <span className="font-bold text-[15px]">{link.name}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
