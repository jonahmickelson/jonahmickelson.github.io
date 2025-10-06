import React from "react";

const Skills = () => {
  const skillsContent = [
    {
      id: 1,
      colClass: "left",
      title: "Programming Skills",
      skills: [
        "Python",
        "R",
        "Git & GitHub",
        "VBA (Excel)",
        "JavaScript (basic)",
        "HTML / CSS",
      ],
    },
    {
      id: 2,
      colClass: "right",
      title: "Data & Analytics Skills",
      skills: [
        "pandas",
        "NumPy",
        "scikit-learn",
        "Matplotlib",
        "ggplot2",
        "dplyr & tidyr",
        "Shiny",
        "Power BI",
        "Excel",
      ],
    },
  ];

  return (
    <>
      {skillsContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_section_title">
            <h3>{item.title}</h3>
          </div>

          <ul className="tokyo_tm_skill_list">
            {item.skills.map((skill, index) => (
              <li key={index}>
                <div className="list_inner">
                  <span>{skill}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Skills;
