/* eslint-disable react/prop-types */

export default function Button({ children, icon, ...rest }) {
  return (
    <button className="btn" {...rest}>
      {children}
      <span className="btn__icon">{icon}</span>
    </button>
  );
}
