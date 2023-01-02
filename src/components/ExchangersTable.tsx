import React, {useState} from "react";
import star from "../assets/star.svg";
import sort from "../assets/sort.svg";
const EXCHANGERS = [
  {
    id: "1",
    state:'./image/on.svg',
    name: "Шахта",
    courses: "648",
    reserv: "106 567 654",
    rate: "5,0",
    age: "2 года 6 месяцев",
    reviews: "0/10543",
  },
  {
    id: "2",
    state:'./image/on.svg',
    name: "Курсов",
    courses: "648",
    reserv: "106 567 654",
    rate: "5,0",
    age: "2 года 6 месяцев",
    reviews: "0/10543",
  },
  {
    id: "3",
    state:'./image/off.svg',
    name: "ExChange Team",
    courses: "648",
    reserv: "106 567 654",
    rate: "5,0",
    age: "2 года 6 месяцев",
    reviews: "0/10543",
  },
  {
    id: "4",
    state:'./image/off.svg',
    name: "AltCoins",
    courses: "648",
    reserv: "106 567 654",
    rate: "5,0",
    age: "2 года 6 месяцев",
    reviews: "0/10543",
  },
  {
    id: "5",
    state:'./image/off.svg',
    name: "EnergyBit",
    courses: "648",
    reserv: "106 567 654",
    rate: "5,0",
    age: "2 года 6 месяцев",
    reviews: "0/10543",
  },
  {
    id: "6",
    state:'./image/on.svg',
    name: "LowCoin",
    courses: "648",
    reserv: "106 567 654",
    rate: "5,0",
    age: "2 года 6 месяцев",
    reviews: "0/10543",
  },
  {
    id: "7",
    state:'./image/on.svg',
    name: "Change Project",
    courses: "648",
    reserv: "106 567 654",
    rate: "5,0",
    age: "2 года 6 месяцев",
    reviews: "0/10543",
  },
];
const ExchangersTable = () => {
  const [isHide, setIsHide] = useState(false)
  function hideTable(){
    setIsHide(prev => !prev)
  }
  return (
    <div className="table table__value-selected ml-40">
   <div style={isHide ? {maxHeight:'150rem', overflowY:'auto', height:'100%'} : {maxHeight:'1243rem'}} className={`table__wrapper`}>
        <div className="table__container">
          <div className="table__heading">
            <ul className="table__header">
              <li>Обменник</li>
              <li>Курсов</li>
              <li>Резерв</li>
              <li>Рейтинг</li>
              <li>Возраст</li>
              <li>Отзывы</li>
            </ul>
          </div>
          <div className="table__content">
            {EXCHANGERS.map(function (item: any, index: number) {
              return (
                <ul className="grid-6" key={index}>
                  <div>
                    <li>{item.name}</li>
                  </div>

                  <div>
                    <li>{item.courses}</li>
                  </div>

                  <div>
                    <li>$ {item.reserv}</li>
                  </div>
                  <div style={{ display: "flex" }}>
                    <li>
                      {item.rate} <img src={star} alt="star" />
                    </li>
                  </div>
                  <div>
                    <li>{item.age}</li>
                    </div>
                    <div>
                      {" "}
                      <li>{item.reviews}</li>
                    </div>
                
                  <div className="relative-list">
                    <button className="absolute-list">
                      <img src={item.state} alt="Error " />
                    </button>
                  </div>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
      <button onClick={hideTable} className={`table__hide `}>
        <img src={sort} alt="sort" />
      </button>
    </div>
  );
};

export default ExchangersTable;
