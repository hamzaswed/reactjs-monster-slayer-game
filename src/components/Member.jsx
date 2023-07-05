/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

export default function Member({ title, icon, health }) {
  const healthBarBackgroundColor = { backgroundColor: "#880017" };

  if (health < 70) {
    healthBarBackgroundColor.backgroundColor = "#ac4d5d";
  }

  if (health < 40) {
    healthBarBackgroundColor.backgroundColor = "#cf99a2";
  }

  const healthValue = {
    width: `${health <= 0 ? 0 : health}%`,
    ...healthBarBackgroundColor,
  };

  return (
    <div className="card">
      <h3 className="member-title">
        {title} <span className="member-icon">{icon}</span>
      </h3>
      <div className="member-health-bar">
        <span style={healthValue} className="member-health-value"></span>
      </div>
    </div>
  );
}
