import React, {useEffect} from "react";
import DirectionAside from "../DirectionAside";
import ExchangersInput from "../ExchangersInput";
import Header from "../Header";
import Table from "../Table";
import { setIsLoader } from "../../redux/slices/loaderSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";

const Exchangers = () => {
  const {isLoader} = useSelector((state:any) => state.loader)
  const dispatch = useDispatch()
  useEffect(() => {
    if (isLoader === true) {
      setTimeout(() => {
        dispatch(setIsLoader(false));
      }, 1500);
    }
  }, [isLoader]); 
  return (
    <>
      <Header />
    {isLoader ? <Loader /> :   <div className="main__wrapper">
        <div className="main__container">
          <div  className="aside">
            <div className="aside__container">
              <div
                style={{ paddingBottom: "40rem", paddingTop: "25rem" }}
                className="aside__wrapper"
              >
                <div className="aside__block">
                  <ul>
                    <div>
                      <li>Все обменники</li>
                    </div>
                    <div>
                      <li>Статистика</li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="div">
          <ExchangersInput/>
          <Table/>
          </div>
  
        </div>
      </div>}
    </>
  );
};

export default Exchangers;
