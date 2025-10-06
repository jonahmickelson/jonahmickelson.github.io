import React, { useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import Home from "../../components/Home";
import About from "../../components/about/AboutMain";
import Portfolio from "../../components/PortfolioCreative";
import News from "../../components/News";
import Contact from "../../components/Contact";
import PageTitle from "../../components/PageTitle";

const HomeLight = () => {
  useEffect(() => {
    // Always stay in light mode
    document.body.classList.remove("dark");
  }, []);

  return (
    <>
      <PageTitle title="Home Regular" />
      {/* End page title for SEO */}

      <Tabs>
        <TabList>
          {/* START LEFT MENU CONTENT */}
          <div className="leftpart">
            <div className="leftpart_inner">
              {/* LOGO SECTION */}
              <div className="logo">
                <Link className="navbar-brand" to="/">
                  <img
                    src="/assets/img/logo/jonah-logo.png"
                    alt="Jonah Mickelson Logo"
                    style={{
                      width: "130px",
                      height: "auto",
                      maxWidth: "100%",
                    }}
                  />
                </Link>
              </div>
              {/* END LOGO */}

              {/* MENU */}
              <div className="menu">
                <ul>
                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/home-run.svg"
                      alt="homerun"
                    />
                    <span className="menu_content">Home</span>
                  </Tab>

                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/avatar.svg"
                      alt="avatar"
                    />
                    <span className="menu_content">About</span>
                  </Tab>

                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/briefcase.svg"
                      alt="briefcase"
                    />
                    <span className="menu_content">Portfolio</span>
                  </Tab>

                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/paper.svg"
                      alt="paper"
                    />
                    <span className="menu_content">Articles & Blog</span>
                  </Tab>

                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/mail.svg"
                      alt="mail"
                    />
                    <span className="menu_content">Contact</span>
                  </Tab>
                </ul>
              </div>
              {/* END MENU */}
            </div>
          </div>
          {/* END LEFT MENU CONTENT */}
        </TabList>
        {/* END SIDEBAR TABLIST */}

        {/* START RIGHT PART CONTENT */}
        <div className="rightpart">
          <div className="rightpart_in">
            <div className="tokyo_tm_section">
              <TabPanel>
                <div data-aos="fade-right" data-aos-duration="1200">
                  <Home />
                </div>
              </TabPanel>
              {/* END HOME MENU TAB CONTENT */}

              <TabPanel>
                <div
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  <About />
                </div>
              </TabPanel>
              {/* END ABOUT MENU TAB CONTENT */}

              <TabPanel>
                <Portfolio />
              </TabPanel>
              {/* END PORTFOLIO MENU TAB CONTENT */}

              <TabPanel>
                <News />
              </TabPanel>
              {/* END ARTICLES & BLOG MENU TAB CONTENT */}

              <TabPanel>
                <div
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <Contact />
                </div>
              </TabPanel>
              {/* END CONTACT MENU TAB CONTENT */}
            </div>
          </div>
        </div>
        {/* END RIGHT PART CONTENT */}
      </Tabs>
      {/* END TABS */}
    </>
  );
};

export default HomeLight;
