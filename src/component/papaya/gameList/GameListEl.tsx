import * as GameList from "./GameList.styles";
import GameListModal from "./gameListModal/GameListModal.container";

export default function GameListEl({ hoverSate, setHoverState, el, index }) {
  return (
    <>
      <GameList.ElWrapper
        onMouseEnter={() => {
          setHoverState(true);
        }}
        onMouseLeave={() => {
          setHoverState(false);
        }}
      >
        {/* 각각의 게임 썸네일 이미지 */}
        <GameList.ElThumbnail src={el.gameThumbnail} />
        <GameList.ElInfoWrapper>
          {/* 각각의 게임 미니 이미지 */}
          <GameList.ElInfoImg src={el.gameSmallImg} />
          <GameList.ElInfoDetail>
            {/* 게임명 */}
            <GameList.ElInfoTitle>{el.gameTitle}</GameList.ElInfoTitle>
            {/* 게임 장르 */}
            <GameList.ElInfoGenre>{el.gameGenre}</GameList.ElInfoGenre>
          </GameList.ElInfoDetail>
        </GameList.ElInfoWrapper>
      </GameList.ElWrapper>
      {/* 호버 시, 모달 창 */}
      {hoverSate === true && el.id === index ? <GameListModal /> : null}
    </>
  );
}
