import { useState } from "react";
import { MainHeader } from "./components/Header";
import HealthCard from "./components/HealthCard";
import Button from "./components/button";
import GameControl from "./components/GameControl";
import GameResult from "./components/GameResult";
import BattleLogList from "./components/BattleLogList";

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let turnTime = 0;
let isPlayerHeald = false;
let isGameOver = false;
let gameResultMessage = "";

function App() {
  const [monsetrHealth, setMonsterHealth] = useState(100);
  const [playerHealth, setPlayerHealth] = useState(100);
  const [isPlayerSurrender, setIsPlayerSurrender] = useState(false);
  const [battleLogs, setBattleLogs] = useState([]);

  function monsterAttack(minAttackValue = 5, maxAttackValue = 12) {
    const attackValue = generateRandomNumber(minAttackValue, maxAttackValue);

    const newLog = {
      id: Math.random(),
      who: "🦸‍♀️ You",
      what: "attack the monster 🤜",
      value: attackValue,
    };

    if (attackValue >= 13) {
      newLog.what = "attack the monster (special) 💪🤜";
    }

    setMonsterHealth((praveValue) => praveValue - attackValue);
    setBattleLogs((value) => [newLog, ...value]);
  }

  function playerAttack(minAttackValue = 8, maxAttackValue = 15) {
    const attackValue = generateRandomNumber(minAttackValue, maxAttackValue);

    const newLog = {
      id: Math.random(),
      who: "👾 Monster",
      what: "attack you",
      value: attackValue,
    };

    setPlayerHealth((praveValue) => praveValue - attackValue);
    setBattleLogs((value) => [newLog, ...value]);
  }

  function playerHeal() {
    const healValue = generateRandomNumber(10, 25);

    function healer(value) {
      if (value + healValue >= 100) {
        return 100;
      } else {
        return value + healValue;
      }
    }

    const newLog = {
      id: Math.random(),
      who: "🦸‍♀️ You",
      what: "Heal yourself 💉",
      value: healValue,
    };

    setPlayerHealth(healer);
    setBattleLogs((value) => [newLog, ...value]);
  }

  function attackHandler() {
    turnTime++;
    monsterAttack();
    playerAttack();
  }

  function specialAttackHandler() {
    turnTime++;
    monsterAttack(13, 25);
    playerAttack();
  }

  function playerHealHandler() {
    if (playerHealth === 100) {
      return;
    }

    turnTime++;
    isPlayerHeald = true;
    playerHeal();
  }

  function playerSurrenderHandler() {
    const newLog = {
      id: Math.random(),
      who: "🦸‍♀️ You",
      what: "Are Surrender",
      value: "🚩🚩🚩🚩",
    };

    isGameOver = true;
    gameResultMessage = "Monster 👾 Own";
    setIsPlayerSurrender(!isPlayerSurrender);
    setBattleLogs((value) => [newLog, ...value]);
  }

  function playeAgainHanlder() {
    setIsPlayerSurrender(!isPlayerSurrender);
    setMonsterHealth(100);
    setPlayerHealth(100);
    setBattleLogs([]);
    turnTime = 0;
    isPlayerHeald = false;
    isGameOver = false;
    gameResultMessage = "";
  }

  if (monsetrHealth <= 0 && playerHealth <= 0) {
    isGameOver = true;
    gameResultMessage = "Draw 🦸‍♀️🤜🤛👾";
  } else if (monsetrHealth <= 0) {
    isGameOver = true;
    gameResultMessage = "You 🦸‍♀️ Own";
  } else if (playerHealth <= 0) {
    isGameOver = true;
    gameResultMessage = "Monster 👾 Own";
  }

  let isSpecialAttackButtonAvailable = turnTime % 5 !== 0;

  return (
    <>
      <MainHeader />
      <main className="main-content">
        <section className="section-health-cards">
          <HealthCard title="Monster Health" icon="👾" health={monsetrHealth} />
          <HealthCard title="Your Health" icon="🦸‍♂️" health={playerHealth} />
        </section>
        {!isGameOver && (
          <GameControl>
            <Button primary icon="🤜" onClick={attackHandler}>
              Attack
            </Button>

            <Button
              primary
              icon="💪"
              onClick={specialAttackHandler}
              disabled={isSpecialAttackButtonAvailable}
            >
              Spacial Attack
            </Button>

            <Button
              primary
              icon="💉"
              onClick={playerHealHandler}
              disabled={isPlayerHeald}
            >
              Heal
            </Button>

            <Button primary icon="🚩" onClick={playerSurrenderHandler}>
              Surrender
            </Button>
          </GameControl>
        )}
        {isGameOver && (
          <GameResult resultText={gameResultMessage}>
            <Button secondary icon="🔄" onClick={playeAgainHanlder}>
              Play Again
            </Button>
          </GameResult>
        )}

        <BattleLogList battleLogs={battleLogs} />
      </main>
    </>
  );
}

export default App;
