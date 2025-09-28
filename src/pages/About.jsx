import React from "react";
import Experience_section from "../components/Experience_section";
import { openPdfInNewTab } from "../components/Intro";
import Education from "../components/Education";

const madhuSkills = [
  "Government Tendering",
  "Procurement Management",
  "Vendor Management",
  "OEM Coordination",
  "Negotiation",
  "GEM Platform",
  "CPPP Platform",
  "IREPS Platform",
  "Technical & Commercial Bid Preparation",
  "EMD/ePBG Submission",
  "Inspection Coordination",
  "Audit-ready Documentation",
  "Payment Follow-ups",
  "Cross-functional Coordination"
];

const About = () => {
  return (
    <div className="lg:mx-28 px-4 text-black">
      {/* ABOUT SECTION */}
      <section className="lg:flex justify-between w-full items-center lg:mb-20 mb-20 lg:pt-36 pt-12">
        <div className="lg:w-2/5 w-full mb-2">
          <h1 className="lg:text-8xl text-6xl font-bold text-black">
            About Me
          </h1>
        </div>
        <div className="lg:w-2/4 font-manrope">
          <h2 className="text-black lg:text-3xl text-2xl font-semibold">
            I’m Madhu Kumari, a Procurement & Business Development Professional based in Jamshedpur.
          </h2>
          <p className="text-gray-800 text-base mt-4">
            Results-driven professional with 3+ years of experience in Government Tendering, Procurement, and Business Development across Electrical, Mechanical, Instrumentation, and Automation sectors. Skilled in managing end-to-end tender processes, vendor management, OEM coordination, negotiation, and ensuring compliance on platforms such as GEM, CPPP, and IREPS.
            <br /><br />
            Adept at preparing technical and commercial bids, EMD/ePBG submissions, inspections, and audit-ready documentation, while coordinating cross-functionally to ensure timely delivery and payment follow-ups.
          </p>
          <div className="flex mt-12 flex-wrap items-center gap-4">
            {/* Resume */}
            <a
              onClick={openPdfInNewTab}
              className="cursor-pointer text-white bg-black lg:text-base text-sm font-bold font-manrope rounded-full px-6 py-2 flex items-center hover:bg-gray-800 transition-all duration-300"
            >
              <h1>DOWNLOAD RESUME</h1>
              <div className="ml-3 bg-white rounded-full w-2 h-2"></div>
            </a>

            {/* LinkedIn */}
            <div className="relative group">
              <a
                href="https://www.linkedin.com/in/madhu-kumari-612017220/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 bg-black hover:bg-gray-700 transition-all duration-300 rounded-full flex items-center justify-center"
              >
                {/* Add LinkedIn SVG here */}
                <svg className="w-5 h-5 fill-white" viewBox="0 0 32 32">
              <path d="M6.644 9.596C8.255 9.596 9.561 8.29 9.561 6.679S8.255 3.761 6.644 3.761 3.727 5.067 3.727 6.679 5.033 9.596 6.644 9.596Z" />
              <path d="M12.316 11.807V27.992h5.025V19.988c0-2.112.397-4.157 3.016-4.157 2.583 0 2.615 2.415 2.615 4.291v7.871h5.028V19.117c0-4.36-.939-7.711-6.035-7.711-2.446 0-4.086 1.343-4.757 2.614h-.068v-2.213h-4.824zM4.127 11.807h5.033V27.992H4.127z" />
            </svg>
              </a>
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                LinkedIn
              </span>
            </div>
          </div>
        </div>
      </section>

      <hr className="lg:-mx-28 border-gray-300" />

      {/* SKILLS SECTION */}
      <section className="lg:flex justify-between w-full items-center lg:mb-20 mb-20 lg:pt-36 pt-12">
        <div className="lg:w-2/5 w-full mb-2">
          <h1 className="lg:text-8xl text-6xl font-bold text-black">
            My Skills
          </h1>
        </div>
        <div className="lg:w-2/4 font-manrope">
          <p className="text-gray-800 text-base mt-4">
            My core competencies include tendering, procurement management, vendor coordination, and ensuring compliance on multiple government e-procurement platforms.
          </p>
          <div className="flex mt-12 w-full flex-wrap">
            {madhuSkills.map((skill, idx) => (
              <div
                key={idx}
                className="text-black border-black border-[1px] rounded-full p-2 px-4 mx-2 my-2"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="lg:-mx-28 border-gray-300" />

      {/* EXPERIENCE SECTION */}
      <Experience_section />

      <Education />

      <hr className="lg:-mx-28 border-gray-300" />
    </div>
  );
};

export default About;
