import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "photoswipe/dist/photoswipe.css";
import { ToastContainer } from "react-toastify";
import HomeLight from "./views/all-home-version/HomeLight"; // Light portfolio

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="tokyo_tm_all_wrap">
      <HomeLight />
      <ToastContainer />
    </div>
  );
};

export default App;
