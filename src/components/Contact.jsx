import { useState } from "react";
import { openPdfInNewTab } from "./Intro";
import { Typewriter } from "react-simple-typewriter";

const Contact = () => {
  const [recipient, setRecipient] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendEmail = (e) => {
    e.preventDefault();
    const subjectEncoded = encodeURIComponent(subject);
    const messageEncoded = encodeURIComponent(
      `Name: ${recipient}\nEmail: ${recipientEmail}\n\n${message}`
    );
    const mailtoUrl = `mailto:tapankr277@gmail.com?subject=${subjectEncoded}&body=${messageEncoded}`;
    window.open(mailtoUrl, "_blank");
  };

  return (
    <div className="w-full min-h-screen text-black pt-14 px-4" id="contact">
      <div className="wrapper lg:flex w-full gap-8">
        {/* Left Section */}
        <div className="links lg:w-2/4 px-2">
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md transition-transform duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1">
            <h1 className="lg:text-7xl text-5xl font-bold text-black">
              <Typewriter
                words={["Let’s connect"]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h1>

            <h3 className="font-manrope text-lg text-gray-800 mt-4">
              Say hello at{" "}
              <a
                href="mailto:madhu5741jsr@gmail.com"
                className="text-blue-600 underline hover:text-blue-800"
              >
                madhu5741jsr@gmail.com
              </a>
            </h3>

            <h3 className="font-manrope text-lg text-gray-800 mt-2">
              For more info, here’s my{" "}
              <a
                onClick={openPdfInNewTab}
                className="text-blue-600 underline hover:text-blue-800 cursor-pointer"
              >
                resume
              </a>
            </h3>

            {/* Social Icons */}
            <div className="flex gap-4 mt-10 flex-wrap">
              {[
                {
                  href: "https://www.linkedin.com/in/madhu-kumari-612017220/",
                  label: "LinkedIn",
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 32 32" fill="white">
                      <path d="M6.644 9.596C8.255 9.596 9.561 8.29 9.561 6.679S8.255 3.761 6.644 3.761 3.727 5.067 3.727 6.679 5.033 9.596 6.644 9.596Z" />
                      <path d="M12.316 11.807V27.992h5.025V19.988c0-2.112.397-4.157 3.016-4.157 2.583 0 2.615 2.415 2.615 4.291v7.871h5.028V19.117c0-4.36-.939-7.711-6.035-7.711-2.446 0-4.086 1.343-4.757 2.614h-.068v-2.213h-4.824zM4.127 11.807h5.033V27.992H4.127z" />
                    </svg>
                  ),
                },
              ].map(({ href, icon, label }) => (
                <div className="relative group" key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-black hover:bg-gray-700 transition-all duration-300 rounded-full flex items-center justify-center shadow-md hover:scale-105 hover:-translate-y-[2px]"
                  >
                    {icon}
                  </a>
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs px-2 py-1 rounded">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right - Contact Form */}
        <form
          onSubmit={handleSendEmail}
          className="grid grid-cols-1 font-manrope lg:w-2/4 px-2 mt-16 lg:mt-0 bg-white rounded-2xl p-6 border border-gray-200 shadow-md transition-transform duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1"
        >
          {/* Form Fields */}
          <label className="mb-1 mt-4">Name</label>
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            required
            className="p-2 h-12 bg-gray-100 text-black rounded-sm border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition duration-200 outline-none"
          />

          <label className="mb-1 mt-6">Email</label>
          <input
            type="email"
            value={recipientEmail}
            onChange={(e) => setRecipientEmail(e.target.value)}
            required
            className="p-2 h-12 bg-gray-100 text-black rounded-sm border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition duration-200 outline-none"
          />

          <label className="mb-1 mt-6">Subject</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className="p-2 h-12 bg-gray-100 text-black rounded-sm border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition duration-200 outline-none"
          />

          <label className="mb-1 mt-6">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="p-2 bg-gray-100 text-black rounded-sm h-40 border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition duration-200 outline-none"
          />

          <input
            type="submit"
            value="Send Message"
            className="bg-black hover:bg-gray-800 text-white px-5 py-2 rounded-full font-bold mt-10 cursor-pointer transition duration-200"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
