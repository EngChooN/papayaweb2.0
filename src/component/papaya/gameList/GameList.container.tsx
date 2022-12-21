import { useState } from "react";
import GameListUI from "./GameList.presenter";

export default function GameList() {
  const [tapState, setTapState] = useState(0);

  // 호버 시, 모달 test...
  const [hoverSate, setHoverState] = useState(false);

  // 테스트 배열 데이터
  const gameListData = [
    {
      id: 0,
      gameThumbnail:
        "https://static.papayaplay.com/static/assets/images/portal/event/papayaplay_christmas_theme/eos_thumb.png",
      gameTitle: "Echo Of Soul",
      gameGenre: "RPG",
      gameSmallImg:
        "https://static.papayaplay.com/static/assets/images/portal/gnb/2021_new/eos_sm.png",
    },
    {
      id: 1,
      gameThumbnail:
        "https://static.papayaplay.com/static/assets/images/portal/event/papayaplay_christmas_theme/bs_sea_thumb.png",
      gameTitle: "BlackShot SEA",
      gameGenre: "FPS",
      gameSmallImg:
        "https://static.papayaplay.com/static/assets/images/portal/gnb/2021_new/bs_sea_sm.png",
    },
  ];

  return (
    <GameListUI
      tapState={tapState}
      setTapState={setTapState}
      hoverSate={hoverSate}
      setHoverState={setHoverState}
      gameListData={gameListData}
    />
  );
}
