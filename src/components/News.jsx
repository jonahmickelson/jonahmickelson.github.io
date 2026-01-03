import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Social from "./Social";

Modal.setAppElement("#root");

const News = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [articleText, setArticleText] = useState("");

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    fetch("/articles/prison-outreach.txt")
      .then((res) => res.text())
      .then((text) => setArticleText(text))
      .catch((err) => console.error("Error loading article:", err));
  }, []);

  return (
    <>
      <div className="container">
        <div className="tokyo_tm_news">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>Articles & Blog</span>
                <h3>Latest Posts</h3>
              </div>
            </div>
          </div>

          <ul>
            {/* ARTICLE 1 — MODAL */}
            <li data-aos="fade-right" data-aos-duration="1200">
              <div className="list_inner">
                <div className="image" onClick={toggleModal}>
                  <img
                    src="/assets/img/news/jonah-joliette.jpg"
                    alt="Jonah at Joliette"
                  />
                  <div
                    className="main"
                    style={{
                      backgroundImage:
                        "url(/assets/img/news/jonah-joliette.jpg)",
                    }}
                  ></div>
                </div>

                <div className="details">
                  <div className="extra">
                    <p className="date">
                      By <a href="#">Jonah Mickelson</a>
                      <span>April 2025</span>
                    </p>
                  </div>

                  <h3 className="title" onClick={toggleModal}>
                    Indigenous Math Outreach in Prison: My Experience
                  </h3>

                  <div className="tokyo_tm_read_more">
                    <a onClick={toggleModal}>
                      <span>Read More</span>
                    </a>
                  </div>
                </div>

                <Modal
                  isOpen={isOpen}
                  onRequestClose={toggleModal}
                  contentLabel="Article Modal"
                  className="mymodal"
                  overlayClassName="myoverlay"
                  closeTimeoutMS={500}
                >
                  <div className="tokyo_tm_modalbox_news">
                    <button className="close-modal" onClick={toggleModal}>
                      <img src="/assets/img/svg/cancel.svg" alt="close icon" />
                    </button>

                    <div className="box_inner">
                      <div className="description_wrap scrollable">
                        <div className="image">
                          <img
                            src="/assets/img/news/jonah-joliette.jpg"
                            alt="Jonah at Joliette"
                          />
                          <div
                            className="main"
                            style={{
                              backgroundImage:
                                "url(/assets/img/news/jonah-joliette.jpg)",
                            }}
                          ></div>
                        </div>

                        <div className="details">
                          <div className="extra">
                            <p className="date">
                              By <a href="#">Jonah Mickelson</a>
                              <span>April 2025</span>
                            </p>
                          </div>
                          <h3 className="title">
                            Indigenous Math Outreach in Prison: My Experience
                          </h3>
                        </div>

                        <div className="main_content">
                          <div className="descriptions">
                            <pre
                              style={{
                                whiteSpace: "pre-wrap",
                                fontFamily: "inherit",
                                lineHeight: "1.7",
                              }}
                            >
                              {articleText}
                            </pre>
                          </div>

                          <div className="news_share">
                            <span>Share:</span>
                            <Social />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Modal>
              </div>
            </li>

            {/* ARTICLE 2 — PDF WITH ABSTRACT */}
            <li data-aos="fade-right" data-aos-duration="1200">
              <div className="list_inner">
                <div className="image">
                  <img
                    src="/assets/img/news/math-paper.jpg"
                    alt="Regression Adjustment Paper"
                  />
                  <div
                    className="main"
                    style={{
                      backgroundImage:
                        "url(/assets/img/news/math-paper.jpg)",
                    }}
                  ></div>
                </div>

                <div className="details">
                  <div className="extra">
                    <p className="date">
                      By <a href="#">Jonah Mickelson</a>
                      <span>December 2025</span>
                    </p>
                  </div>

                  <h3 className="title">
                    Regression Adjustment in Randomized Experiments: Revisiting
                    Freedman and Lin Through Simulation
                  </h3>

                  <p style={{ marginTop: "12px", lineHeight: "1.6" }}>
                    On regression adjustments to experimental data (Freedman,
                    2008) challenged the conventional belief that regression
                    adjustment automatically improves causal estimation in
                    randomized trials. Under the Neyman framework, Freedman
                    showed that while the unadjusted difference in means is
                    unbiased, regression adjustment can introduce bias and
                    increase variance in finite samples. Lin (2013) later
                    demonstrated that including treatment–covariate interaction
                    terms yields estimators that are consistent, asymptotically
                    unbiased, and never less precise than the unadjusted
                    estimator. This paper revisits both results through
                    simulation, illustrating when regression adjustment helps,
                    when it can hurt, and how fully interacted specifications
                    restore good performance.
                  </p>

                  <div className="tokyo_tm_read_more">
                    <a
                      href="/pdfs/math533-regression-adjustment.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>View PDF</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default News;
