import React from "react";
import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>Jonah Mickelson</title>
    </Helmet>
  );
};

export default PageTitle;
