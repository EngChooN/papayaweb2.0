import BannerSlickSliderUI from "./BannerSlickSlider.presenter";
import { Settings } from "./BannerSlickSlider.types";

export default function BannerSlickSlider() {
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
