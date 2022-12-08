import * as BannerSlickSlider from "./BannerSlickSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SettingsProps } from "./BannerSlickSlider.types";

export default function BannerSlickSliderUI({ settings }: SettingsProps) {
  return (
    <BannerSlickSlider.Wrapper>
      <BannerSlickSlider.CustomSlider {...settings}>
        <BannerSlickSlider.ElWrapper>
          <BannerSlickSlider.Logo src={""} />
          <BannerSlickSlider.Title>Title</BannerSlickSlider.Title>
          <BannerSlickSlider.Content>Content</BannerSlickSlider.Content>
          <a>
            <BannerSlickSlider.Button>Button</BannerSlickSlider.Button>
          </a>
        </BannerSlickSlider.ElWrapper>
        <BannerSlickSlider.ElWrapper>
          <BannerSlickSlider.Logo src={""} />
          <BannerSlickSlider.Title>Title</BannerSlickSlider.Title>
          <BannerSlickSlider.Content>Content</BannerSlickSlider.Content>
          <a>
            <BannerSlickSlider.Button>Button</BannerSlickSlider.Button>
          </a>
        </BannerSlickSlider.ElWrapper>
      </BannerSlickSlider.CustomSlider>
    </BannerSlickSlider.Wrapper>
  );
}
