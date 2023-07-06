/* eslint-disable react/prop-types */
import { SecondaryHeader } from "./Header";

export default function GameControl({ children }) {
  return (
    <section className="section-game-control">
      <SecondaryHeader title="Deal significant damage 💪 and defeat the monster ⚡" />

      <div className="btn-group">{children}</div>
    </section>
  );
}
