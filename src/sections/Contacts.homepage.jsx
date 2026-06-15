  import React, { useState } from "react";
  import { Link, useLocation, useNavigate } from "react-router-dom";
  import footericon from "../assets/img/footericon.png";
  import "../sections/Contacts.css";

  const Contacts = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleHomeClick = () => {
      if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/");
      }
      setIsOpen(false);
    };

    return (
      <footer id="footer" className="footer">
        <div className="footer-top">
          <div className="row-footer">

            {/* Contact */}
            <div className="footer-contact">
              <img
                src={footericon}
                className="footer-img"
                alt="Omar ElMishad Company footer logo"
              />
              <p>Sole proprietorship</p>
              <p><i className="bi bi-whatsapp" />: +44 7477 140271</p>
              <p>331-008-793: رقم التسجيل الضريبى</p>
            </div>

            {/* Links */}
            <div className="useful-links">
              <h3>Useful Links</h3>
              <ul>
                <li><Link to="/" onClick={handleHomeClick}>Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/terms">Terms of Service</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="our-services">
              <h3>Our Services</h3>
              <ul>
                <li><span>Film Production</span></li>
                <li><span>AI & Post-Production</span></li>
                <li><span>Audio Production</span></li>
                <li><span>Brand Consulting</span></li>
                <li><span>Product Placement</span></li>
                <li><span>Training</span></li>
              </ul>
            </div>

            {/* Team */}
            <div className="team-mails">
              <h3>Team</h3>
              <ul className="job-emails">
                <li><a href="mailto:omar-elmishad@omardir.com">Creative Director: omar-elmishad@omardir.com</a></li>
                <li><a href="mailto:lamia-idriss@omardir.com">Account Manager: lamia-idriss@omardir.com</a></li>
                {/* <li><a href="mailto:mohammed-elsalamony@omardir.com">Senior Screenwriter: mohammed-elsalamony@omardir.com</a></li> */}
                <li><a href="mailto:mohammed-alabbasy@omardir.com">Chartered Accountant: mohammed-alabbasy@omardir.com</a></li>
                <li><span>AI Filmmaker: Abdülhamit Habiboğlu</span></li>
              </ul>
            </div>

          </div>
        </div>
      </footer>
    );
  };

  export default Contacts;
