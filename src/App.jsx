import { useState } from "react";
import Headler from "./components/Header";
import Member from "./components/Member";
import Button from "./components/button";

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
      <Headler />
      <main className="main-content">
        <section className="members-health">
          <Member title="Monster Health" icon="👾" health={monsetrHealth} />
          <Member title="Your Health" icon="🦸‍♂️" health={playerHealth} />
        </section>
        {true && (
          <section className="game-control">
            <header className="secondary-header">
              <h2 className="secondary-header__title">
                Deal significant damage 💪 and defeat the monster ⚡
              </h2>
            </header>
            <div className="btn-group">
              <Button icon="🤜" onClick={attackHandler}>
                Attack
              </Button>
              <Button icon="💪" onClick={specialAttackHandler} disabled>
                Spacial Attack
              </Button>
              <Button icon="💉">Heal</Button>
              <Button icon="🚩">Surrender</Button>
            </div>
          </section>
        )}
        {false && (
          <section className="game-result">
            <header className="secondary-header secondary-header--game-result">
              <h2 className="secondary-header__title">⚡ Game Over ⚡</h2>
            </header>
            <p className="game-result__message">The Result Is: You 🦸‍♀️ Own </p>
            <div className="game-result__btn-group">
              <button className="secodary-btn">
                Play Again <span>🔄</span>{" "}
              </button>
            </div>
          </section>
        )}
      </main>
    </>
  );
}

export default App;
