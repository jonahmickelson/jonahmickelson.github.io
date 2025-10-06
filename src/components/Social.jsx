import React from "react";

const SocialShare = [
  {
    iconName: "linkedin",
    link: "https://www.linkedin.com/in/jonah-mickelson-074071139/",
  },
  {
    iconName: "github",
    link: "https://github.com/jonahmickelson",
  },
  {
    iconName: "strava",
    link: "https://www.strava.com/athletes/88358065",
  },
  {
    iconName: "goodreads",
    link: "https://www.goodreads.com/user/show/162016713-jonah-mickelson",
  },
];

const Social = () => {
  return (
    <>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={val.link} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/assets/img/svg/social/${val.iconName}.svg`}
                alt={val.iconName}
              />
            </a>
          </li>
        ))}
      </ul>
      {/* END SOCIAL */}
    </>
  );
};

export default Social;
