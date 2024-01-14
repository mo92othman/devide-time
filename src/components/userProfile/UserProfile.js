import React from 'react';
import Avatar from './Avatar';
import { useAppState } from '../../AppStateContext';

function UserProfile() {
  const { state } = useAppState();
  const { name, avatarUrl } = state.user;

  return (
    <div className="flex items-center justify-between bg-purple-300 p-4 rounded-lg">
      <div className="flex items-center">
        <h2 className="text-xl font-bold text-white">Hi {name}!</h2>
      </div>
      <div className="w-12 h-12 overflow-hidden rounded-full">
        {/* <div dangerouslySetInnerHTML={{ __html: avatarUrl }} /> */}
      </div>
      <Avatar svgString={avatarUrl} />
    </div>
  );
}

export default UserProfile;
