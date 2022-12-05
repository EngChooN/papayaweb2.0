import BannerSlickSliderUI from "./BannerSlickSlider.presenter";

export default function BannerSlickSlider() {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return <BannerSlickSliderUI settings={settings} />;
}
