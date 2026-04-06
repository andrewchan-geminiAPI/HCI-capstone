import { Header } from "../components/Header";
import { Link } from "react-router";
import { MapPin, ExternalLink } from "lucide-react";
import imgRobot1 from "../../assets/ddae6b8d5d02b2088350f4841c6924acbca5d8f7.png";
import imgRobot2 from "../../assets/c1723e711714dd180e9890511514930b6856cfb4.png";
import imgTeam from "../../assets/83df25dac5dc5e2ced674c21a91028ff1d2960ae.png";

export default function ProjectDetail() {
  const teamMembers = [
    {
      name: "Dr. Bryan Carroll",
      role: "Principal Investigator",
      expertise: "Dermatologic Surgery",
      image: null,
    },
    {
      name: "Daniel Kim",
      role: "Robotics Engineer",
      expertise: "Mechanical & Electronics Engineering",
      image: null,
    },
    {
      name: "Dr. Maya Patel",
      role: "Clinical Research Coordinator",
      expertise: "Research Operations",
      image: null,
    },
    {
      name: "Andrew Chan",
      role: "UX Researcher",
      expertise: "Human-Robot Interaction & Service Design",
      image: null,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link to="/find-projects" className="text-[13px] text-gray-500 hover:text-gray-900">
              ← Back to Projects
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content - 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              {/* Header Section */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-3">
                    <div>
                      <div className="text-[11px] uppercase tracking-wide text-gray-500 mb-1">Ongoing Research Project</div>
                      <h1 className="text-3xl font-semibold text-gray-900">RoboDog</h1>
                    </div>
                    <p className="text-base text-gray-700">Carroll Labs</p>
                    <div className="flex items-center gap-2 text-[13px] text-gray-600">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span>UH Cleveland Medical Center</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button className="px-4 py-2 text-[13px] font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                      Stay Updated
                    </button>
                    <button className="px-4 py-2 text-[13px] font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                      Contact PI
                    </button>
                  </div>
                </div>
              </div>

              {/* Overview */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
                <h2 className="text-[11px] uppercase tracking-wide text-gray-500">Overview</h2>
                <div className="prose prose-sm max-w-none">
                  <p className="text-[13px] text-gray-700 leading-relaxed">
                    RoboDog is an innovative research project exploring the application of robotic assistance in dermatologic surgery. 
                    Led by Dr. Bryan Carroll at University Hospitals Cleveland Medical Center, the project aims to develop intelligent 
                    robotic systems that can assist surgeons during delicate skin procedures.
                  </p>
                  <p className="text-[13px] text-gray-700 leading-relaxed">
                    The research combines expertise from robotics engineering, human-robot interaction, and clinical practice to create 
                    tools that enhance surgical precision while maintaining the human element critical to patient care.
                  </p>
                </div>
              </div>

              {/* Research Images */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
                <h2 className="text-[11px] uppercase tracking-wide text-gray-500">Research</h2>
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src={imgRobot1}
                    alt="RoboDog prototype"
                    className="w-full h-48 object-cover border border-gray-200 rounded-md"
                  />
                  <img
                    src={imgRobot2}
                    alt="RoboDog in lab"
                    className="w-full h-48 object-cover border border-gray-200 rounded-md"
                  />
                </div>
              </div>

              {/* People */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-[11px] uppercase tracking-wide text-gray-500">Team Members</h2>
                  <Link
                    to="/project/robodog/skills-map"
                    className="px-3 py-1.5 text-[13px] font-medium text-gray-900 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors flex items-center gap-1.5"
                  >
                    View Skills Map
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {teamMembers.map((member, idx) => (
                    <div
                      key={idx}
                      className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-gray-100 border border-gray-200 rounded-md flex items-center justify-center flex-shrink-0">
                          <span className="text-[12px] text-gray-500 font-medium">
                            {member.name.split(" ").map(n => n[0]).join("")}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[13px] font-medium text-gray-900">{member.name}</p>
                          <p className="text-[12px] text-gray-600 mt-0.5">{member.role}</p>
                          <p className="text-[11px] text-gray-500 mt-1">{member.expertise}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar - 1 column */}
            <div className="space-y-6">
              {/* Quick Info */}
              <div className="bg-white border border-gray-200 p-5 space-y-4">
                <h2 className="text-[11px] uppercase tracking-wide text-gray-500">Project Details</h2>
                <div className="space-y-3">
                  <div>
                    <div className="text-[11px] text-gray-500 mb-0.5">Status</div>
                    <div className="text-[13px] text-gray-900">Ongoing</div>
                  </div>
                  <div>
                    <div className="text-[11px] text-gray-500 mb-0.5">Institution</div>
                    <div className="text-[13px] text-gray-900">UH Cleveland Medical Center</div>
                  </div>
                  <div>
                    <div className="text-[11px] text-gray-500 mb-0.5">Lab</div>
                    <div className="text-[13px] text-gray-900">Carroll Labs</div>
                  </div>
                  <div>
                    <div className="text-[11px] text-gray-500 mb-0.5">Team Size</div>
                    <div className="text-[13px] text-gray-900">4 members</div>
                  </div>
                </div>
              </div>

              {/* Research Areas */}
              <div className="bg-white border border-gray-200 p-5 space-y-4">
                <h2 className="text-[11px] uppercase tracking-wide text-gray-500">Research Areas</h2>
                <div className="flex flex-wrap gap-1.5">
                  {["Robotics", "Human-Robot Interaction", "Surgery Assistance", "Medical Devices", "UX Research"].map((area, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-[11px] font-medium bg-gray-50 text-gray-700 border border-gray-200"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Related Projects */}
              <div className="bg-white border border-gray-200 p-5 space-y-4">
                <h2 className="text-[11px] uppercase tracking-wide text-gray-500">Related Projects</h2>
                <div className="space-y-3">
                  <a href="#" className="block p-3 border border-gray-200 hover:border-gray-300 transition-colors">
                    <p className="text-[13px] font-medium text-gray-900">MedAssist AI</p>
                    <p className="text-[11px] text-gray-500 mt-1">Surgical assistance platform</p>
                  </a>
                  <a href="#" className="block p-3 border border-gray-200 hover:border-gray-300 transition-colors">
                    <p className="text-[13px] font-medium text-gray-900">SmartSuture</p>
                    <p className="text-[11px] text-gray-500 mt-1">Automated suturing research</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}