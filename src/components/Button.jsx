/* eslint-disable react/prop-types */

export default function Button({ children, icon }) {
  return (
    <button className="btn">
      {children}
      <span className="btn__icon">{icon}</span>
    </button>
  );
}
