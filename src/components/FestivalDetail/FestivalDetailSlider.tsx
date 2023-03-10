import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import FestivalService from "../../service/FesitvalService";
import FestivalDetailImg from "./FestivalDetailImage";

const FestivalDetailSlider = () => {
  const { id } = useParams();
  const [images, setImages] = useState<FestivalDetailImage[]>([]);

  // slick 슬라이더 세팅값
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  //

  useEffect(() => {
    (async () => {
      if (!id) return;
      const { response } = await FestivalService.getDetailImage(id);
      setImages(response.body.items.item);
    })();
  }, [id]);

  return (
    <Slider {...settings}>
      {images.map((image) => (
        <FestivalDetailImg key={image.serialnum} image={image} />
      ))}
    </Slider>
  );
};

export default FestivalDetailSlider;
