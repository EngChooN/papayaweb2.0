import Banner from "../src/component/papaya/banner/Banner";
import BannerSlickSlider from "../src/component/papaya/bannerSlickSlider/BannerSlickSlider.container";
import styled from "@emotion/styled";
import NotificationSlickSlider from "../src/component/papaya/notificationSlickSlider/NotificationSlickSlider.container";
import GameList from "../src/component/papaya/gameList/GameList.container";

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 100%;
  z-index: 7;
`;

const Content = styled.section`
  padding-left: 20px;
  padding-right: 20px;
  max-width: 1450px;
  width: 100%;
`;

export default function Home() {
  return (
    <Wrapper>
      <BannerSlickSlider />
      <NotificationSlickSlider />
      <Content>
        <GameList />
        <Banner />
      </Content>
    </Wrapper>
  );
}
