import Link from "next/link";
import { auth } from "@/auth";
import { LogoutButton } from "@/components/auth/LogoutButton";
import { Menu, X, ChevronRight, Home, Info, Briefcase, Map, Mail, UserCircle, User, Settings } from "lucide-react";

export default async function Navbar() {
    const session = await auth();

    const navLinks = [
        { name: "Home", href: "/", icon: Home },
        { name: "About Us", href: "/aboutUs", icon: Info },
        { name: "Services", href: "/services", icon: Briefcase },
        { name: "Tours", href: "/tours", icon: Map },
        { name: "Contact", href: "/contact", icon: Mail },
    ];

    return (
        <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 shadow-sm">
            {/* Logic Inputs */}
            <input type="checkbox" id="mobile-menu-toggle" className="hidden peer/menu" />
            <input type="checkbox" id="profile-dropdown-toggle" className="hidden peer/profile" />
            
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 justify-between items-center relative">
                    
                    {/* 1. Left Side: Logo */}
                    <div className="flex flex-shrink-0 items-center">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1665a1] to-[#0891B2] flex items-center justify-center shadow-md">
                                <span className="text-white font-extrabold text-lg tracking-tighter">TS</span>
                            </div>
                            <span className="font-bold text-xl text-[#0F172A] tracking-tight">
                                Tour & <span className="text-[#1665a1]">Travel</span>
                            </span>
                        </Link>
                    </div>

                    {/* 2. Middle: Desktop Links (lg devices e center e thakbe) */}
                    <div className="hidden lg:flex lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:space-x-8">
                        {navLinks.map((link) => (
                            <Link key={link.name} href={link.href} className="text-[15px] font-medium text-slate-600 hover:text-[#1665a1] transition-colors">
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* 3. Right Side: Profile/Actions + Mobile Menu Toggle */}
                    <div className="flex items-center gap-4">
                        {/* Desktop Profile Section */}
                        <div className="hidden sm:flex items-center">
                            {session?.user ? (
                                <div className="relative">
                                    <label htmlFor="profile-dropdown-toggle" className="flex items-center gap-1 cursor-pointer p-1 rounded-full hover:bg-slate-50 transition-colors">
                                        <UserCircle className="w-9 h-9 text-[#1665a1]" />
                                    </label>

                                    {/* Dropdown Menu */}
                                    <div className="absolute right-0 mt-2 w-56 bg-white border border-slate-100 rounded-2xl shadow-xl invisible opacity-0 peer-checked/profile:visible peer-checked/profile:opacity-100 transition-all duration-200 z-50 overflow-hidden">
                                        <div className="p-4 border-b border-slate-50 bg-slate-50/50">
                                            <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Signed in as</p>
                                            <p className="text-sm font-bold text-[#0F172A] truncate">{session.user.name}</p>
                                        </div>
                                        <div className="py-2">
                                            <Link href="/profile" className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
                                                <User className="w-4 h-4 text-slate-400" /> Profile
                                            </Link>
                                            <Link href="/settings" className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
                                                <Settings className="w-4 h-4 text-slate-400" /> Settings
                                            </Link>
                                        </div>
                                        <div className="border-t border-slate-50 p-2">
                                            <LogoutButton className="w-full flex items-center gap-3 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors" />
                                        </div>
                                    </div>
                                    <label htmlFor="profile-dropdown-toggle" className="fixed inset-0 hidden peer-checked/profile:block z-[-1]" />
                                </div>
                            ) : (
                                <div className="flex items-center gap-4">
                                    <Link href="/login" className="text-sm font-bold text-[#1e293b] hover:text-[#1665a1]">Log in</Link>
                                    <Link href="/register" className="rounded-xl bg-gradient-to-r from-[#1665a1] to-[#0891B2] px-6 py-2.5 text-sm font-bold text-white shadow-md hover:opacity-90">Login</Link>
                                </div>
                            )}
                            <div
                
                  className="bg-gradient-to-r from-[#0369A1] to-[#0891B2] hover:opacity-90 text-white font-bold  rounded-xl transition-all  gap-2 px-4 sm:px-6 py-2.5 text-xs sm:text-sm "
                >
                  Consultation
                </div>
                        </div>

                        {/* Mobile Menu Toggle Button */}
                        <label htmlFor="mobile-menu-toggle" className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer lg:hidden">
                            <Menu className="h-7 w-7" />
                        </label>
                    </div>
                </div>
            </div>

            {/* Mobile Side Nav Drawer (Left Aligned Fix) */}
            <div className="fixed inset-0 z-[100] invisible opacity-0 peer-checked/menu:visible peer-checked/menu:opacity-100 transition-all duration-300">
                <label htmlFor="mobile-menu-toggle" className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm cursor-pointer" />
                <div className="absolute top-0 left-0 h-full w-[280px] bg-white shadow-2xl -translate-x-full peer-checked/menu:translate-x-0 transition-transform duration-300 ease-in-out border-r border-slate-100">
                    <div className="flex flex-col h-full">
                        <div className="p-5 border-b border-slate-100 flex justify-between items-center">
                            <span className="font-bold text-[#1665a1]">Menu Navigation</span>
                            <label htmlFor="mobile-menu-toggle" className="p-2 text-slate-400 hover:text-slate-600 rounded-full bg-slate-50 cursor-pointer">
                                <X className="h-5 w-5" />
                            </label>
                        </div>
                        <div className="flex-1 overflow-y-auto py-4">
                            {session?.user && (
                                <div className="px-6 py-4 mb-2 bg-slate-50/80 border-y border-slate-100/50">
                                    <div className="flex items-center gap-3 mb-3">
                                        <UserCircle className="w-10 h-10 text-[#1665a1]" />
                                        <div className="flex flex-col">
                                            <span className="font-bold text-[#0F172A] text-sm">{session.user.name}</span>
                                            <span className="text-xs text-slate-500">Member</span>
                                        </div>
                                    </div>
                                    <Link href="/profile" className="flex items-center gap-2 text-xs font-bold text-[#1665a1]">Go to Profile <ChevronRight className="w-3 h-3" /></Link>
                                </div>
                            )}
                            {navLinks.map((link) => (
                                <Link key={link.name} href={link.href} className="flex items-center justify-between px-6 py-4 text-slate-700 hover:bg-slate-50 hover:text-[#1665a1] group">
                                    <div className="flex items-center gap-3">
                                        <link.icon className="w-5 h-5 text-slate-400 group-hover:text-[#1665a1]" />
                                        <span className="font-medium">{link.name}</span>
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-slate-300" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                #mobile-menu-toggle:checked ~ div { visibility: visible; opacity: 1; }
                #mobile-menu-toggle:checked ~ div > div:last-child { transform: translateX(0); }
                #profile-dropdown-toggle:checked ~ div .peer-checked\\/profile\\:visible { visibility: visible; opacity: 1; }
            `}} />
        </nav>
    );
}