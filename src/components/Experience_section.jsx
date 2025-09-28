import { Typewriter } from "react-simple-typewriter";
import Experiencecard_for_about from "./Experiencecard_for_about";

export const experience = [
  {
    title: "Business Development Manager",
    company: "Inosystek Solutions Pvt. Ltd",
    start: "Jul 2025",
    end: "Present",
    location: "Jamshedpur, India",
    discription: [
      "Lead end-to-end tendering processes in Electrical, Mechanical & Instrumentation sectors across government procurement portals (GEM, IREPS, CPPP).",
      "Prepare and submit competitive bids with 100% compliance to tender requirements, improving bid success rate.",
      "Manage company registrations, portal updates, and statutory compliance for participation in e-procurement.",
      "Coordinate with OEMs for quotations, dealership agreements & price negotiations, driving cost savings and expanding vendor network.",
    ],
  },
  {
    title: "Senior Executive – Procurement & Business Development",
    company: "M/s Shri Krishna Commercial",
    start: "Nov 2022",
    end: "Jun 2025",
    location: "Jamshedpur, India",
    discription: [
      "Managed end-to-end tender process across Electrical, Mechanical, Instrumentation & Automation projects.",
      "Handled 100+ tenders via GEM, CPPP, IREPS & other government portals.",
      "Prepared and submitted technical & commercial bids with complete documentation, improving bid success rate by 15% YoY.",
      "Negotiated with 10+ OEMs & clients, reducing procurement costs by up to 12%.",
      "Expanded vendor network through new OEM onboarding.",
      "Registered & maintained vendor accounts on e-procurement portals.",
      "Managed EMD/ePBG submissions worth ₹2Cr+, inspections (RITES, TPI), and compliance.",
      "Coordinated with sales, accounts, warehouse & technical teams to ensure timely tender submissions and deliveries.",
      "Maintained audit-ready documentation and vendor profiles.",
      "Followed up with government departments for timely payment release post material delivery.",
    ],
  },
];


const Experience_section = () => {
  return (
    <section
      id="work"
      className="w-full px-4 pt-12 pb-8 lg:pt-36 lg:pb-20"
    >
      <div className="lg:flex lg:justify-between items-start">
        {/* Left Title */}
        <div className="lg:w-2/5 w-full mb-8 lg:mb-0">
          <h1 className="text-4xl sm:text-5xl lg:text-8xl font-bold text-black leading-tight">
            <Typewriter
              words={["My Experience"]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1200}
            />
          </h1>
        </div>

        {/* Experience Cards */}
        <div className="lg:w-3/5 w-full space-y-8 font-manrope text-black">
          {experience.map((item, index) => (
            <Experiencecard_for_about key={index} job={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience_section;
