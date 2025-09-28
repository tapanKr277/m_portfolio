import { Typewriter } from "react-simple-typewriter";

const cirtificates = [
  {
    title: "Python (with Data Structures)",
    institiute: "Hackerrank",
    issuer: "Hackerrank",
    date: "2023",
    link: "https://www.hackerrank.com/certificates/11f27fb76b94",
  },
  {
    title: "React",
    institiute: "Hackerrank",
    issuer: "Hackerrank",
    date: "2023",
    link: "https://www.hackerrank.com/certificates/03248fbaa375",
  },
  {
    title: "Java",
    institiute: "Hackerrank",
    issuer: "Hackerrank",
    date: "2023",
    link: "https://www.hackerrank.com/certificates/79a3b3a0ce5d",
  },
  {
    title: "JavaScript",
    institiute: "Hackerrank",
    issuer: "Hackerrank",
    date: "2023",
    link: "https://www.hackerrank.com/certificates/cd2470e9715f",
  },
  {
    title: "Problem Solving",
    institiute: "Hackerrank",
    issuer: "Hackerrank",
    date: "2023",
    link: "https://www.hackerrank.com/certificates/1a0iPIgjzag48rEihJuGMK_NYF-RmUALG",
  },
];

const Cirtifications = () => {
  return (
    <>
      <div
        className="lg:flex justify-between lg:space-x-10 mb-40 min-h-screen pt-28 px-4"
        id="certification"
      >
        {/* Typing Effect Heading */}
        <div className="lg:w-[1500px] lg:text-8xl text-[42px] font-bold text-black">
          <Typewriter
            words={["My Certifications"]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1200}
          />
        </div>

        {/* Certificates as Cards */}
        <div className="lg:w-[1800px] lg:px-3 font-manrope lg:mr-20 grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 lg:mt-0">
          {cirtificates.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-3 hover:scale-[1.03] border border-gray-100 overflow-hidden p-6"
            >
              <h2 className="font-semibold text-black text-xl mb-1">
                {item.title}
              </h2>
              <p className="text-gray-800 mb-1">
                Institute: {item.institiute}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                Issuer: {item.issuer} • {item.date}
              </p>
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-blue-600 underline font-medium"
              >
                Verify Certificate →
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="-mx-4 lg:-mx-28">
        <hr className="border-gray-300" />
      </div>
    </>
  );
};

export default Cirtifications;
