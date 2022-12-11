import Banner from "../src/component/papaya/banner/Banner";
import BannerSlickSlider from "../src/component/papaya/bannerSlickSlider/BannerSlickSlider.container";
import styled from "@emotion/styled";
import NotificationSlickSlider from "../src/component/papaya/notificationSlickSlider/NotificationSlickSlider.container";

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
  z-index: 7;
`;

const Content = styled.section`
  padding-left: 20px;
  padding-right: 20px;
`;

export default function Home() {
  return (
    <Wrapper>
      <BannerSlickSlider />
      <NotificationSlickSlider />
      <Content>
        <Banner />
      </Content>
    </Wrapper>
  );
}
