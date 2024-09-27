import { Home } from "./Components/Home";
import { useState } from "react";
import GamePlay from "./Components/GamePlay";

function App() {
  const [IsGameStarted, setIsGameStarted] = useState(false);

  const toogleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>{IsGameStarted ? <GamePlay /> : <Home toggle={setIsGameStarted} />}</>
  );
}

export default App;
