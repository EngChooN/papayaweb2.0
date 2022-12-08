import styled from "@emotion/styled";

const Wrapper = styled.section`
  margin-bottom: 6.9rem;
  width: 100%;
  max-width: 148rem;
  max-height: 33.2rem;
  margin-top: 7rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  border: 3px solid red;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div``;

const Content = styled.div``;

const Btn = styled.div``;

const Right = styled.div`
  display: flex;
  flex-direction: column;
`;

const Tap = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const TapTitle = styled.div``;

const TapList = styled.div``;

const BottomSection = styled.div`
  display: flex;
`;

export default function Banner() {
  return (
    <Wrapper>
      <Left>
        <Title></Title>
        <Content></Content>
        <Btn></Btn>
      </Left>
      <Right>
        <Tap>
          <TapTitle></TapTitle>
          <TapList></TapList>
        </Tap>
        <BottomSection>
          <Tap>
            <TapTitle></TapTitle>
            <TapList></TapList>
          </Tap>
          <Tap>
            <TapTitle></TapTitle>
            <TapTitle></TapTitle>
            <TapTitle></TapTitle>
          </Tap>
        </BottomSection>
      </Right>
    </Wrapper>
  );
}
