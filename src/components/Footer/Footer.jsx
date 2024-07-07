import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-cont-1">
          <h1 className="get-in-touch">Get in touch</h1>
          <p className="footer-email">
            <img
              src="/assets/email.svg"
              alt="Email"
              className="footer-email-icon"
            />
            help@pitchathon.in
          </p>
        </div>
        <hr className="footer-rule" />
        <div className="footer-cont-2">
          <h1 className="get-in-touch">Overall Coordinator</h1>
          <p className="footer-email">
            <img
              src="/assets/email.svg"
              alt="Email"
              className="footer-email-icon"
            />
            naman@pitchathon.in
          </p>
        </div>
      </div>
      <p className="copyright">
        © <p className="copyright-color">VIT Chennai</p>All rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
