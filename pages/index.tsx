import Banner from "../src/component/papaya/banner/Banner";
import BannerSlickSlider from "../src/component/papaya/bannerSlickSlider/BannerSlickSlider.container";
import styled from "@emotion/styled";

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
  z-index: 7;
`;

const Content = styled.section`
  padding-left: 120px;
  padding-right: 120px;
`;

export default function Home() {
  return (
    <Wrapper>
      <BannerSlickSlider />
      <Content>
        <Banner />
      </Content>
    </Wrapper>
  );
}
