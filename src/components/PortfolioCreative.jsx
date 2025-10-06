import React, { useState } from "react";
import Modal from "react-modal";
import Social from "./Social";

Modal.setAppElement("#root");

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="container">
        <div className="tokyo_tm_portfolio">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>Projects</span>
                <h3>Past Projects</h3>
              </div>
            </div>
          </div>

          {/* PROJECT CARD */}
          <ul className="portfolio_list">
            <li data-aos="fade-right" data-aos-duration="1200">
              <div className="inner">
                <div
                  className="entry tokyo_tm_portfolio_animation_wrap"
                  onClick={toggleModal}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src="/assets/img/portfolio/jonah-redbirds-team.jpg"
                    alt="McGill Redbirds Team"
                    style={{ borderRadius: "8px" }}
                  />
                </div>
                <div className="mobile_title">
                  <h3>McGill Basketball Plus-Minus Tracker</h3>
                  <span>R Shiny Application</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* MODAL */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="Plus-Minus App Modal"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModal}>
            <img src="/assets/img/svg/cancel.svg" alt="close icon" />
          </button>

          <div className="box_inner">
            <div className="description_wrap scrollable">
              {/* MAIN IMAGE */}
              <div className="image">
                <img
                  src="/assets/img/portfolio/jonah-redbirds-team.jpg"
                  alt="McGill Redbirds Team"
                />
                <div
                  className="main"
                  style={{
                    backgroundImage:
                      "url(/assets/img/portfolio/jonah-redbirds-team.jpg)",
                  }}
                ></div>
              </div>

              <div className="portfolio_main_title">
                <h3>McGill Basketball Plus-Minus Tracker</h3>
                <span>R Shiny Application</span>
              </div>

              <div className="main_details">
                <div className="textbox">
                  <p>
                    I developed this interactive R Shiny app for the McGill
                    Men’s Basketball team to calculate individual and lineup
                    plus-minus performance. The app exports a CSV report allowing
                    coaches to analyze player combinations and individual player
                    impact.
                  </p>
                  <p>
                    The app features player selection buttons, dynamic team
                    filtering, and summary tables that automatically update
                    following each game. Designed for intuitive use by both staff
                    and analysts, it helps identify the most effective five-man
                    units under different game scenarios.
                  </p>
                </div>

                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Tech Stack</span>
                      <span>R, Shiny, dplyr, ggplot2, Excel</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>2024</span>
                    </li>
                    <li>
                      <span className="first">Links</span>
                      <span>
                        <a
                          href="https://github.com/JonahMickelson/PlusMinusApp"
                          target="_blank"
                          rel="noreferrer"
                        >
                          GitHub
                        </a>{" "}
                        |{" "}
                        <a href="#" target="_blank" rel="noreferrer">
                          Live Demo (Coming Soon)
                        </a>
                      </span>
                    </li>
                    <li>
                      <span className="first">Share</span>
                      <Social />
                    </li>
                  </ul>
                </div>
              </div>

              {/* ADDITIONAL IMAGES */}
              <div
                className="additional_images"
                style={{
                  marginTop: "30px",
                }}
              >
                <ul
                  className="gallery_zoom"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "40px",
                  }}
                >
                  {/* SHINY APP IMAGE */}
                  <li>
                    <div
                      className="list_inner"
                      style={{
                        width: "90%",
                        maxWidth: "1000px",
                        textAlign: "center",
                      }}
                    >
                      <img
                        src="/assets/img/portfolio/plus-minus-app-web.png"
                        alt="Shiny App Interface"
                        style={{
                          width: "100%",
                          height: "auto",
                          borderRadius: "8px",
                          objectFit: "contain",
                          boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
                        }}
                      />
                    </div>
                  </li>

                  {/* CSV OUTPUT IMAGE */}
                  <li>
                    <div
                      className="list_inner"
                      style={{
                        width: "90%",
                        maxWidth: "1000px",
                        textAlign: "center",
                      }}
                    >
                      <img
                        src="/assets/img/portfolio/plus-minus-app-csv.png"
                        alt="CSV Output Example"
                        style={{
                          width: "100%",
                          height: "auto",
                          borderRadius: "8px",
                          objectFit: "contain",
                          boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
                        }}
                      />
                    </div>
                  </li>
                </ul>
              </div>
              {/* END ADDITIONAL IMAGES */}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Portfolio;
