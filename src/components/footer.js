import React from 'react';

const Footer = () => {
  return (
        <footer className="bg-dark text-white text-center py-3 fixed-bottom">

      <div className="container">
        <p className="mb-1">&copy; {new Date().getFullYear()} Sheetal Sharma. All rights reserved.</p>
        <div>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-white mx-2">
            GitHub
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-white mx-2">
            LinkedIn
          </a>
          <a href="mailto:youremail@example.com" className="text-white mx-2">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
