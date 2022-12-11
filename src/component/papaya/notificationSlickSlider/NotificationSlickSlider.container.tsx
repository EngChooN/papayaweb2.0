import { Settings } from "../bannerSlickSlider/BannerSlickSlider.types";
import NotificationSlickSliderUI from "./NotificationSlickSlider.presenter";

export default function NotificationSlickSlider() {
  // 슬라이더 커스텀 옵션
  const settings: Settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return <NotificationSlickSliderUI />;
}
