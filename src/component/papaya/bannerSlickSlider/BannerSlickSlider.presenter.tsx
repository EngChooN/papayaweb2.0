import * as BannerSlickSlider from "./BannerSlickSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BannerSlickSliderUI({ settings }: any) {
  const testImg =
    "https://cdn.papayaplay.com/SF/1620/1740/2601/home_slider.jpeg";
  return (
    <BannerSlickSlider.Wrapper>
      <BannerSlickSlider.CustomSlider {...settings}>
        <BannerSlickSlider.ElWrapper testImg={testImg}>
          <div>1</div>
        </BannerSlickSlider.ElWrapper>
        <BannerSlickSlider.ElWrapper>
          <div>2</div>
        </BannerSlickSlider.ElWrapper>
        <BannerSlickSlider.ElWrapper>
          <div>3</div>
        </BannerSlickSlider.ElWrapper>
      </BannerSlickSlider.CustomSlider>
    </BannerSlickSlider.Wrapper>
  );
}
