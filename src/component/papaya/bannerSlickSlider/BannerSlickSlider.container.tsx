import BannerSlickSliderUI from "./BannerSlickSlider.presenter";
import { Settings } from "./BannerSlickSlider.types";
import { useState, useEffect } from "react";
import axios from "axios";

export default function BannerSlickSlider() {
  useEffect(() => {
    loadBannerSliderData();
  }, []);

  // 홈 슬라이더 배너 데이터 호출
  const loadBannerSliderData = async () => {
    await axios({
      method: "get",
      url: "/portal/main/banner",
    })
      .then((res) => {
        console.log("res", res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [data, setData] = useState(null);

  // 슬라이더 커스텀 옵션
  const settings: Settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return <BannerSlickSliderUI settings={settings} data={data} />;
}
