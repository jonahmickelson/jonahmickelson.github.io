import React from "react";

const PersonalInfo = () => {
  const personalInfoContent = [
    {
      id: 1,
      colClass: "left",
      info: [
        {
          id: 1,
          name: "Birthday",
          content: "02.07.2003",
        },
        {
          id: 2,
          name: "Age",
          content: "22",
        },
        {
          id: 3,
          name: "Address",
          content: "169 Howland Ave, Toronto, ON",
        },
        {
          id: 4,
          name: "Email",
          content: (
            <>
              <a href="jonah.mickelson@gmail.com">jonah.mickelson@gmail.com</a>
            </>
          ),
        },
        {
          id: 5,
          name: "Phone",
          content: (
            <>
              <a href="tel:+1 647 459 3467">+1 647 459 3467</a>
            </>
          ),
        },
      ],
    },
    {
      id: 2,
      colClass: "right",
      info: [
        {
          id: 1,
          name: "Nationality",
          content: "Canadian",
        },
        {
          id: 2,
          name: "Study",
          content: "McGill University",
        },
        {
          id: 3,
          name: "Degree",
          content: "Bachelors",
        },
        {
          id: 4,
          name: "Interest",
          content: "Playing Football",
        },
        {
          id: 5,
          name: "Freelance",
          content: "Available",
        },
      ],
    },
  ];
  return (
    <>
      {personalInfoContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_tm_info">
            <ul>
              {item?.info?.map((value) => (
                <li key={value.id}>
                  <span>{value.name}:</span>
                  <span>{value.content}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default PersonalInfo;
