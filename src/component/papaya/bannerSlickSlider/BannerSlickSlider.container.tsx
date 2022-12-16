import BannerSlickSliderUI from "./BannerSlickSlider.presenter";
import { Settings } from "./BannerSlickSlider.types";
import { useState, useEffect } from "react";

// test
import axios from "axios";
export default function BannerSlickSlider() {
  // test
  useEffect(() => {
    console.log("데이터 가져올게~");
    axios.get("http://10.0.1.78:8080/portal/main/banner").then((res) => {
      console.log("배너 슬라이더 데이터", res);
    });
  }, []);

  // 슬라이더 커스텀 옵션
  const settings: Settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return <BannerSlickSliderUI settings={settings} />;
}
