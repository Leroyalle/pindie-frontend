"use client";
import Styles from "./Header.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { AuthContext } from "@/app/context/app-context";
import Link from "next/link";
import { Popup } from "../Popup/Popup";
import { Overlay } from "../Overlay/Overlay";
import { AuthForm } from "../AuthForm/AuthForm";
import { useStore } from "../../store/app-store";
export const Header = () => {
  const [popupIsOpened, setPopupIsOpened] = useState(false);
  const pathname = usePathname();
  const authContext = useStore();

  const openPopup = () => {
    setPopupIsOpened(true);
  };
  const closePopup = () => {
    setPopupIsOpened(false);
  };
  const handleLogout = () => {
    authContext.logout();
  };
  return (
    <header className={Styles["header"]}>
      {pathname === "/" ? (
        <div className={Styles["logo"]}>
          <img
            className={Styles["logo__image"]}
            src="/images/logo.svg"
            alt="Логотип Pindie"
          />
        </div>
      ) : (
        <Link href="/" className={Styles["logo"]}>
          <img
            className={Styles["logo__image"]}
            src="/images/logo.svg"
            alt="Логотип Pindie"
          />
        </Link>
      )}
      <nav className={Styles["menu"]}>
        <ul className={Styles["menu__list"]}>
          <li className={Styles["menu__item"]}>
            <Link
              href="/new"
              className={`${Styles["menu__link"]} ${
                pathname === "/new" ? Styles["menu__link_active"] : ""
              }`}
            >
              Новинки
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link
              href="/popular"
              className={`${Styles["menu__link"]} ${
                pathname === "/popular" ? Styles["menu__link_active"] : ""
              }`}
            >
              Популярные
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link
              href="/shooters"
              className={`${Styles["menu__link"]} ${
                pathname === "/shooters" ? Styles["menu__link_active"] : ""
              }`}
            >
              Шутеры
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link
              href="/runners"
              className={`${Styles["menu__link"]} ${
                pathname === "/runners" ? Styles["menu__link_active"] : ""
              }`}
            >
              Ранеры
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link
              href="/pixel-games"
              className={`${Styles["menu__link"]} ${
                pathname === "/pixel-games" ? Styles["menu__link_active"] : ""
              }`}
            >
              Пиксельные
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link
              href="/tds"
              className={`${Styles["menu__link"]} ${
                pathname === "/tds" ? Styles["menu__link_active"] : ""
              }`}
            >
              TDS
            </Link>
          </li>
        </ul>
        <div className={Styles["auth"]}>
          {authContext.isAuth ? (
            <button className={Styles["auth__button"]} onClick={handleLogout}>
              Выйти
            </button>
          ) : (
            <button className={Styles["auth__button"]} onClick={openPopup}>
              Войти
            </button>
          )}
        </div>
        <Overlay close={closePopup} isOpened={popupIsOpened} />
        <Popup close={closePopup} isOpened={popupIsOpened}>
          <AuthForm
            close={closePopup}
            // setAuth={setIsAuthorised}
          />
        </Popup>
      </nav>
    </header>
  );
};
