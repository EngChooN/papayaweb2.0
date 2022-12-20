import { useState } from "react";
import GameListUI from "./GameList.presenter";

export default function GameList() {
  const [tapState, setTapState] = useState(0);

  // 호버 시, 모달 test...
  const [hoverSate, setHoverState] = useState(false);

  return (
    <GameListUI
      tapState={tapState}
      setTapState={setTapState}
      hoverSate={hoverSate}
      setHoverState={setHoverState}
    />
  );
}
