import logo from "../assets/logo.svg";
import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { setIsLoader } from "../redux/slices/loaderSlice";
import { useDispatch } from "react-redux";
const Header = () => {
  const dispatch = useDispatch();

  const [isDirection, setIsDirection] = useState(false);
  const [isNews, setIsNews] = useState(false);
  const [isPartner, setIsPartner] = useState(false);
  const [isExchanger, setIsExchanger] = useState(false);
  let location = useLocation();

  useEffect(() => {
    //* Если пользователь будет находиться в обменниках, то ссылка ведущая туда изменит свой стиль
    if (location.pathname === "/react-application-exchanger/direction") {
      setIsDirection(true);
    }
    if (location.pathname === "/react-application-exchanger/exchangers") {
      setIsExchanger(true)
    }
  }, [location]);
  function navigateToLink() {
    dispatch(setIsLoader(true));
  }
  return (
    <header className="header">
      <div className="header__wrapper">
        <Link
          to="/react-application-exchanger/"
          className="clear_link"
          onClick={navigateToLink}
        >
          <div className="header__logo">
            <img src={logo} alt="" />
          </div>
        </Link>
        <div className="header__nav">
          <ul>
            {/* // * Проверка, если пользователь перейдет по этой ссылке, то изменится стиль ссылки */}
            <NavLink
              className={() =>
                "nav-link " + (isDirection ? " selected" : "unselected")
              }
              onClick={navigateToLink}
              to="/react-application-exchanger/direction"
            >
              <li>Мониторинг</li>
            </NavLink>
            {/* // * Проверка, если пользователь перейдет по этой ссылке, то изменится стиль ссылки */}
            <NavLink
              className={() =>
                "nav-link " + (isExchanger ? " selected" : "unselected")
              }
              onClick={navigateToLink}
              to="/react-application-exchanger/exchangers"
            >
              <li>Обменники</li>
            </NavLink>
            {/* // * Проверка, если пользователь перейдет по этой ссылке, то изменится стиль ссылки */}
            <NavLink
              className={() =>
                "nav-link " + (isPartner ? " selected" : "unselected")
              }
              onClick={navigateToLink}
              to="/direction"
            >
              <li>Партнёрам</li>
            </NavLink>
            {/* // * Проверка, если пользователь перейдет по этой ссылке, то изменится стиль ссылки */}

            <NavLink
              className={() =>
                "nav-link " + (isNews ? " selected" : "unselected")
              }
              onClick={navigateToLink}
              to="/direction"
            >
              <li>Новости</li>
            </NavLink>
          </ul>
        </div>
        <div className="header__contacts">
          <ul>
            <li>Поддержка</li>
            <li>Контакты</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
