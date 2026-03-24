
import React from 'react'

function SkillBar({ name, percent }) {
  return (
    <div className="mb-4">
      <p className="text-sm mb-1">{name}</p>
      <div className="w-full bg-gray-700 h-2 rounded">
        <div
          className="bg-green-500 h-2 rounded"
          style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  );
}

export default function Resume() {
  return (
    <section className="min-h-screen bg-gray-900 text-white px-10 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {/* LEFT - TECHNICAL SKILLS */}
        <div>
          <h2 className="text-xl font-bold mb-6">Technical Skills</h2>

          <SkillBar name="HTML" percent={90} />
          <SkillBar name="CSS" percent={85} />
          <SkillBar name="JavaScript" percent={80} />
          <SkillBar name="React JS" percent={75} />
          <SkillBar name="C / C++" percent={70} />

          <h2 className="text-xl font-bold mt-10 mb-4">Languages</h2>

          <SkillBar name="English" percent={85} />
          <SkillBar name="Hindi" percent={95} />
        </div>

        {/* CENTER - PROJECTS / EXPERIENCE */}
        <div>
          <h2 className="text-xl font-bold mb-6">Projects</h2>

          <div className="mb-6">
            <p className="font-semibold">Portfolio Website</p>
            <p className="text-gray-400 text-sm">
              Created using React & Tailwind CSS
            </p>
          </div>

          <div className="mb-6">
            <p className="font-semibold">ATM Interface UI</p>
            <p className="text-gray-400 text-sm">
              Designed using HTML & CSS
            </p>
          </div>

          <div className="mb-6">
            <p className="font-semibold">Student Management System</p>
            <p className="text-gray-400 text-sm">
              Developed in C++
            </p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Education</h2>

          <p className="text-gray-400">
            Bachelor of Computer Applications (BCA) <br />
            Kurukshetra University
          </p>
        </div>

        {/* RIGHT - EXTRA */}
        <div>
          <h2 className="text-xl font-bold mb-6">What Can I Do?</h2>

          <ul className="space-y-2 text-gray-400">
            <li>Web Development</li>
            <li>Frontend Design</li>
            <li>Responsive Layouts</li>
            <li>Basic Backend Logic</li>
          </ul>

          <h2 className="text-xl font-bold mt-10 mb-4">Soft Skills</h2>

          <ul className="space-y-2 text-gray-400">
            <li>Problem Solving</li>
            <li>Team Work</li>
            <li>Time Management</li>
            <li>Communication</li>
          </ul>

          <h2 className="text-xl font-bold mt-10 mb-4">Hobbies</h2>

          <p className="text-gray-400">
            Coding • Learning Tech • Gaming • Reading
          </p>
        </div>

      </div>
    </section>
  );
}