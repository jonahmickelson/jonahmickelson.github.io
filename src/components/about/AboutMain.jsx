import React from "react";
import Modal from "react-modal";
import Intro from "./Intro";
import KnowledgeInterest from "./KnowledgeInterest";
import PersonalInfo from "./PersonalInfo";
import Resume from "./Resume";
import Skills from "./Skills";

Modal.setAppElement("#root");

const AboutMain = () => {
  return (
    <>
      <div className="container">
        <div className="tokyo_tm_about">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>About</span>
                <h3>About Me</h3>
              </div>
            </div>
          </div>
          {/* End title */}

          <Intro />

          <div className="tokyo_tm_short_info">
            <PersonalInfo />
          </div>
          {/* End personal info */}

          {/* Resume Buttons (centered) */}
          <div
            className="tokyo_tm_button"
            data-position="left"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            <a
              href="assets/files/Jonah-Mickelson-Website-Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <span>View Resume</span>
            </a>
            <a
              href="assets/files/Jonah-Mickelson-Website-Resume.pdf"
              download
            >
              <span>Download Resume</span>
            </a>
          </div>
          {/* End resume buttons */}
        </div>
      </div>
      {/* End .container */}

      <div className="tokyo_tm_progressbox">
        <div className="container">
          <div className="in">
            <Skills />
          </div>
        </div>
      </div>
      {/* End tokyo_tm_progressbox */}

      <div className="tokyo_tm_skillbox">
        <div className="container">
          <div className="in">
            <KnowledgeInterest />
          </div>
        </div>
      </div>
      {/* End tokyo_tm_skillbox */}

      <div className="tokyo_tm_resumebox">
        <div className="container">
          <div className="in">
            <Resume />
          </div>
        </div>
      </div>
      {/* End tokyo_tm_resumebox */}

      {/* Testimonials section removed for now */}
    </>
  );
};

export default AboutMain;
