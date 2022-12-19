import * as GameList from "./GameList.styles";

export default function GameListUI({ tapState, setTapState }) {
  return (
    <GameList.Wrapper>
      <GameList.TopSection>
        <GameList.Title>PAPAYA GAMES</GameList.Title>
        {/* 게임 카테고리 탭 */}
        <GameList.TapWrapper>
          <GameList.TapMenu
            className={tapState == 0 ? "active" : ""}
            onClick={() => {
              setTapState(0);
              console.log(tapState);
            }}
          >
            <GameList.TapName>ALL</GameList.TapName>
          </GameList.TapMenu>
          <GameList.TapMenu
            className={tapState == 1 ? "active" : ""}
            onClick={() => {
              setTapState(1);
              console.log(tapState);
            }}
          >
            <GameList.TapName>RPG</GameList.TapName>
          </GameList.TapMenu>
          <GameList.TapMenu
            className={tapState == 2 ? "active" : ""}
            onClick={() => {
              setTapState(2);
              console.log(tapState);
            }}
          >
            <GameList.TapName>FPS</GameList.TapName>
          </GameList.TapMenu>
        </GameList.TapWrapper>
      </GameList.TopSection>
      <GameList.ListsSection>
        {/* 각각의 게임 박스 */}
        <GameList.ElWrapper>
          {/* 각각의 게임 썸네일 이미지 */}
          <GameList.ElThumbnail
            src={
              "https://static.papayaplay.com/static/assets/images/portal/event/papayaplay_christmas_theme/eos_thumb.png"
            }
          />
          <GameList.ElInfoWrapper>
            {/* 각각의 게임 미니 이미지 */}
            <GameList.ElInfoImg
              src={
                "https://static.papayaplay.com/static/assets/images/portal/gnb/2021_new/eos_sm.png"
              }
            />
            <GameList.ElInfoDetail>
              {/* 게임명 */}
              <GameList.ElInfoTitle>Echo Of Soul</GameList.ElInfoTitle>
              {/* 게임 장르 */}
              <GameList.ElInfoGenre>RPG</GameList.ElInfoGenre>
            </GameList.ElInfoDetail>
          </GameList.ElInfoWrapper>
        </GameList.ElWrapper>
      </GameList.ListsSection>
    </GameList.Wrapper>
  );
}
