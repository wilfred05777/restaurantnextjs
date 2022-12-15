import Image from "next/image";
import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image
          src="/img/bg.png"
          alt=""
          layout="fill"
          // height={300}
          // width={300}
        />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            Oh Yes, We Did. the Pizza, Well Baked SLICE of Pizza.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANT</h1>
          <p className={styles.text}>
            1643 Anibongan Dujali Road,
            <br /> New York, 80223,
            <br /> (602) 233-4422
          </p>
          <p className={styles.text}>
            1643 Anibongan Dujali Road,
            <br /> New York, 80223,
            <br /> (602) 233-4422
          </p>
          <p className={styles.text}>
            1643 Anibongan Dujali Road,
            <br /> New York, 80223,
            <br /> (602) 233-4422
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Working Hours</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 - 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 - 18:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
