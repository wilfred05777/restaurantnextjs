import Image from "next/image";
import React from "react";
import styles from "../styles/PizzaCard.module.css";

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.img}
        src="/img/pizza.png"
        alt=""
        width={500}
        height={500}
      />
      <h1 className={styles.title}>FOIRI DI ZUCCA</h1>
      <span className={styles.price}>$19.90</span>
      <p className={styles.dec}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default PizzaCard;
