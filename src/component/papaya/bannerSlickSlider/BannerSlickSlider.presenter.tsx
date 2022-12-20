import * as BannerSlickSlider from "./BannerSlickSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PropsType, SettingsProps } from "./BannerSlickSlider.types";

export default function BannerSlickSliderUI({ settings, data }: PropsType) {
  console.log("받은 데이터", data);
  return (
    <BannerSlickSlider.Wrapper>
      {data === null ? (
        <></>
      ) : (
        <BannerSlickSlider.CustomSlider {...settings}>
          {data?.map((el: any, idx: number) => (
            <BannerSlickSlider.ElWrapper key={idx} imgUrl={el.imgUrl1}>
              <BannerSlickSlider.Logo src={""} />
              <BannerSlickSlider.Title>
                {el.bannerTitle}
              </BannerSlickSlider.Title>
              <BannerSlickSlider.Content>{el.text1}</BannerSlickSlider.Content>
              <a>
                <BannerSlickSlider.Button>Learn More</BannerSlickSlider.Button>
              </a>
            </BannerSlickSlider.ElWrapper>
          ))}
        </BannerSlickSlider.CustomSlider>
      )}
    </BannerSlickSlider.Wrapper>
  );
}
