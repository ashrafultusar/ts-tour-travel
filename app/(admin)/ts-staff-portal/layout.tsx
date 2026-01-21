import Sidebar from "@/components/admin/sidebar/Sidebar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex min-h-screen bg-[#F8FAFC]">

  <aside className="w-[280px] h-screen sticky top-0 overflow-y-auto shadow-sm">
    <Sidebar />
  </aside>


  <main className="flex-1 p-8 antialiased overflow-x-hidden">
    {children}
  </main>
</div>
}
