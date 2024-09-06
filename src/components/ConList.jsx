import React, { useState, useEffect } from 'react';
import './User.css';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.org/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error loading posts: {error.message}</p>;

  return (
    <div className="users-container">
      <h1>Users</h1>
      <ul className="users-list">
        {users.map(user => (
          <li key={user.id}>
            <h2>{user.login.username}</h2>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
