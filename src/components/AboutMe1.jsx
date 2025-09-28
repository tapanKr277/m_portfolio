import { Typewriter } from "react-simple-typewriter";

const categorizedSkills = {
  "Procurement & Tendering": [
    "Government Tendering",
    "GEM",
    "CPPP",
    "IREPS",
    "e-Procurement",
    "Tender Management Tools",
    "Technical & Price Bid Preparation",
    "EMD & ePBG Submission",
    "Contract Negotiation & Compliance",
    "OEM Research & Onboarding",
    "Vendor Development",
    "Documentation & Portal Management",
  ],
  "Software & ERP Tools": ["MS Office", "Tally ERP", "SAP Ariba", "ZOHO CRM"],
  "Business & Analytical Skills": [
    "Vendor Management",
    "Reverse Auctions",
    "Cost Optimization",
    "Competitive Analysis",
    "Cross-functional Collaboration",
    "Payment Follow-ups",
    "Audit & Compliance",
    "Market Research",
  ],
};

const AboutMe1 = () => {
  return (
    <section
      id="about"
      className="flex flex-col lg:flex-row justify-between mb-12 min-h-screen pt-28 px-4 lg:px-16 gap-12"
    >
      {/* Left Heading */}
      <div className="lg:w-1/3 text-5xl lg:text-8xl font-bold text-black">
        <Typewriter
          words={["About Me"]}
          loop={false}
          cursor
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1200}
        />
      </div>

      {/* Right Content */}
      <div className="lg:w-2/3 font-manrope">
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md transition-transform duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1">
          <h1 className="text-2xl lg:text-3xl font-semibold text-black mb-4">
            I’m Madhu Kumari, a Procurement & Business Development Professional based in Jamshedpur.
          </h1>
          <p className="mb-10 text-gray-800 text-base lg:text-lg leading-relaxed">
            Experienced in **Government Tendering, Procurement, and Business Development** with hands-on expertise in end-to-end tender processes,
            vendor management, OEM coordination, contract compliance, and post-order execution. Skilled in managing company registrations, portal updates, and
            statutory compliance on portals like GEM, CPPP, and IREPS. Adept at preparing technical and price bids, managing EMD/ePBG submissions, and driving cost
            optimization initiatives. Recognized for strong analytical skills, cross-functional collaboration, and delivering results under pressure.
          </p>

          {/* Skills */}
          {Object.entries(categorizedSkills).map(([category, skills]) => (
            <div key={category} className="mb-6">
              <h2 className="text-lg font-semibold text-black mb-3">{category}</h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="text-sm border border-black text-black px-4 py-2 rounded-full bg-white transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:scale-105 hover:-translate-y-[2px] shadow-sm hover:shadow-md cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe1;
