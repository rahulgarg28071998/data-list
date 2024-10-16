// ReferralPage.js
import React, { useState } from 'react';
import './ReferralPage.css';

const ReferralPage = () => {
    const [referralEmail, setReferralEmail] = useState('');
    const [referrals, setReferrals] = useState([]);

    const handleSendReferral = () => {
        if (referralEmail) {
            setReferrals([...referrals, { email: referralEmail, date: new Date().toISOString().split('T')[0] }]);
            setReferralEmail(''); // Reset the input field
        }
    };

    return (
        <div className="referral-page">
            <h2>Send Referrals</h2>
            <div className="referral-form">
                <input
                    type="email"
                    placeholder="Enter email to refer"
                    value={referralEmail}
                    onChange={(e) => setReferralEmail(e.target.value)}
                />
                <button onClick={handleSendReferral}>Send Referral</button>
            </div>
            <div className="referral-list">
                <h3>Sent Referrals</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Date Sent</th>
                        </tr>
                    </thead>
                    <tbody>
                        {referrals.map((referral, index) => (
                            <tr key={index}>
                                <td>{referral.email}</td>
                                <td>{referral.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReferralPage;
