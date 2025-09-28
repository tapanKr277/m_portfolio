const Footer = () => {
  return (
    <footer className="bg-black text-white px-4 pt-6 pb-4 tracking-wide">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left: Name */}
        <div className="text-lg font-bold tracking-widest mb-4 md:mb-0">
          Madhu Kumari
        </div>

        {/* Right: Social Icons */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/madhu-kumari-612017220/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:scale-110 transition-transform"
          >
            <svg className="w-5 h-5 fill-white" viewBox="0 0 32 32">
              <path d="M6.644 9.596C8.255 9.596 9.561 8.29 9.561 6.679S8.255 3.761 6.644 3.761 3.727 5.067 3.727 6.679 5.033 9.596 6.644 9.596Z" />
              <path d="M12.316 11.807V27.992h5.025V19.988c0-2.112.397-4.157 3.016-4.157 2.583 0 2.615 2.415 2.615 4.291v7.871h5.028V19.117c0-4.36-.939-7.711-6.035-7.711-2.446 0-4.086 1.343-4.757 2.614h-.068v-2.213h-4.824zM4.127 11.807h5.033V27.992H4.127z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Centered Bottom Text */}
      <div className="text-center text-sm text-gray-400 mt-4 tracking-wider">
        © {new Date().getFullYear()} Madhu Kumari. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
