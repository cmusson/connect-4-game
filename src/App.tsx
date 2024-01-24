import "./App.css";
import Game from "./components/Game";
import Score from "./components/Score";
import Player from "./components/Player";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import { GameProvider } from "./context/GameContext";

function App() {
  return (
    <GameProvider>
      <div className="app">
        <Header />
        <div className="main-container">
          <Player />
          <Game />
          <Score />
        </div>
        <Button />
      </div>
    </GameProvider>
  );
}

export default App;
