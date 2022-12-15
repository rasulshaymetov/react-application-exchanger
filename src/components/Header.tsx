import logo from "../assets/logo.svg";
import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
const Header = () => {
  const [isDirection, setIsDirection] = useState(false);
  const [isNews, setIsNews] = useState(false);
  const [isPartner, setIsPartner] = useState(false);
  const [isExchanger, setIsExchanger] = useState(false);
  let location = useLocation();

  useEffect(() => {
    //* Если пользователь будет находиться в обменниках, то ссылка ведущая туда изменит свой стиль
    if (location.pathname === "/direction") {
      setIsDirection(true);
    }
  }, [location]);

  return (
    <header className="header">
      <div className="header__wrapper">
        <Link to="/" className="clear_link">
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
              to="/direction"
            >
              <li>Мониторинг</li>
            </NavLink>
            {/* // * Проверка, если пользователь перейдет по этой ссылке, то изменится стиль ссылки */}
            <NavLink
              className={() =>
                "nav-link " + (isExchanger ? " selected" : "unselected")
              }
              to="/direction"
            >
              <li>Обменники</li>
            </NavLink>
            {/* // * Проверка, если пользователь перейдет по этой ссылке, то изменится стиль ссылки */}
            <NavLink
              className={() =>
                "nav-link " + (isPartner ? " selected" : "unselected")
              }
              to="/direction"
            >
              <li>Партнёрам</li>
            </NavLink>
            {/* // * Проверка, если пользователь перейдет по этой ссылке, то изменится стиль ссылки */}

            <NavLink
              className={() =>
                "nav-link " + (isNews ? " selected" : "unselected")
              }
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
