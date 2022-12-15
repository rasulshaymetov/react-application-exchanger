import React from "react";
import { useState } from "react";
import dropdown from "../assets/dropdown.svg";
import { IAbout } from "../models/models";
const About = () => {
  const [isDropdown, setIsDropdown] = useState("0");
  function openDropdown(e: any) {
    isDropdown === e.id ? setIsDropdown("0") : setIsDropdown(e.id);
  }
  const ABOUT: Array<IAbout> = [
    {
      title: "Об агрегаторе",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus atque beatae modi optio inventore obcaecati dolore illorepudiandae itaque at.",
      id: "1",
    },
    {
      title: "Онлайн заявка на обмен",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus atque beatae modi optio inventore obcaecati dolore illorepudiandae itaque at.",
      id: "2",
    },
    {
      title: "Как работать с нашим меню",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus atque beatae modi optio inventore obcaecati dolore illorepudiandae itaque at.",
      id: "3",
    },
  ];
  return (
    <div className="about container">
      <div className="about__wrapper">
        {ABOUT.map(function (item) {
          return (
            <div key={item.title} className="about__container">
              <h1 id={item.id} onClick={(e) => openDropdown(e.target)}>
                {item.title}
              </h1>
              <p
                className={`${isDropdown !== item.id ? "visible-none" : null}`}
              >
                {item.text}
              </p>
              <img
                id={item.id}
                onClick={(e) => openDropdown(e.target)}
                className={`${
                  isDropdown === item.id ? "rotate-dropdown" : null
                }`}
                src={dropdown}
                alt=""
              />
            </div>
          );
        })}

      </div>
    </div>
  );
};

export default About;
