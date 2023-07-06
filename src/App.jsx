import { useState } from "react";
import { MainHeader } from "./components/Header";
import HealthCard from "./components/HealthCard";
import Button from "./components/button";
import GameControl from "./components/GameControl";
import GameResult from "./components/GameResult";

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function App() {
  const [monsetrHealth, setMonsterHealth] = useState(100);
  const [playerHealth, setPlayerHealth] = useState(100);

  function monsterAttack(minAttackValue = 5, maxAttackValue = 12) {
    const attackValue = generateRandomNumber(minAttackValue, maxAttackValue);
    setMonsterHealth((praveValue) => praveValue - attackValue);
  }

  function playerAttack(minAttackValue = 8, maxAttackValue = 15) {
    const attackValue = generateRandomNumber(minAttackValue, maxAttackValue);
    setPlayerHealth((praveValue) => praveValue - attackValue);
  }

  function attackHandler() {
    monsterAttack();
    playerAttack();
  }

  function specialAttackHandler() {
    monsterAttack(10, 25);
    playerAttack();
  }

  return (
    <>
      <MainHeader />
      <main className="main-content">
        <section className="section-health-cards">
          <HealthCard title="Monster Health" icon="👾" health={monsetrHealth} />
          <HealthCard title="Your Health" icon="🦸‍♂️" health={playerHealth} />
        </section>
        {true && (
          <GameControl>
            <Button primary icon="🤜" onClick={attackHandler}>
              Attack
            </Button>

            <Button primary icon="💪" onClick={specialAttackHandler}>
              Spacial Attack
            </Button>

            <Button primary icon="💉">
              Heal
            </Button>

            <Button primary icon="🚩">
              Surrender
            </Button>
          </GameControl>
        )}
        {true && (
          <GameResult resultText="The Result Is: You 🦸‍♀️ Own">
            <Button secondary icon="🔄">
              Play Again
            </Button>
          </GameResult>
        )}
      </main>
    </>
  );
}

export default App;
