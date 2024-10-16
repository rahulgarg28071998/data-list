// UserManagementPage.js
import React, { useState } from 'react';
import './UserManagementPage.css';

const initialUsers = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        role: 'Admin',
        invitedDate: '2023-01-01',
        lastActive: '2023-10-05',
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        role: 'User',
        invitedDate: '2023-02-15',
        lastActive: '2023-09-28',
    },
    {
        id: 3,
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com',
        role: 'User',
        invitedDate: '2023-03-10',
        lastActive: '2023-10-01',
    },
];

const UserManagementPage = () => {
    const [users, setUsers] = useState(initialUsers);
    const [newUser, setNewUser] = useState({ name: '', email: '', role: 'User' });

    const handleAddUser = () => {
        const updatedUsers = [
            ...users,
            {
                id: users.length + 1,
                ...newUser,
                invitedDate: new Date().toISOString().split('T')[0],
                lastActive: 'N/A',
            },
        ];
        setUsers(updatedUsers);
        setNewUser({ name: '', email: '', role: 'User' }); // Reset form
    };

    return (
        <div className="user-management-page">
            <h2>User Management</h2>
            <div className="user-form">
                <input
                    type="text"
                    placeholder="Name"
                    value={newUser.name}
                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={newUser.email}
                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                />
                <select
                    value={newUser.role}
                    onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                >
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                    <option value="Manager">Manager</option>
                </select>
                <button onClick={handleAddUser}>Add User</button>
            </div>
            <div className="user-list">
                <h3>Users</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Invited Date</th>
                            <th>Last Active</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>{user.invitedDate}</td>
                                <td>{user.lastActive}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserManagementPage;
