import Sidebar from "@/components/admin/sidebar/Sidebar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className={`antialiased`}>
    <Sidebar />
    {children}</main>;
}
