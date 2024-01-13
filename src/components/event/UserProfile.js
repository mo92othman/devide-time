import React from 'react';

function UserProfile() {
  // Fetch user data from data.js or API
  const user = { name: 'Mo' };

  return (
    <div className="flex items-center justify-center bg-purple-300 p-4 rounded-lg">
      <h2 className="text-xl font-bold text-white">Hi {user.name}!</h2>
    </div>
  );
}

export default UserProfile;
