import React from "react";
import Header from "../Header";
import Aside from "../Aside";
import Footer from "../Footer";
import Search from "../Search";
import DirectionAside from "../DirectionAside";
import Table from "../Table";
import About from "../About";
import More from "../More";
import Error from "../Error";
import AppContext from "../../context";
import {useState} from "react"

const Direction = () => {
  const [isError, setIsError] = useState(false);
  return (
    <>
      {/* <div className="overlay"> */}
        <AppContext.Provider
        value={{
          isError, setIsError
        }}>
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
        
        <Footer />
        <Error />
        </AppContext.Provider>
      {/* </div> */}
    </>
  );
};

export default Direction;
