import React from 'react';

function UserProfile() {
  // Fetch user data from data.js or API
  const user = { name: 'Mo' };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{user.name}</h2>
    </div>
  );
}

export default UserProfile;
