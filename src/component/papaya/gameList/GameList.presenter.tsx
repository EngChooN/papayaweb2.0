import GameListEl from "./GameListEl";
import * as GameList from "./GameList.styles";
import GameListModal from "./gameListModal/GameListModal.container";

export default function GameListUI({ tapState, setTapState, gameListData }) {
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
          {/* 카테고리 분류 => [0 = all], [1 = rpg], [2 = fps] */}
          {tapState === 0
            ? gameListData.map((el, idx) => (
                <GameListEl el={el} key={idx} index={idx} />
              ))
            : tapState === 1
            ? gameListData
                .filter((el) => el.gameGenre === "RPG")
                .map((el, idx) => <GameListEl el={el} key={idx} index={idx} />)
            : tapState === 2
            ? gameListData
                .filter((el) => el.gameGenre === "FPS")
                .map((el, idx) => <GameListEl el={el} key={idx} index={idx} />)
            : null}
        </GameList.ListsSection>
      </GameList.Wrapper>
    </>
  );
}
