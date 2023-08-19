 
import React, { useState, useEffect } from 'react';

function Profile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${userId}`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        localStorage.setItem('profileUser', JSON.stringify(data));
      })
      .catch(error => {
        console.error('Error fetching profile:', error);
      });
  }, [userId]);

  return (
    <div>
      <h2>Profile</h2>
      {user && (
        <div>
          <p>ID: {user.id}</p>
          <p>Username: {user.username}</p>
          <p>First-Name: {user.firstName}</p>
          <p>Last-Name: {user.lastName}</p>
          <p>Email: {user.email}</p>
          <p>Gender: {user.gender}</p>
          <p>Token: {user.token}</p>
          {/* Display other user details as needed */}
        </div>
      )}
    </div>
  );
}

export default Profile;
