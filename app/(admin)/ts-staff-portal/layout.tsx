import Sidebar from '@/components/admin/sidebar/Sidebar';

const DashboardLayout = ({children}:{ children: React.ReactNode }) => {
    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
          <Sidebar />
          <main className="flex-1 p-8">
            {children}
          </main>
        </div>
    );
};

export default DashboardLayout;