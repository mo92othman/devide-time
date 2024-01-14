import React from 'react';
import Header from '../components/Header';
import UserNameForm from '../components/userProfile/UserNameForm';
import UserAvatarForm from '../components/userProfile/UserAvatarForm';
import { useAppState } from '../AppStateContext';

function UserProfilePage() {
  const { state } = useAppState();
  const { user } = state;

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center mt-4">
        {/* Display the user's name */}
        {user && user.name && (
          <p className="text-4xl font-extrabold text-center mb-4">
            Welcome, {user.name}!
          </p>
        )}

        {/* Render the UserNameForm component */}
        <UserNameForm />
        <UserAvatarForm />
      </div>
    </>
  );
}

export default UserProfilePage;
