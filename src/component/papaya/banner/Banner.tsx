import styled from "@emotion/styled";

const Wrapper = styled.section`
  margin-bottom: 6.9rem;
  max-width: 1221px;
  width: 100%;
  max-height: 33.2rem;
  height: 330px;
  margin-top: 7rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  z-index: 8;
  background-color: #f1f2f6;
  border-radius: 10px 0px 0px 10px;
`;

const Left = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 100px;
  position: relative;
`;

const LeftImg = styled.img`
  position: absolute;
  bottom: 0px;
  right: 80px;
  max-width: 276px;
  width: 100%;
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: 600;
  color: #464646;
  z-index: 1;
`;

const Content = styled.div`
  font-size: 16px;
  color: #464646;
  z-index: 1;
`;

const Btn = styled.div`
  margin-top: 1.9rem;
  width: 174px;
  height: 36px;
  border-radius: 100px;
  background-color: #29b06d;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const Right = styled.div`
  /* width: 30%; */
  width: 365px;
  min-width: 365px;
  display: flex;
  flex-direction: column;
  background-color: #1e2023;
  padding: 20px 40px;
  border-radius: 0px 10px 10px 0px;
`;

const Tap = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
`;

const TapTitle = styled.div`
  width: 100%;
  margin-bottom: 15px;
  font-size: 16px;
  font-weight: 700;
`;

const TapTitleLink = styled.a`
  width: 100%;
  margin-bottom: 15px;
  font-size: 16px;
  font-weight: 700;
  :hover {
    text-decoration: underline;
  }
`;

const TapLists = styled.div`
  width: 100%;
  margin-bottom: 15px;
  display: flex;
  flex-wrap: wrap;
`;

const TapList = styled.a`
  font-size: 12px;
  width: 111px;
  margin-bottom: 10px;
  margin-right: 19px;
  :hover {
    text-decoration: underline;
  }
`;

const BottomSection = styled.div`
  display: flex;
`;

export default function Banner() {
  return (
    <Wrapper>
      <Left>
        <Title>Create a free account</Title>
        <Content>Have access to our Free Games</Content>
        <Btn>Join for Free</Btn>
        <LeftImg src="https://static.papayaplay.com/static/assets/images/portal/gnb/2021_new/character_before_login.png" />
      </Left>
      <Right>
        <Tap>
          <TapTitle>GAME</TapTitle>
          <TapLists>
            <TapList href="">Echo Of Soul</TapList>
            <TapList href="">BlackShot SEA</TapList>
            <TapList href="">BlackShot GLB</TapList>
            <TapList href="">Nine Dragons</TapList>
            <TapList href="">4Story</TapList>
            <TapList href="">Uncharted Waters Online</TapList>
            <TapList href="">La Tale</TapList>
            <TapList href="">War Rock</TapList>
          </TapLists>
        </Tap>
        <BottomSection>
          <Tap>
            <TapTitle>MY PAGE</TapTitle>
            <TapLists>
              <TapList href="">Sign in</TapList>
              <TapList href="">My Account</TapList>
              <TapList href="">Transaction History</TapList>
              <TapList href="">Notifications</TapList>
            </TapLists>
          </Tap>
          <Tap>
            <TapTitleLink href="">CASHSHOP</TapTitleLink>
            <TapTitleLink href="">FORUM</TapTitleLink>
            <TapTitleLink href="">SUPPORT</TapTitleLink>
          </Tap>
        </BottomSection>
      </Right>
    </Wrapper>
  );
}
