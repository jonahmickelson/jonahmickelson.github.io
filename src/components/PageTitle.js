import React from "react";
import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>
        {title
          ? `${title} | Jonah Mickelson`
          : "Jonah Mickelson"}
      </title>
    </Helmet>
  );
};

export default PageTitle;
