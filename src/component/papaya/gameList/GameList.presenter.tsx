import GameListEl from "./\bGameListEl";
import * as GameList from "./GameList.styles";
import GameListModal from "./gameListModal/GameListModal.container";

export default function GameListUI({
  tapState,
  setTapState,
  hoverSate,
  setHoverState,
  gameListData,
}) {
  return (
    <>
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
          {gameListData.map((el, idx) => (
            <GameListEl
              hoverSate={hoverSate}
              setHoverState={setHoverState}
              el={el}
              key={idx}
              index={idx}
            />
            // <>
            //   <GameList.ElWrapper
            //     onMouseEnter={() => {
            //       setHoverState(true);
            //     }}
            //     onMouseLeave={() => {
            //       setHoverState(false);
            //     }}
            //   >
            //     {/* 각각의 게임 썸네일 이미지 */}
            //     <GameList.ElThumbnail src={el.gameThumbnail} />
            //     <GameList.ElInfoWrapper>
            //       {/* 각각의 게임 미니 이미지 */}
            //       <GameList.ElInfoImg src={el.gameSmallImg} />
            //       <GameList.ElInfoDetail>
            //         {/* 게임명 */}
            //         <GameList.ElInfoTitle>{el.gameTitle}</GameList.ElInfoTitle>
            //         {/* 게임 장르 */}
            //         <GameList.ElInfoGenre>{el.gameGenre}</GameList.ElInfoGenre>
            //       </GameList.ElInfoDetail>
            //     </GameList.ElInfoWrapper>
            //   </GameList.ElWrapper>
            //   {/* 호버 시, 모달 창 */}
            //   {hoverSate ? <GameListModal /> : null}
            // </>
          ))}
        </GameList.ListsSection>
      </GameList.Wrapper>
    </>
  );
}
