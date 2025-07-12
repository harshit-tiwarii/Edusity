import React from 'react'
import './footer.css'

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="simple-footer">
      <div className="footer-links">
        <a href="/privacy-policy">Privacy Policy</a>
        <span>|</span>
        <a href="/terms-and-conditions">Terms & Conditions</a>
      </div>
      <div className="footer-copy">
        © {year} YourCompany. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;