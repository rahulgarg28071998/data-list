import React from 'react';
import './PlanCard.css';

const PlanCard = ({ title, price, credits, features, trial, currentPlan, popular }) => {
  return (
    <div className={`plan ${popular ? 'popular' : ''}`}>
      <h3>{title}</h3>
      <p className="price">{price}</p>
      <p className="credits">{credits}</p>

      <ul className="features">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      {currentPlan ? (
        <button className="current-plan-btn">Your Current Plan</button>
      ) : (
        <button className="select-plan-btn">Select Plan</button>
      )}
      
      {trial && <p className="trial">{trial}</p>}
    </div>
  );
};

export default PlanCard;
