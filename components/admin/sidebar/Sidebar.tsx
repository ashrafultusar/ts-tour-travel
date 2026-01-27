'use client'
import { LogoutButton } from '@/components/auth/LogoutButton';
import { 
  LayoutDashboard, 
  UserCog, 
  UsersRound, 
  GraduationCap, 
  Newspaper, 
  Trophy, 
  LogOut,
  ChevronRight,
  ChevronLeft,
  Menu,
  X
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Hook for active path
import { useState } from 'react';

const mainMenuItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/ts-staff-portal" },
  { name: "Admin Management", icon: UserCog, href: "/ts-staff-portal/admin" },
  { name: "Professional Team", icon: UsersRound, href: "/ts-staff-portal/professionalTeam" },
  { name: "Universities", icon: GraduationCap, href: "/ts-staff-portal/universities" },
  { name: "Blog", icon: Newspaper, href: "/ts-staff-portal/blog" },
  { name: "Success Stories", icon: Trophy, href: "/ts-staff-portal/successStories" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname(); // Get current URL path

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between px-4 py-3 bg-[#1e2634] text-white">
        <div className="flex items-center gap-2">
          <div className="bg-blue-500 p-1.5 rounded-md">
            <GraduationCap size={18} />
          </div>
          <span className="text-sm font-semibold text-white">TS Tour Travel</span>
        </div>
        <button className="cursor-pointer" onClick={() => setIsMobileOpen(!isMobileOpen)}>
          {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <aside
        className={`
          fixed inset-y-0 left-0 z-50
          bg-[#1e2634] text-gray-400
          transition-all duration-300
          ${isOpen ? "w-72" : "w-20"}
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static
        `}
      >
        <div className="flex flex-col h-full">
          {/* ===== LOGO ===== */}
          <div className="relative flex items-center gap-3 px-4 py-6">
            <div className="bg-blue-500 p-2 rounded-md shrink-0">
              <GraduationCap size={24} className="text-white" />
            </div>

            <div className={`${!isOpen && "lg:hidden opacity-0"} transition-opacity duration-200`}>
              <h1 className="text-md font-bold text-white leading-none">
                TS Tour Travel
              </h1>
              <p className="text-[11px] text-gray-500 mt-1 uppercase tracking-wider font-semibold">Admin Panel</p>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hidden lg:flex absolute -right-3 top-8
                bg-blue-600 text-white shadow-lg
                rounded-full p-1 hover:bg-blue-700 cursor-pointer"
            >
              {isOpen ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
            </button>
          </div>

          {/* ===== MENU ===== */}
          <div className="flex-1 overflow-y-auto px-3">
            <p className={`text-[10px] uppercase tracking-[2px] text-gray-500 mb-4 mt-4 px-3 font-bold ${!isOpen && "lg:hidden"}`}>
              Main Menu
            </p>

            <nav className="space-y-1.5">
              {mainMenuItems.map((item) => {
                // Check if current route matches link
                const isActive = pathname === item.href;

                return (
                  <Link 
                    onClick={() => setIsMobileOpen(false)}
                    key={item.name}
                    href={item.href}
                    className={`
                      flex items-center gap-3
                      px-3 py-2.5
                      text-sm font-medium
                      rounded-lg
                      transition-all duration-200
                      ${isActive 
                        ? "bg-blue-600 text-white shadow-md shadow-blue-500/20" 
                        : "hover:bg-white/5 hover:text-white"
                      }
                    `}
                  >
                    <item.icon size={20} className={`shrink-0 ${isActive ? "text-white" : "text-gray-400"}`} />
                    <span className={`${!isOpen && "lg:hidden opacity-0"} whitespace-nowrap`}>
                      {item.name}
                    </span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* ===== LOGOUT ===== */}
          <div className="px-3 py-4 border-t border-white/5">
         
              <LogoutButton className="w-full cursor-pointer text-red-600 text-sm py-2.5 px-3 rounded-xl hover:bg-red-50 transition-colors text-left font-semibold flex items-center gap-3" />
         
          </div>
        </div>
      </aside>

      {/* ===== MOBILE OVERLAY ===== */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
}