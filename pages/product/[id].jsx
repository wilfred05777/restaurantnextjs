import Image from "next/image";
import React from "react";
import styles from "../../styles/Product.module.css";

const Product = () => {
  const pizza = {
    id: 1,
    img: "/img/pizza.png",
    name: "CAMPAGNOLA",
    price: [19.9, 23.9, 27.9],
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad praesentium quibusdam soluta atque labore veniam magni? Nihil ea officia, molestias voluptatem, nesciunt, repudiandae mollitia libero inventore commodi accusantium unde earum?"
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}></div>
        <Image src={pizza.img} layout="fill" alt="" />
      </div>
      <div className="styles right"></div>
    </div>
  );
};

export default Product;
