import { Typewriter } from "react-simple-typewriter";

export const Education = () => {
  return (
    <div
      className="lg:flex justify-between mb-2 min-h-screen pt-28 px-4"
      id="education"
    >
      {/* Left Heading */}
      <div className="lg:w-[900px] lg:text-8xl text-[42px] font-bold text-black">
        <Typewriter
          words={["Education"]}
          loop={false}
          cursor
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1200}
        />
      </div>

      {/* Right Content - Card Style */}
      <div className="lg:w-[1800px] lg:px-3 font-manrope mt-10 lg:mt-0 flex flex-col gap-6">
        <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-3 hover:scale-[1.03] border border-gray-100 overflow-hidden p-6">
          <h2 className="text-2xl font-semibold text-black">
            Bachelor of Commerce
          </h2>
          <p className="text-black mt-1">
           Abdul Bari Memorial College, Jharkhand
          </p>
          <div className="text-black text-sm mt-1">
            06/2017 – 10/2020 
          </div>
          <p className="text-black text-base mt-3">
            Completed my bachelor's degree in Completed undergraduate studies with core focus on Accounting, Business Management, Economics, and Finance. Built a strong foundation in commerce, business operations, and analytical skills, supporting expertise in procurement, vendor management, and business development.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-3 hover:scale-[1.03] border border-gray-100 overflow-hidden p-6">
          <h2 className="text-2xl font-semibold text-black">
            Intermediate
          </h2>
          <p className="text-black mt-1">
           The Graduate School, College for Women, Jharkhand
          </p>
          <div className="text-black text-sm mt-1">
            06/2015 – 05/2017 
          </div>
          <p className="text-black text-base mt-3">
            Completed higher secondary education with a focus on Commerce subjects including Accounting, Business Studies, and Economics. Built a solid academic foundation that supported further studies in business and commerce
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-3 hover:scale-[1.03] border border-gray-100 overflow-hidden p-6">
          <h2 className="text-2xl font-semibold text-black">
            Matriculation
          </h2>
          <p className="text-black mt-1">
           INCAB KERALA PUBLIC SCHOOL, Jharkhand
          </p>
          <div className="text-black text-sm mt-1">
            2015
          </div>
          <p className="text-black text-base mt-3">
            Successfully completed secondary education, gaining a strong base in core subjects and developing analytical, problem-solving, and communication skills essential for higher studies. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
