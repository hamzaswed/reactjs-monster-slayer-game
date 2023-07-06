/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

export default function HealthCard({ title, icon, health }) {
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
      <h3 className="card__title">
        {title} <span className="card__icon">{icon}</span>
      </h3>
      <div className="card__health-bar">
        <span style={healthValue} className="card__health-value"></span>
      </div>
    </div>
  );
}
