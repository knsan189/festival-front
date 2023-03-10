import React from "react";
import styles from "./FestivalDetailImage.module.css";

interface Props {
  image: FestivalDetailImage;
}
const FestivalDetailImage = ({ image }: Props) => {
  // URL http -> https로 변환
  const imgUrlChange = image.originimgurl && image.originimgurl.replace("http", "https");

  return (
    <div
      className={styles.content}
      style={{
        background: `url( ${imgUrlChange}) center`,
        backgroundSize: "cover",
      }}
    />
  );
};

export default FestivalDetailImage;
