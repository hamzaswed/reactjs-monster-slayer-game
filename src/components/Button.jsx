/* eslint-disable react/prop-types */

export default function Button({
  children,
  icon,
  primary,
  secondary,
  ...rest
}) {
  let classes = "btn";

  if (primary) {
    classes += " main-btn";
  }

  if (secondary) {
    classes += " secodary-btn";
  }

  return (
    <button className={classes} {...rest}>
      {children}
      <span>{icon}</span>
    </button>
  );
}
