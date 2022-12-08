import Banner from "../src/component/papaya/banner/Banner";
import BannerSlickSlider from "../src/component/papaya/bannerSlickSlider/BannerSlickSlider.container";

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "100%",
        zIndex: 7,
      }}
    >
      <BannerSlickSlider />
      <Banner />
    </div>
  );
}
