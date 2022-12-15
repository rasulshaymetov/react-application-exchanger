import React from "react";
import Header from "../Header";
import Aside from "../Aside";
import Footer from "../Footer";
import Search from "../Search";
import DirectionAside from "../DirectionAside";
import Table from "../Table";
import About from "../About";
import More from "../More";

const Direction = () => {
  return (
    <>
      {" "}
      {/* <div className="main"> */}
        <Header />
        <div className="main__wrapper">
          <div className="main__container">
            <DirectionAside />
            <div className="main__content">
              <Search />
              <Table />
              <About />
              <More />
            </div>
          </div>
        </div>
      {/* </div> */}
      <Footer />
    </>
  );
};

export default Direction;
