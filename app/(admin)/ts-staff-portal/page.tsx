import { DollarSign, MapPin, Plane, Users, Menu, Bell } from 'lucide-react';
import React from 'react';

const page = () => {
  const stats = [
    { id: 1, name: 'Total Bookings', value: '1,250', icon: <Plane className="w-5 h-5 sm:w-6 sm:h-6" />, color: 'bg-blue-500' },
    { id: 2, name: 'Active Travelers', value: '450', icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />, color: 'bg-green-500' },
    { id: 3, name: 'Total Revenue', value: '$12,400', icon: <DollarSign className="w-5 h-5 sm:w-6 sm:h-6" />, color: 'bg-yellow-500' },
    { id: 4, name: 'Destinations', value: '48', icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />, color: 'bg-purple-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-slate-900 font-sans">
      {/* Top Navbar for Mobile/Desktop */}
      <nav className="bg-white border-b border-gray-200 px-4 py-3 flex justify-between items-center sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <Menu className="w-6 h-6 lg:hidden cursor-pointer" /> {/* Mobile Menu Icon */}
          <span className="text-xl font-bold tracking-tight text-blue-600">TS Travel</span>
        </div>
        <div className="flex items-center gap-4">
          <Bell className="w-5 h-5 text-gray-500 cursor-pointer" />
          <div className="w-8 h-8 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center font-bold text-blue-600 text-sm">
            AD
          </div>
        </div>
      </nav>

      <main className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
        {/* Header section */}
        <header className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Admin Dashboard</h1>
          <p className="text-sm sm:text-base text-gray-500 mt-1">Monitor your agency's performance in real-time.</p>
        </header>

        {/* Stats Cards - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {stats.map((item) => (
            <div key={item.id} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200 flex items-center transition-transform hover:scale-[1.02]">
              <div className={`${item.color} p-3 rounded-xl text-white mr-4 shadow-lg shadow-gray-200`}>
                {item.icon}
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-500 font-semibold uppercase tracking-wider">{item.name}</p>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">{item.value}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Bookings Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
          <div className="p-5 sm:p-6 border-b border-gray-100 flex justify-between items-center">
            <h2 className="text-lg sm:text-xl font-bold text-gray-800">Recent Bookings</h2>
            <button className="text-sm font-semibold text-blue-600 hover:text-blue-700">View All</button>
          </div>
          
          {/* Table Wrapper for Horizontal Scroll on Mobile */}
          <div className="overflow-x-auto">
            <table className="w-full text-left whitespace-nowrap">
              <thead className="bg-gray-50/50 text-gray-500 uppercase text-[11px] sm:text-xs tracking-widest font-bold">
                <tr>
                  <th className="px-6 py-4">Customer</th>
                  <th className="px-6 py-4">Destination</th>
                  <th className="px-6 py-4 text-center">Status</th>
                  <th className="px-6 py-4 text-right">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[1, 2, 3, 4, 5].map((i) => (
                  <tr key={i} className="hover:bg-gray-50/80 transition-colors group">
                    <td className="px-6 py-4 font-semibold text-gray-700 text-sm sm:text-base">
                       Mahfuzur Rahman {i}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> Sajek Valley
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-[10px] sm:text-xs font-bold">
                        SUCCESS
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right text-xs sm:text-sm text-gray-400">
                      Oct 24, 2023
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;