import React from "react";
import { Typewriter } from "react-simple-typewriter";

export const openPdfInNewTab = () => {
  const pdfUrl = "/Madhu_Kumari.pdf";
  window.open(pdfUrl, "_blank");
};

const Intro = () => {
  return (
    <div
      className="flex flex-col lg:flex-row justify-between w-full items-center min-h-screen px-4"
      id="intro"
    >
      {/* Left Section */}
      <div className="lg:my-36 mt-10 mb-10 lg:w-2/5 w-full">
        <div className="text-black font-bold lg:text-8xl text-5xl leading-tight min-h-[120px]">
          <h1>
            <Typewriter
              words={["HI, I AM", "Madhu Kumari"]}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={40}
              delaySpeed={1200}
            />
          </h1>
        </div>

        <p className="font-medium text-base lg:text-lg text-gray-800 font-manrope w-full mt-4">
          Business Development Manager
        </p>
        <p className="font-medium text-base lg:text-lg text-gray-700 font-manrope w-full mt-4">
          Procurement and tendering professional with 3+ years of experience
          managing end-to-end Government Tendering and Vendor Development
          processes across Electrical, Mechanical, Instrumentation & Automation
          sectors. Executed over 100 government tenders through GEM, CPPP, and
          IREPS platforms with full compliance. Proficient in vendor onboarding,
          OEM coordination, and contract negotiation—achieving up to 12% cost
          reductions and a 15% year-over-year improvement in bid success rates.
          Skilled in cross-functional coordination, eprocurement tools, and
          driving procurement operations that improve cost efficiency and
          streamline compliance.
        </p>

        {/* Buttons Section */}
        <div className="flex mt-10 items-center gap-4 flex-nowrap overflow-x-auto">
          {/* Resume Button */}
          <div className="relative group">
            <a
              href="/Madhu_Kumari.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer bg-black hover:bg-gray-800 transition-all duration-300 text-white text-sm lg:text-base font-bold font-manrope rounded-full px-6 py-2 flex items-center"
            >
              <h1>DOWNLOAD RESUME</h1>
              <div className="ml-3 bg-white rounded-full w-2 h-2"></div>
            </a>
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
              Download Resume
            </span>
          </div>

          {/* LinkedIn */}
          <div className="relative group">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/madhu-kumari-612017220/"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-black hover:bg-gray-700 transition-all duration-300 rounded-full flex items-center justify-center"
            >
              {/* LinkedIn Icon */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 32 32"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.644 9.59602C8.2552 9.59602 9.56134 8.28988 9.56134 6.67869C9.56134 5.06749 8.2552 3.76135 6.644 3.76135C5.0328 3.76135 3.72667 5.06749 3.72667 6.67869C3.72667 8.28988 5.0328 9.59602 6.644 9.59602Z" />
                <path d="M12.316 11.8067V27.992H17.3413V19.988C17.3413 17.876 17.7387 15.8307 20.3573 15.8307C22.94 15.8307 22.972 18.2453 22.972 20.1213V27.9933H28V19.1173C28 14.7573 27.0613 11.4067 21.9653 11.4067C19.5187 11.4067 17.8787 12.7493 17.208 14.02H17.14V11.8067H12.316ZM4.12666 11.8067H9.16V27.992H4.12666V11.8067Z" />
              </svg>
            </a>
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs px-2 py-1 rounded">
              Checkout LinkedIn
            </span>
          </div>
        </div>
      </div>

      {/* Right - Profile Image */}
      <div className="w-full lg:w-[600px] flex justify-center items-center">
        <div className="relative w-full max-w-[350px] sm:max-w-[400px] md:max-w-[500px] lg:w-[600px] h-auto mx-auto">
          <img
            src="PROFILE_2.png"
            className="w-full h-auto object-contain z-10 relative"
            alt="Madhu's Profile"
          />
          <div className="absolute inset-0 bg-[#f8f9fa] z-0 pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
