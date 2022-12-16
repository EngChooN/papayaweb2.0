import { useState } from "react";
import GameListUI from "./GameList.presenter";

export default function GameList() {
  const [tapState, setTapState] = useState(0);

  return <GameListUI tapState={tapState} setTapState={setTapState} />;
}
