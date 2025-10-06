import React from "react";

const Resume = () => {
  const resumeContent = [
    {
      id: 1,
      colClass: "left",
      title: "Education",
      resume: [
        {
          id: 1,
          year: "2022 - 2025",
          institute: "McGill University, Montreal, QC",
          degree:
            "B.A. Statistics (Major Concentration) – Expected Dec 2025",
        },
      ],
    },
    {
      id: 2,
      colClass: "right",
      title: "Experience",
      resume: [
        {
          id: 1,
          year: "May 2025 - Sep 2025",
          institute: "Environics Analytics, Toronto, ON",
          degree: "Data Analyst Intern",
        },
        {
          id: 2,
          year: "May 2024 - Sep 2024",
          institute: "Romspen Investment Corporation, Toronto, ON",
          degree: "Junior Analyst - Intern",
        },
        {
          id: 3,
          year: "Sep 2023 - Mar 2025",
          institute: "McGill Men’s Basketball Team, Montreal, QC",
          degree: "Statistical Analyst",
        },
        {
          id: 4,
          year: "May 2022 - May 2025",
          institute: "McGill Chess Club, Montreal, QC",
          degree: "Vice President of Finance",
        },
        {
          id: 5,
          year: "Feb 2022 - Apr 2024",
          institute: "Open-Door Drop-In Centre, Montreal, QC",
          degree: "Volunteer",
        },
      ],
    },
  ];

  return (
    <>
      {resumeContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_section_title">
            <h3>{item.title}</h3>
          </div>
          <div className="tokyo_tm_resume_list">
            <ul>
              {item?.resume?.map((value) => (
                <li key={value.id}>
                  <div className="list_inner">
                    <div className="time">
                      <span>{value.year}</span>
                    </div>
                    <div className="place">
                      <h3>{value.institute}</h3>
                      <span>{value.degree}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default Resume;
