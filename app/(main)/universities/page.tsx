
const UniversityCard = ({ name, location, logo }: { name: string, location: string, logo: string }) => (
  <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-white border border-gray-100 rounded-lg shadow-sm mb-4 hover:shadow-md transition-shadow">
    <div className="flex items-center gap-6 w-full">
      <div className="w-20 h-20 flex items-center justify-center">
        <img src={logo} alt={name} className="max-w-full max-h-full object-contain" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-gray-500 flex items-center gap-1 mt-1">
          <span className="text-sm">📍 {location}</span>
        </p>
        <p className="text-xs text-gray-600 mt-2 flex items-center gap-1">
          💼 Offer Letter Applicable: <span className="font-semibold text-green-600">Yes</span>
        </p>
      </div>
    </div>
    <div className="flex flex-col gap-2 mt-4 md:mt-0 w-full md:w-32">
     
      <button className="bg-[#1890ff] text-white py-2 px-4 rounded font-semibold hover:bg-blue-600 transition-colors">
        Details
      </button>
    </div>
  </div>
);

export default function UniversitySearch() {
  const levels = ["Diploma", "Bachelor Degree", "Masters Degree", "Doctoral Degree (PhD)", "Advance Diploma", "Certificate", "Foundation / A-level"];
  
  const universities = [
    { name: "Multimedia University Malaysia (MMU)", location: "Selangor, Malaysia", logo: "/api/placeholder/80/80" },
    { name: "UCSI University Malaysia", location: "Kuala Lumpur, Malaysia", logo: "/api/placeholder/80/80" },
    { name: "Taylor's University Malaysia", location: "Selangor, Malaysia", logo: "/api/placeholder/80/80" },
    { name: "APU University Malaysia", location: "Kuala Lumpur, Malaysia", logo: "/api/placeholder/80/80" },
    { name: "APU University Malaysia", location: "Kuala Lumpur, Malaysia", logo: "/api/placeholder/80/80" },
    { name: "APU University Malaysia", location: "Kuala Lumpur, Malaysia", logo: "/api/placeholder/80/80" },
    { name: "APU University Malaysia", location: "Kuala Lumpur, Malaysia", logo: "/api/placeholder/80/80" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-10 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Filter */}
        <aside className="w-full md:w-1/4 bg-white p-6 rounded-lg border border-gray-200 h-fit">
          <h2 className="text-xl font-bold mb-6 text-gray-800">Filter Your Best Search</h2>
          
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Search by name</label>
            <input 
              type="text" 
              placeholder="Type University Name" 
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-3">Level of Interest</label>
            <div className="space-y-2">
              {levels.map((level) => (
                <label key={level} className="flex items-center gap-2 cursor-pointer text-sm text-gray-600 hover:text-black">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600" />
                  {level}
                </label>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Search by location</label>
            <select className="w-full p-2 border border-gray-300 rounded bg-white outline-none">
              <option>All Locations</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-3">Offer Letter Type</label>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                Free Offer Letter
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                Offer Letter Fees Apply
              </label>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="w-full md:w-3/4">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-gray-100 pb-2">University List</h2>
          <div className="space-y-4">
            {universities.map((uni, index) => (
              <UniversityCard key={index} {...uni} />
            ))}
          </div>
        </main>

      </div>
    </div>
  );
}