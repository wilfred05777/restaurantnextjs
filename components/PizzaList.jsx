import React from "react";
import styles from "../styles/Pizzalist.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita odio
        aperiam autem officia praesentium incidunt repellendus laudantium
        placeat mollitia assumenda, cumque dicta labore.
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
        {/* <PizzaCard />  */}
        {/* <PizzaCard />   error if having 2 component with the same name */}
      </div>
    </div>
  );
};

export default PizzaList;
