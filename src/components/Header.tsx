import logo from "../assets/logo.svg";
const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          <img src={logo} alt="" />
        </div>
        <div className="header__nav">
          <ul>        
            <li>Мониторинг</li>
            <li>Обменники</li>
            <li>Партнёрам</li>
            <li>Новости</li>
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
