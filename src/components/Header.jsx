/* eslint-disable react/prop-types */

export function MainHeader() {
  return (
    <header className="header">
      <h1 className="header__title">Monster Slayer Game</h1>
    </header>
  );
}

export function SecondaryHeader({ title }) {
  return (
    <header className="secondary-header">
      <h2 className="secondary-header__title">{title}</h2>
    </header>
  );
}
