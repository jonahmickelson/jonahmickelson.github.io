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
    // Load full article text from public folder
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
            <li data-aos="fade-right" data-aos-duration="1200">
              <div className="list_inner">
                {/* PREVIEW IMAGE */}
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

                {/* POST DETAILS */}
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

                {/* MODAL START */}
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
                        {/* MODAL IMAGE */}
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

                        {/* HEADER DETAILS */}
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

                        {/* MAIN CONTENT */}
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
                {/* MODAL END */}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default News;
