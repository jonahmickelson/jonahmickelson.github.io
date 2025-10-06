import React from "react";

const Intro = () => {
  const introContent = {
    image: "/assets/img/slider/jonah-bw-head.jpg", // <-- update with your photo filename
    name: "Jonah Mickelson",
    designation: "Statistics Student & Analyst",
    text: (
      <>
        <p>
          I was born and raised in the Annex, one of the oldest neighbourhoods
          in Toronto. From an early age I was drawn to numbers, puzzles, and
          competition—perhaps because learning was in the air with my proximity
          to the University of Toronto. Playing and competing in chess from the
          age of 7 complemented my keen interest and proficiency in mathematics,
          while shows like <i>Dragon’s Den</i> and books such as <i>The Wealthy
          Barber</i> and <i>The Intelligent Investor</i> kickstarted my passion
          for investing.
        </p>
        <p>
          My passion for quantitative analysis led me to pursue a Bachelor of
          Arts in Statistics at McGill University, where I’ve built strong
          foundations in probability, statistical modeling, and machine
          learning. I’ve applied these skills in both professional and athletic
          contexts: during internships at Romspen Investment Corporation and
          Environics Analytics, I developed value-at-risk models for USD/CAD
          forward contracts, built tools for portfolio risk analysis, and worked
          with geodemographic datasets to deliver insights for major Canadian
          clients. At McGill, I have also applied the same analytical mindset to
          sports, building basketball prediction models and developing tools to
          track live plus-minus performance and shot-chart visualizations for
          the McGill Men’s Basketball Team. These combined experiences have
          reinforced my interest in trading, quantitative research, and
          data-driven decision-making.
        </p>
        <p>
          Outside of academics and finance, I’m an avid athlete. I compete in
          road cycling with the Bateman’s Cycling Team, and I also enjoy the
          strategy and focus of playing poker. Whether on the bike, at the poker
          table, or in data projects, I bring the same drive to continuously
          improve, push limits, and approach challenges with focus and
          creativity.
        </p>
      </>
    ),
  };

  return (
    <>
      <div className="top_author_image">
        <img src={introContent.image} alt="about" />
      </div>
      <div className="about_title">
        <h3>{introContent.name}</h3>
        <span>{introContent.designation}</span>
      </div>
      <div className="about_text">{introContent.text}</div>
    </>
  );
};

export default Intro;
