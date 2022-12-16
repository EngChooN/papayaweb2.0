import * as GameList from "./GameList.styles";

export default function GameListUI({ tapState, setTapState }) {
  return (
    <GameList.Wrapper>
      <GameList.TopSection>
        <GameList.Title>PAPAYA GAMES</GameList.Title>
        {/* 게임 카테고리 탭 */}
        <GameList.TapWrapper>
          <GameList.TapMenu
            onClick={() => {
              setTapState(0);
              console.log(tapState);
            }}
          >
            <GameList.TapName>ALL</GameList.TapName>
          </GameList.TapMenu>
          <GameList.TapMenu
            onClick={() => {
              setTapState(1);
              console.log(tapState);
            }}
          >
            <GameList.TapName>RPG</GameList.TapName>
          </GameList.TapMenu>
          <GameList.TapMenu
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
              "http://test.papayaplay.com:8080/papaya/assets/images/portal/event/papayaplay_christmas_theme/eos_thumb.png"
            }
          />
          <GameList.ElInfoWrapper>
            {/* 각각의 게임 미니 이미지 */}
            <GameList.ElInfoImg />
            <GameList.ElInfoDetail>
              {/* 게임명 */}
              {/* 게임 장르 */}
            </GameList.ElInfoDetail>
          </GameList.ElInfoWrapper>
        </GameList.ElWrapper>
      </GameList.ListsSection>
    </GameList.Wrapper>
  );
}
