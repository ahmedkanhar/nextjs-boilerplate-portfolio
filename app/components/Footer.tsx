const Footer = () => {
    return (
      <footer className="bg-[#1e2a38] text-[#ffffff] py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          {/* Left Section (Copyright) */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-lg">&copy; 2024 Ahmed Kanhar. All Rights Reserved.</p>
          </div>
  
          {/* Right Section (Social Media Links) */}
          <div className="flex justify-center gap-6">
            <a href="https://github.com/ahmedkanhar" target="_blank" rel="noopener noreferrer" className="hover:text-[#00abf0] transition duration-300">
              <i className="bx bxl-github text-2xl"></i> {/* Replace with your desired icon */}
            </a>
            <a href="https://www.linkedin.com/in/ahmedkanhar" target="_blank" rel="noopener noreferrer" className="hover:text-[#00abf0] transition duration-300">
              <i className="bx bxl-linkedin text-2xl"></i> {/* Replace with your desired icon */}
            </a>
            <a href="mailto:ahmedalikanhar777@gmail.com" className="hover:text-[#00abf0] transition duration-300">
              <i className="bx bx-envelope text-2xl"></i> {/* Replace with your desired icon */}
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  