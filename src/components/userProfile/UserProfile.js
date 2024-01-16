import React from 'react';
import Avatar from './Avatar';
import { useAppState } from '../../AppStateContext';
import { Link } from 'react-router-dom';

function UserProfile() {
  const { state } = useAppState();
  const { name, avatarUrl } = state.user;

  return (
    <Link to="/profile">
      <div className=" group flex items-center justify-between bg-purple-300 p-4 rounded-lg transition duration-100 ease-in-out hover:bg-purple-400">
        <div className="flex items-center">
          <h2 className="text-2xl font-bold text-white transition duration-900 ease-in-out  group-hover:animate-bounce group-hover:text-3xl">
            Hi {name}!
          </h2>
        </div>
        <div className=" transition-transform duration-100 ease-in-out transform group-hover:animate-bounce">
          <Avatar svgString={avatarUrl} />
        </div>
      </div>
    </Link>
  );
}

export default UserProfile;
