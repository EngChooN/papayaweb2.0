import * as MainBottomBanner from "./Banner.styles";

export default function Banner() {
  return (
    <MainBottomBanner.Wrapper>
      <MainBottomBanner.Left>
        <MainBottomBanner.Title>Create a free account</MainBottomBanner.Title>
        <MainBottomBanner.Content>
          Have access to our Free Games
        </MainBottomBanner.Content>
        <MainBottomBanner.Btn>Join for Free</MainBottomBanner.Btn>
        <MainBottomBanner.LeftImg src="https://static.papayaplay.com/static/assets/images/portal/gnb/2021_new/character_before_login.png" />
      </MainBottomBanner.Left>
      <MainBottomBanner.Right>
        <MainBottomBanner.Tap>
          <MainBottomBanner.TapTitle>GAME</MainBottomBanner.TapTitle>
          <MainBottomBanner.TapLists>
            <MainBottomBanner.TapList href="">
              Echo Of Soul
            </MainBottomBanner.TapList>
            <MainBottomBanner.TapList href="">
              BlackShot SEA
            </MainBottomBanner.TapList>
            <MainBottomBanner.TapList href="">
              BlackShot GLB
            </MainBottomBanner.TapList>
            <MainBottomBanner.TapList href="">
              Nine Dragons
            </MainBottomBanner.TapList>
            <MainBottomBanner.TapList href="">4Story</MainBottomBanner.TapList>
            <MainBottomBanner.TapList href="">
              Uncharted Waters Online
            </MainBottomBanner.TapList>
            <MainBottomBanner.TapList href="">La Tale</MainBottomBanner.TapList>
            <MainBottomBanner.TapList href="">
              War Rock
            </MainBottomBanner.TapList>
          </MainBottomBanner.TapLists>
        </MainBottomBanner.Tap>
        <MainBottomBanner.BottomSection>
          <MainBottomBanner.Tap>
            <MainBottomBanner.TapTitle>MY PAGE</MainBottomBanner.TapTitle>
            <MainBottomBanner.TapLists>
              <MainBottomBanner.TapList href="">
                Sign in
              </MainBottomBanner.TapList>
              <MainBottomBanner.TapList href="">
                My Account
              </MainBottomBanner.TapList>
              <MainBottomBanner.TapList href="">
                Transaction History
              </MainBottomBanner.TapList>
              <MainBottomBanner.TapList href="">
                Notifications
              </MainBottomBanner.TapList>
            </MainBottomBanner.TapLists>
          </MainBottomBanner.Tap>
          <MainBottomBanner.Tap>
            <MainBottomBanner.TapTitleLink href="">
              CASHSHOP
            </MainBottomBanner.TapTitleLink>
            <MainBottomBanner.TapTitleLink href="">
              FORUM
            </MainBottomBanner.TapTitleLink>
            <MainBottomBanner.TapTitleLink href="">
              SUPPORT
            </MainBottomBanner.TapTitleLink>
          </MainBottomBanner.Tap>
        </MainBottomBanner.BottomSection>
      </MainBottomBanner.Right>
    </MainBottomBanner.Wrapper>
  );
}
