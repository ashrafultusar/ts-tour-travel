import { Plus, Trophy, Edit, Briefcase, Flag } from "lucide-react";
import { getTeamMembers } from "@/lib/data/team";
import Link from "next/link";
import Image from "next/image";
import DeleteTeamMemberButton from "@/components/admin/professionalTeam/DeleteTeamMemberButton";

export const dynamic = "force-dynamic";

const ProfessionalTeam = async () => {
  const { members } = await getTeamMembers();

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Trophy className="text-yellow-500" size={24} />
            Professional Team
          </h1>
          <p className="text-gray-500 text-sm">
            Manage your team members and their professional backgrounds
          </p>
        </div>

        <Link
          href="/ts-staff-portal/professionalTeam/create"
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl cursor-pointer font-medium transition-all bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-100"
        >
          <Plus size={18} /> Add Team Member
        </Link>
      </div>

      <hr className="mb-8 border-gray-200" />

      {/* Main Content Area */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member: any) => (
          <div
            key={member._id}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden"
          >
            {/* Card Image Header */}
            <div className="relative h-32 bg-gradient-to-r from-blue-600 to-indigo-700">
              <div className="absolute -bottom-10 left-6">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={80}
                    height={80}
                    className="h-20 w-20 rounded-2xl border-4 border-white object-cover shadow-md"
                  />
                ) : (
                  <div className="h-20 w-20 bg-blue-50 rounded-2xl border-4 border-white flex items-center justify-center text-blue-600 font-bold text-2xl shadow-md">
                    {member.name.charAt(0)}
                  </div>
                )}
              </div>
              {/* Actions inside Image Area */}
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Link
                  href={`/ts-staff-portal/professionalTeam/edit/${member._id}`}
                  className="p-2 bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-blue-600 rounded-lg transition"
                >
                  <Edit size={16} />
                </Link>
                <DeleteTeamMemberButton id={member._id} />
              </div>
            </div>

            {/* Member Details */}
            <div className="pt-12 p-6 space-y-3">
              <div>
                <h3 className="font-bold text-gray-900 text-xl leading-tight">
                  {member.name}
                </h3>
                <div className="flex items-center gap-1.5 text-blue-600 text-sm font-medium mt-1">
                  <Briefcase size={14} />
                  <span>{member.designation}</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-blue-600 text-sm font-medium mt-1">
                <Flag size={14} />
                <span>{member.country}</span>
              </div>
            </div>
          </div>
        ))}

        {/* Empty State */}
        {members.length === 0 && (
          <div className="col-span-full py-20 text-center bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
            <p className="text-gray-400 font-medium">No team members found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfessionalTeam;

