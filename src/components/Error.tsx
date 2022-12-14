import React from "react";
import { useContext } from "react";
import AppContext from "../context";
import x from "../assets/x.svg"
import { useSelector, useDispatch } from "react-redux";
import { setisError } from "../redux/slices/errorSlice";
const Error = () => {
  const dispatch = useDispatch()
  const {isPopupError} = useSelector((state:any) => state.error)

  function hidePopupError(){
    dispatch(setisError(false))
  }
  return (
    <div className={`${isPopupError ? "overlay" : ""}`}>

   
  
      <div className={`${isPopupError ? "error" : "display-none"}`}>
        <div className="error__wrapper">
        {isPopupError ? <button onClick={hidePopupError} className="error__hide"><img src={x} alt="" /></button> : null}
          <h1 className="error__heading">Сообщите о несоответствии</h1>
          <div className="error__inputs">
            <div>
              <p>Обменник*</p>
              <input type="text" />
            </div>
            <div>
              <p>Email</p>
              <input type="text" />
            </div>
          </div>
          <div className="error__grid">
            <p>Тип несоответствия*</p>
            <ul>
              <div>
                <li>
                  Действительный курс обмена: <span>456,235767</span>
                </li>
                <li>
                  Фактический: <span>Напишите действительный курс обмена…</span>
                </li>
              </div>
            </ul>
            <ul>
              <div>
                <li>
                  Действительный резерв валюты: <span>456,235767</span>{" "}
                </li>
                <li>
                  Фактический: <span>Напишите действительный курс обмена…</span>
                </li>
              </div>
            </ul>
            <ul>
              <div>
                <li>
                  Минимальная комиссия: <span>456,235767</span>
                </li>
                <li>
                  Фактический: <span>Напишите действительный курс обмена…</span>
                </li>
              </div>
            </ul>
            <ul>
              <div>
                <li>
                  Дополнитальная комиссия: <span>456,235767</span>
                </li>
                <li>
                  Фактический: <span>Напишите действительный курс обмена…</span>
                </li>
              </div>
            </ul>
            <ul>
              <div>
                <li>
                  Действительный режим обмена: <span>456,235767</span>
                </li>
                <li>
                  Фактический: <span>Напишите действительный курс обмена…</span>
                </li>
              </div>
            </ul>
            <p>
              Возможность проведения обмена Тинькофф (USD) → Bitcoin (BTC)
              отсутствует
            </p>
          </div>
          <div className="error__commentary">
            <p>Комментарий</p>
            <textarea></textarea>
          </div>
          <div className="error__form">
            <button onClick={hidePopupError}>Отправить отчёт</button>
            <p>
              Пожалуйста, сообщайте о найденных несоответствиях курсов и
              резервов у обменников. Ваше сообщение обязательно будет проверено
              и использовано для повышения качества листинга.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
