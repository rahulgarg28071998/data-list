// NotificationsPage.js
import React from 'react';
import './NotificationsPage.css';

const notificationsData = [
    {
        id: 1,
        title: 'Welcome to the platform!',
        date: '2023-01-01',
        message: 'Thank you for signing up! We are excited to have you on board.',
    },
    {
        id: 2,
        title: 'New features released!',
        date: '2023-02-15',
        message: 'We have added new features to enhance your experience. Check them out!',
    },
    {
        id: 3,
        title: 'Your subscription is expiring soon.',
        date: '2023-03-10',
        message: 'Your subscription will expire in 5 days. Please renew to continue enjoying our services.',
    },
    {
        id: 4,
        title: 'Feedback Request',
        date: '2023-04-05',
        message: 'We value your feedback! Please take a moment to share your thoughts on our service.',
    },
];

const NotificationsPage = () => {
    return (
        <div className="notifications-page">
            <h2>Your Notifications</h2>
            <div className="notification-list">
                {notificationsData.map(notification => (
                    <div key={notification.id} className="notification-item">
                        <h3>{notification.title}</h3>
                        <span className="notification-date">{notification.date}</span>
                        <p>{notification.message}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NotificationsPage;
