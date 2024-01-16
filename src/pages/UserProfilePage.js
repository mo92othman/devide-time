import React from 'react';
import Header from '../components/Header';
import UserNameForm from '../components/userProfile/UserNameForm';
import UserAvatarForm from '../components/userProfile/UserAvatarForm';
import { useAppState } from '../AppStateContext';
import { Link } from 'react-router-dom';

function UserProfilePage() {
  const { state } = useAppState();
  const { user } = state;

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center mt-12">
        {/* Display the user's name */}
        {user && user.name && (
          <p className="text-4xl font-extrabold text-center mb-4 border-dashed border-2 border-gray-500 p-4 rounded-md">
            Welcome, {user.name}!
          </p>
        )}

        {/* Render the UserNameForm component */}
        <div>
          <UserNameForm />
          <UserAvatarForm />

          <Link to="/events">
            <button className="bg-cyan-800 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded mt-2">
              Go to dashboard
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default UserProfilePage;
