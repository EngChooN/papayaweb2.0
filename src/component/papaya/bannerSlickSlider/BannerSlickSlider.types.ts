export interface Settings {
  dots: boolean;
  infinite: boolean;
  arrows: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
}

export interface SettingsProps {
  settings: {
    dots: boolean;
    infinite: boolean;
    arrows: boolean;
    speed: number;
    slidesToShow: number;
    slidesToScroll: number;
  };
}
