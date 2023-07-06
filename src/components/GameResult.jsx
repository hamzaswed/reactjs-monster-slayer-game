/* eslint-disable react/prop-types */
import { SecondaryHeader } from "./Header";

export default function GameResult({ children, resultText }) {
  return (
    <section className="section-game-result">
      <SecondaryHeader title="⚡ Game Over ⚡" />

      <div className="game-result">
        <p className="game-result__message">{resultText}</p>
        <footer className="game-result__footer">{children}</footer>
      </div>
    </section>
  );
}
