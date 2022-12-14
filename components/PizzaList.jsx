import styles from "../styles/Pizzalist.module.css";
import React from "react";

const PizzaList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita odio
        aperiam autem officia praesentium incidunt repellendus laudantium
        placeat mollitia assumenda, cumque dicta labore.
      </p>
    </div>
  );
};

export default PizzaList;
