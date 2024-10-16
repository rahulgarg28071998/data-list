import React from 'react';
import PlanCard from './PlanCard';
import './SubscriptionPlans.css';

const SubscriptionPlans = () => {
  return (
    <div className="subscription-container">

      <div className="content">
        {/* <Header /> */}
        
        <div className="current-plan">
          <div className="plan-info">
            <h3>Free</h3>
            <p>Next Payment: 25.02.2023</p>
          </div>
          <button className="buy-credits">Buy More Credits</button>
        </div>

        <div className="billing-section">
          <div className="billing-toggle">
            <span>Monthly Billing</span>
            <span>Annual Billing (Save 20%)</span>
          </div>

          <div className="plans">
            <PlanCard 
              title="Basic"
              price="Free"
              credits="10 free credits per month"
              features={['Search', 'View contact or company details', 'Buy contact or company', 'Download contact or company', 'Update previous purchased data', 'Data Score pricing', 'Referral', 'Export to CRM']}
              currentPlan={true}
            />

            <PlanCard 
              title="Pro +"
              price="$199"
              credits="460 credits"
              features={['Search', 'View contact or company details', 'Buy contact or company', 'Download contact or company', 'Update previous purchased data', 'Data Score pricing', 'Referral', 'Export to CRM', 'Enrich', 'Validate', 'Intent Data']}
              trial="5 Days Free Trial"
              popular={true}
            />

            <PlanCard 
              title="Enterprise"
              price="$399"
              credits="1000 credits"
              features={['Search', 'View contact or company details', 'Buy contact or company', 'Download contact or company', 'Update previous purchased data', 'Data Score pricing', 'Referral', 'Export to CRM', 'Enrich', 'Validate', 'Intent Data', 'Advanced Filters', 'Custom Build Data', 'HQ Companies']}
              trial="5 Days Free Trial"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;
