/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

export default function Member({ title, icon, health }) {
  const healthValue = {
    width: `${health}%`,
  };

  // TODO : chage health bar color whene it become lower and lower

  return (
    <>
      <h2 className="member-title">
        {title} <span className="member-icon">{icon}</span>
      </h2>
      <div className="member-health-bar">
        <span style={healthValue} className="member-health-value"></span>
      </div>
    </>
  );
}
