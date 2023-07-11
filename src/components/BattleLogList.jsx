/* eslint-disable react/prop-types */
import { SecondaryHeader } from "./Header";

export default function BattleLogList({ battleLogs }) {
  return (
    <section className="section-battle-log">
      <SecondaryHeader title="Battle Log ⚔" />

      <ul className="battle-log__list">
        {battleLogs.map((battleLog) => {
          return (
            <li key={battleLog.id} className="battle-log__list-item">
              <span className="battle-log__who">{battleLog.who}</span>
              <span className="battle-log__what">{battleLog.what}</span>
              <span className="battle-log__value">
                Value: {battleLog.value}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
