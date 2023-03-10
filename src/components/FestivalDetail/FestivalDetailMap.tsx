import React, { useEffect } from "react";

interface Props {
  x: string;
  y: string;
}

declare const kakao: any;

const FestivalDetailMap = ({ x, y }: Props) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=3ce708fa0356f47db6466f9d49fcfdb0&autoload=false";
    document.head.appendChild(script);
    script.onload = () => {
      kakao.maps.load(() => {
        const container = document.getElementById("Mymap");
        const options = {
          center: new kakao.maps.LatLng(y, x),
          level: 6,
        };

        const map = new kakao.maps.Map(container, options);
        const markerPosition = new kakao.maps.LatLng(y, x);
        const marker = new kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      });
    };
  }, [x, y]);

  return <div id="Mymap" style={{ width: "100%", height: "300px" }} />;
};

export default FestivalDetailMap;
