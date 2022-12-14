import Image from "next/image";
import React from "react";

import styles from "../styles/Featured.module.css";

const Featured = () => {
  const images = [
    "/img/featured.png",
    "/img/featured2.png",
    "/img/featured3.png"
  ];

  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0 }}>
        {/* <Image src="/img/arrowl.png" alt="" width={34} height={34} /> */}
        <Image src="/img/arrowl.png" alt="" layout="fill" objectFit="contain" />
      </div>

      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          {images.map((img, i) => (
            // <Image src={img} key={i} alt="" width={1080} height={780} />
            <Image src={img} key={i} alt="" layout="fill" objectFit="contain" />
          ))}
        </div>
      </div>

      <div className={styles.arrowContainer} style={{ right: 0 }}>
        {/* <Image src="/img/arrowr.png" width={34} height={34} alt="" /> */}
        <Image src="/img/arrowr.png" alt="" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};

export default Featured;
