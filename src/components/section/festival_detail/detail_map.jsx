/*global kakao*/
import React, { useEffect } from 'react';

const DetailMap = ({mapx, mapy}) => {
    useEffect(()=>{

        const script = document.createElement("script");
        script.async = true;
        script.src ="https://dapi.kakao.com/v2/maps/sdk.js?appkey=3ce708fa0356f47db6466f9d49fcfdb0&autoload=false";
        document.head.appendChild(script);

        script.onload = () => {
        kakao.maps.load(() => {
            let container = document.getElementById("Mymap");
            let options = {
                center: new kakao.maps.LatLng(mapy, mapx),
                level: 6
            };

        const map = new window.kakao.maps.Map(container, options);
        const markerPosition  = new window.kakao.maps.LatLng(mapy, mapx); 
        const marker = new window.kakao.maps.Marker({
            position: markerPosition
        });
        marker.setMap(map);

      })
    }
    }, [mapx, mapy])

    return(
            <div id="Mymap" style={{width:'100%', height:'300px'}}></div>
    );}

export default DetailMap;