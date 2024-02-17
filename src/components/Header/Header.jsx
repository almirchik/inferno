import "./Header.css";
import { NavLink } from "react-router-dom";
import Search from "../../../public/icons/la_search.png"
import Heart from "../../../public/icons/la_heart.png"
import Flatbed from "../../../public/icons/la_dolly-flatbed.png"
import Basket from "../Basket/Basket";
export default function Header() {
  function modal() {
    let modalka = document.getElementById("modal");
    modalka.classList.toggle("hidden");
  }
  return (
    <>
      <div className="container">

        <div className="header">

          <div className="header-items">
            <div className="header-logo-links">

              <div className="header-logo">
              <a href="">INFERNO</a>
              </div>

              <div className="header-links">
                <a href="">Главная</a>
                <NavLink to="/catalog">
                <a href="">Каталог</a>
                </NavLink>
                <a href="">Акции</a>
                <a href="">Контакты</a>
              </div>

            </div>

            <div className="header-icons">
              <img src={Search} alt="" />
              <img src={Heart} alt="" />
              <img src={Flatbed} onClick={modal} alt="" />
            </div>
            <Basket/>

          </div>

        </div>

      </div>
    </>
  );
}
