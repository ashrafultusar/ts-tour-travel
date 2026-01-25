"use client";

import { useState } from "react";
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
  User,
  LayoutDashboard,
} from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Navbar() {
  const { data: session } = useSession();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const pathName = usePathname();

  // ১. স্টাফ চেক (Admin বা Moderator কি না)
  const isStaff = session?.role === "admin" || session?.role === "moderator";

  // ২. নেভিগেশন লিঙ্কগুলো আলাদা করা
  const publicLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "About Us", href: "/aboutUs", icon: Info },
    { name: "Universities", href: "/universities", icon: Info },
    { name: "Why Malaysia", href: "/studyInMalaysia", icon: Briefcase },
    { name: "Tourist Visa", href: "/touristVisa", icon: Map },
    { name: "Blog", href: "/blog", icon: Mail },
    { name: "Contact Us", href: "/contactUs", icon: Mail },
  ];

  // যদি স্টাফ হয় তবে ড্যাশবোর্ড লিঙ্কটি শুরুতে যোগ হবে
  const navLinks = isStaff
    ? [{ name: "Dashboard", href: "/ts-staff-portal", icon: LayoutDashboard }, ...publicLinks]
    : publicLinks;

  return (
    <>
      <nav className="bg-white/90 backdrop-blur sticky top-0 z-50 border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-20 flex items-center justify-between">
            
            {/* --- বাম পাশ: মোবাইল মেনু এবং লোগো --- */}
            <div className="flex items-center gap-4">
              {/* মোবাইল মেনু বাটন */}
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-1 -ml-1 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <Menu size={28} className="text-slate-700" />
              </button>

              
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative h-12 w-12 sm:h-14 sm:w-14 shrink-0 overflow-hidden rounded-full border-2 border-slate-100 shadow-sm bg-white p-1  transition-all">
                  <Image
                    src="/assets/logo/logo.jpg"
                    alt="TS Logo"
                    fill
                    priority
                    className="object-contain rounded-full"
                  />
                </div>
              
              </Link>
            </div>

          
            <div className="hidden lg:flex gap-1 xl:gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-semibold transition-all rounded-lg ${
                    pathName === link.href
                      ? "text-[#1665a1] bg-blue-50/50"
                      : "text-slate-600 hover:text-[#1665a1] hover:bg-slate-50"
                  } ${link.name === "Dashboard" ? "text-orange-600" : ""}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* --- ডান পাশ: প্রোফাইল বা লগইন বাটন --- */}
            <div className="flex items-center gap-3">
              {session?.user ? (
                <div className="relative">
                  <button
                    onClick={() => setProfileOpen(!profileOpen)}
                    className="flex items-center p-0.5 rounded-full border-2 border-transparent hover:border-[#1665a1] transition-all outline-none"
                  >
                    {session.user?.image ? (
                      <Image
                        src={session.user.image}
                        alt="User"
                        width={38}
                        height={38}
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover"
                      />
                    ) : (
                      <div className="bg-blue-100 p-2 rounded-full text-[#1665a1]">
                        <User size={22} />
                      </div>
                    )}
                  </button>

                  {profileOpen && (
                    <>
                      <div className="fixed inset-0 z-10" onClick={() => setProfileOpen(false)}></div>
                      <div className="absolute right-0 mt-3 w-60 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-50 animate-in fade-in zoom-in duration-200">
                        <div className="p-4 border-b bg-slate-50/50">
                          <p className="text-sm font-bold text-slate-800 truncate">{session.user?.name}</p>
                          <p className="text-xs text-slate-500 truncate">{session.user?.email}</p>
                          {isStaff && (
                             <span className="inline-block mt-2 px-2 py-0.5 bg-orange-100 text-orange-700 text-[10px] font-bold rounded-full uppercase">
                                {session.role}
                             </span>
                          )}
                        </div>
                        <div className="p-2">
                            <Link
                            href="/profile"
                            onClick={() => setProfileOpen(false)}
                            className="flex items-center gap-3 px-3 py-2.5 text-sm text-slate-600 hover:bg-slate-50 rounded-xl transition-colors"
                            >
                            <UserCircle size={18} /> My Profile
                            </Link>
                            <LogoutButton className="w-full mt-1 text-red-600 text-sm py-2.5 px-3 rounded-xl hover:bg-red-50 transition-colors text-left font-semibold flex items-center gap-3" />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <Link
                  href="/login"
                  className="px-5 py-2.5 rounded-xl bg-[#1665a1] text-white font-bold text-sm hover:bg-[#0e4b7a] transition-all active:scale-95 shadow-md shadow-blue-100"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* ===== মোবাইল সাইডবার (আগের মতোই উন্নত করা হয়েছে) ===== */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[90] transition-opacity duration-300 ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
      />
      <div
        className={`fixed top-0 left-0 h-full w-[300px] bg-white z-[100] shadow-2xl transform transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex justify-between items-center border-b">
          <div className="flex items-center gap-2">
             <div className="w-8 h-8 relative">
                <Image src="/assets/logo/logo.jpg" alt="Logo" fill className="rounded-full object-contain" />
             </div>
             <span className="font-bold text-slate-800">TS Navigation</span>
          </div>
          <button onClick={() => setMobileOpen(false)} className="p-2 hover:bg-slate-100 rounded-full">
            <X size={22} className="text-slate-600" />
          </button>
        </div>

        <div className="py-4 px-3 space-y-1 overflow-y-auto h-[calc(100vh-80px)]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all ${
                pathName === link.href 
                  ? "bg-blue-50 text-[#1665a1]" 
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              <link.icon
                size={22}
                className={pathName === link.href ? "text-[#1665a1]" : "text-slate-400"}
              />
              <span className={`font-bold ${pathName === link.href ? "" : ""}`}>
                {link.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}