import { useState } from "react";
import { MainHeader } from "./components/Header";
import HealthCard from "./components/HealthCard";
import Button from "./components/button";
import GameControl from "./components/GameControl";
import GameResult from "./components/GameResult";

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let turnTime = 0;
let isPlayerHeald = false;
let isGmaeOver = false;
let gameResultMessage = "";

function App() {
  const [monsetrHealth, setMonsterHealth] = useState(100);
  const [playerHealth, setPlayerHealth] = useState(100);
  const [isPlayerSurrender, setIsPlayerSurrender] = useState(false);

  function monsterAttack(minAttackValue = 5, maxAttackValue = 12) {
    const attackValue = generateRandomNumber(minAttackValue, maxAttackValue);
    setMonsterHealth((praveValue) => praveValue - attackValue);
  }

  function playerAttack(minAttackValue = 8, maxAttackValue = 15) {
    const attackValue = generateRandomNumber(minAttackValue, maxAttackValue);
    setPlayerHealth((praveValue) => praveValue - attackValue);
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
    setPlayerHealth(healer);
  }

  function attackHandler() {
    turnTime++;
    monsterAttack();
    playerAttack();
  }

  function specialAttackHandler() {
    turnTime++;
    monsterAttack(10, 25);
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
    setIsPlayerSurrender(!isPlayerSurrender);
    isGmaeOver = true;
    gameResultMessage = "Monster 👾 Own";
  }

  function playeAgainHanlder() {
    setMonsterHealth(100);
    setPlayerHealth(100);
    turnTime = 0;
    isPlayerHeald = false;
    isGmaeOver = false;
    gameResultMessage = "";
  }

  if (monsetrHealth <= 0 && playerHealth <= 0) {
    isGmaeOver = true;
    gameResultMessage = "Draw 🦸‍♀️🤜🤛👾";
  } else if (monsetrHealth <= 0) {
    isGmaeOver = true;
    gameResultMessage = "You 🦸‍♀️ Own";
  } else if (playerHealth <= 0) {
    isGmaeOver = true;
    gameResultMessage = "Monster 👾 Own";
  }

  let isSpecialAttackButtonAvailable = turnTime % 4 !== 0;

  return (
    <>
      <MainHeader />
      <main className="main-content">
        <section className="section-health-cards">
          <HealthCard title="Monster Health" icon="👾" health={monsetrHealth} />
          <HealthCard title="Your Health" icon="🦸‍♂️" health={playerHealth} />
        </section>
        {!isGmaeOver && (
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
        {isGmaeOver && (
          <GameResult resultText={gameResultMessage}>
            <Button secondary icon="🔄" onClick={playeAgainHanlder}>
              Play Again
            </Button>
          </GameResult>
        )}
      </main>
    </>
  );
}

export default App;
