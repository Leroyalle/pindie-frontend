import Link from "next/link";
import { Card } from "../Card/Card";
import Styles from "./CardsListSection.module.css";

export const CardsList = (props) => {
  return (
    <ul className={Styles["list"]}>
      {props.data.map((item) => {
        return (
          <li className={Styles["item"]} key={item.id}>
            <Link href={`/games/${item.id}`} className={Styles["link"]}>
              <Card {...item} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
