import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { Header } from "../components/Header";
import { ArrowLeft, MapPin } from "lucide-react";

export default function SkillsMap() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [zoom, setZoom] = useState(0);
  const [showYou, setShowYou] = useState(false);

  const teamMembers = [
    {
      id: "andrew",
      name: "Andrew Chan",
      role: "HCI Researcher",
      skills: ["Service Design"],
      position: showYou ? { x: 150, y: 550 } : { x: 190, y: 380 },
      color: "cyan",
    },
    {
      id: "daniel",
      name: "Daniel Kim",
      role: "Robotics Engineer",
      skills: ["Mechanical Engineering", "Electronics Engineering"],
      position: showYou ? { x: 450, y: 400 } : { x: 534, y: 230 },
      color: "green",
    },
    {
      id: "maya",
      name: "Dr. Maya Patel",
      role: "Clinician Support",
      skills: ["Research Operations"],
      position: showYou ? { x: 350, y: 650 } : { x: 489, y: 550 },
      color: "yellow",
    },
    {
      id: "bryan",
      name: "Dr. Bryan Carroll",
      role: "Dermatologic Surgeon",
      skills: ["Surgery"],
      position: showYou ? { x: 450, y: 850 } : { x: 555, y: 850 },
      color: "rose",
    },
  ];

  const sharedSkills = showYou
    ? [
        { name: "Human-Robot Interaction", position: { x: 340, y: 480 }, size: "sm" },
        { name: "Design Thinking", position: { x: 380, y: 560 }, size: "xs" },
        { name: "Quantitative Research", position: { x: 440, y: 580 }, size: "sm" },
        { name: "UX Writing", position: { x: 280, y: 630 }, size: "sm" },
        { name: "Medicine", position: { x: 400, y: 730 }, size: "sm" },
      ]
    : [
        { name: "Human-Robot Interaction", position: { x: 371, y: 360 }, size: "sm" },
        { name: "Design Thinking", position: { x: 342, y: 420 }, size: "xs" },
        { name: "Quantitative Research", position: { x: 474, y: 450 }, size: "sm" },
        { name: "UX Writing", position: { x: 361, y: 490 }, size: "sm" },
        { name: "Medicine", position: { x: 517, y: 700 }, size: "sm" },
      ];

  const youSkills = [
    { name: "Product Design", position: { x: 320, y: 420 }, size: "sm" },
    { name: "Visual Design", position: { x: 250, y: 500 }, size: "sm" },
    { name: "Product Development", position: { x: 410, y: 450 }, size: "sm" },
  ];

  const handleZoomIn = () => setZoom(Math.min(zoom + 20, 100));
  const handleZoomOut = () => setZoom(Math.max(zoom - 20, 0));

  const getSkillSize = (size: string) => {
    if (size === "xs") return "text-[10px] px-2 py-1";
    if (size === "sm") return "text-[11px] px-2.5 py-1.5";
    return "text-[12px] px-3 py-2";
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-1">
        {/* Project Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-[1400px] mx-auto px-8 py-8">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-[13px] text-gray-500 hover:text-gray-900 transition-colors mb-4"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Project</span>
            </button>

            <div className="space-y-1">
              <p className="text-[13px] text-gray-500">Ongoing Research Project</p>
              <h1 className="text-5xl font-medium text-gray-900">RoboDog</h1>
              <h2 className="text-2xl font-medium text-gray-900">Carroll Labs</h2>
              <div className="flex items-center gap-2 mt-2">
                <MapPin className="h-4 w-4 text-cyan-400" />
                <span className="text-[13px] text-gray-700">UH Cleveland Medical Center</span>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button className="px-4 py-2 text-[13px] font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                Stay Updated
              </button>
              <button className="px-4 py-2 text-[13px] font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                Contact Project Coordinator
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-[1400px] mx-auto px-8 py-6">
          <div className="flex gap-6">
            {/* Left Sidebar */}
            <div className="w-[240px] flex-shrink-0 space-y-4">
              {/* Project Topics */}
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <p className="text-[11px] font-medium text-gray-400 mb-3">Project Topics</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-[11px] font-semibold text-gray-700 rounded-full">
                    Robotics
                  </span>
                  <span className="px-3 py-1 bg-cyan-100 text-[11px] font-semibold text-gray-700 rounded-full">
                    Human-Robot Interaction
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-[11px] font-semibold text-gray-700 rounded-full">
                    Surgery Assistance
                  </span>
                </div>
              </div>

              {/* Looking For */}
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <p className="text-[11px] font-medium text-gray-400 mb-3">Looking for</p>
                <div className="flex flex-col gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-[11px] font-semibold text-gray-700 rounded-full text-center">
                    Robotics Engineers
                  </span>
                  <span className="px-3 py-1.5 bg-cyan-100 text-[11px] font-semibold text-gray-700 rounded-full text-center leading-tight">
                    Human-Robot Interaction Practitioner
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-[11px] font-semibold text-gray-700 rounded-full text-center">
                    Grant Writers
                  </span>
                </div>
              </div>

              {/* Insights (shown when "You" is visible) */}
              {showYou && (
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <p className="text-[11px] font-medium text-gray-400 mb-3">Insights Generated</p>
                  <ul className="text-[13px] text-gray-700 space-y-2 list-disc pl-4">
                    <li>
                      You are closest in skillset to <span className="font-semibold">Andrew Chan</span>
                    </li>
                    <li>
                      You bring a new skill of <span className="font-semibold">Product Design</span>
                    </li>
                    <li>
                      The team becomes stronger in <span className="font-semibold">Design Thinking</span> and{" "}
                      <span className="font-semibold">Human-Robot Interaction</span> with you
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Venn Diagram */}
            <div className="flex-1">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-base font-medium text-gray-900">Skills Map</h3>
                    <p className="text-[12px] text-gray-500 mt-0.5">
                      Explore how team members' skills intersect
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setShowYou(!showYou)}
                      className={`px-4 py-2 text-[13px] font-medium rounded-md border transition-colors ${
                        showYou
                          ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
                          : "bg-white text-gray-700 border-gray-800 hover:bg-gray-50"
                      }`}
                    >
                      {showYou ? "Hide My Fit" : "How do I fit in?"}
                    </button>

                    <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-md px-3 py-1.5">
                      <button
                        onClick={handleZoomOut}
                        disabled={zoom <= 0}
                        className="text-gray-600 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed text-lg font-medium"
                      >
                        −
                      </button>
                      <span className="text-[11px] text-gray-500 min-w-[40px] text-center">
                        {zoom}%
                      </span>
                      <button
                        onClick={handleZoomIn}
                        disabled={zoom >= 100}
                        className="text-gray-600 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed text-lg font-medium"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Venn Diagram Container */}
                <div className="relative h-[700px] overflow-auto bg-gray-50 rounded-lg border border-gray-200">
                  <div
                    className="relative transition-transform duration-300"
                    style={{ 
                      transform: `scale(${1 + zoom / 100})`,
                      width: '1200px',
                      height: '1100px',
                      transformOrigin: 'top left'
                    }}
                  >
                    {/* Circle 1 - Cyan (Andrew Chan / Design) */}
                    <div
                      className="absolute w-[528px] h-[528px] pointer-events-none"
                      style={{
                        left: showYou ? "50px" : "100px",
                        top: showYou ? "250px" : "200px",
                      }}
                    >
                      <svg className="w-full h-full" viewBox="0 0 528 528">
                        <circle
                          cx="264"
                          cy="264"
                          r="263.5"
                          fill="#CFFAFE"
                          fillOpacity="0.5"
                          stroke="#22D3EE"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>

                    {/* Circle 2 - Green (Daniel Kim / Engineering) */}
                    <div
                      className="absolute w-[527px] h-[528px] pointer-events-none"
                      style={{
                        left: showYou ? "300px" : "352px",
                        top: showYou ? "100px" : "40px",
                      }}
                    >
                      <svg className="w-full h-full" viewBox="0 0 527 528">
                        <circle
                          cx="263.5"
                          cy="264"
                          r="263.5"
                          fill="#ECFDF5"
                          fillOpacity="0.5"
                          stroke="#34D399"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>

                    {/* Circle 3 - Yellow (Dr. Maya Patel / Research) */}
                    <div
                      className="absolute w-[527px] h-[527px] pointer-events-none"
                      style={{
                        left: showYou ? "200px" : "326px",
                        top: showYou ? "400px" : "400px",
                      }}
                    >
                      <svg className="w-full h-full" viewBox="0 0 527 527">
                        <circle
                          cx="263.5"
                          cy="263.5"
                          r="263"
                          fill="#FEF3C7"
                          fillOpacity="0.5"
                          stroke="#FBBF24"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>

                    {/* Circle 4 - Rose (Dr. Bryan Carroll / Clinical) */}
                    <div
                      className="absolute w-[529px] h-[528px] pointer-events-none"
                      style={{
                        left: showYou ? "300px" : "510px",
                        top: showYou ? "650px" : "720px",
                      }}
                    >
                      <svg className="w-full h-full" viewBox="0 0 529 528">
                        <circle
                          cx="264.5"
                          cy="264"
                          r="263.5"
                          fill="#FFE4E6"
                          fillOpacity="0.5"
                          stroke="#F43F5E"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>

                    {/* "You" Circle - Blue (shown when toggled) */}
                    {showYou && (
                      <div
                        className="absolute w-[400px] h-[400px] pointer-events-none"
                        style={{
                          left: "180px",
                          top: "320px",
                        }}
                      >
                        <svg className="w-full h-full" viewBox="0 0 400 400">
                          <circle
                            cx="200"
                            cy="200"
                            r="199"
                            fill="#3B82F6"
                            fillOpacity="0.6"
                            stroke="#2563EB"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                    )}

                    {/* Shared Skills in Overlaps */}
                    {sharedSkills.map((skill, idx) => (
                      <div
                        key={idx}
                        className={`absolute bg-white/95 backdrop-blur-sm border border-gray-300 rounded-full transition-all hover:scale-105 hover:border-blue-400 hover:shadow-sm ${getSkillSize(
                          skill.size
                        )}`}
                        style={{
                          left: `${skill.position.x}px`,
                          top: `${skill.position.y}px`,
                          maxWidth: "140px",
                        }}
                      >
                        <p className="font-medium text-gray-900 text-center leading-tight whitespace-nowrap">
                          {skill.name}
                        </p>
                      </div>
                    ))}

                    {/* "You" Skills (shown when toggled) */}
                    {showYou &&
                      youSkills.map((skill, idx) => (
                        <div
                          key={`you-${idx}`}
                          className={`absolute bg-white/95 backdrop-blur-sm border border-blue-300 rounded-full transition-all ${getSkillSize(
                            skill.size
                          )}`}
                          style={{
                            left: `${skill.position.x}px`,
                            top: `${skill.position.y}px`,
                            maxWidth: "140px",
                          }}
                        >
                          <p className="font-medium text-gray-900 text-center leading-tight whitespace-nowrap">
                            {skill.name}
                          </p>
                        </div>
                      ))}

                    {/* Team Member Cards */}
                    {teamMembers.map((member) => (
                      <div
                        key={member.id}
                        className="absolute transition-all"
                        style={{
                          left: `${member.position.x}px`,
                          top: `${member.position.y}px`,
                        }}
                      >
                        <div className="bg-white/95 backdrop-blur-sm border border-gray-300 rounded-lg p-3 min-w-[180px]">
                          <p className="font-semibold text-[15px] text-gray-900 mb-0.5">
                            {member.name}
                          </p>
                          <p className="text-[12px] text-gray-600 mb-2">{member.role}</p>
                          <div className="flex flex-wrap gap-1.5">
                            {member.skills.map((skill, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-0.5 bg-white border border-gray-300 text-[10px] font-medium text-gray-700 rounded-full"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* "You" Card (shown when toggled) */}
                    {showYou && (
                      <div
                        className="absolute transition-all"
                        style={{
                          left: "250px",
                          top: "430px",
                        }}
                      >
                        <div className="bg-blue-600 text-white rounded-lg p-3 min-w-[180px] shadow-lg">
                          <p className="font-semibold text-[15px] mb-0.5">You</p>
                          <p className="text-[12px] text-blue-100 mb-2">HCI Practitioner</p>
                          <div className="flex flex-wrap gap-1.5">
                            <span className="px-2 py-0.5 bg-white text-blue-900 text-[10px] font-medium rounded-full">
                              Product Design
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}