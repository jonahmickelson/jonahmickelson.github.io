import React from "react";

const KnowledgeInterest = () => {
  const interestsContent = [
    {
      id: 1,
      colClass: "left",
      title: "Involvements",
      content: [
        "Bateman’s Cycling Team",
        "McGill University Chess Team",
        "Wychwood Tennis Club — Board Nominee",
      ],
    },
    {
      id: 2,
      colClass: "right",
      title: "Interests",
      content: [
        "Financial Markets and Quantitative Finance",
        "Sports Analytics and Data Visualization",
        "Chess, Poker, and Game Theory",
        "Rugby, Cycling, and Basketball",
      ],
    },
  ];

  return (
    <>
      {interestsContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_section_title">
            <h3>{item.title}</h3>
          </div>
          <div className="tokyo_tm_skill_list">
            <ul>
              {item.content.map((val, i) => (
                <li key={i}>
                  <span>
                    <img
                      className="svg"
                      src="assets/img/svg/rightarrow.svg"
                      alt="arrow"
                    />
                    {val}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default KnowledgeInterest;
