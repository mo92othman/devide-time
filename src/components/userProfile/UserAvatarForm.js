// UserAvatarForm.js
import React from 'react';
import useAvatarAPI from './useAvatarAPI';
import Avatar from './Avatar';
import { useAppState } from '../../AppStateContext';

const UserAvatarForm = () => {
  const { dispatch } = useAppState();
  const { avatar, fetchAvatar } = useAvatarAPI();

  const handleGenerateAvatar = () => {
    // Call the fetchAvatar function to generate a new random avatar
    fetchAvatar();
  };

  const handleAvatarClick = () => {
    // Dispatch an action to set the avatar URL in the state
    dispatch({
      type: 'SET_USER_URL',
      payload: {
        avatarUrl: avatar,
      },
    });
    console.log('hi');
    console.log(avatar);
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleGenerateAvatar}
      >
        Change your Avatar...
      </button>
      {avatar && <Avatar svgString={avatar} />}
      <button
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        onClick={handleAvatarClick}
      >
        save
      </button>
    </div>
  );
};

export default UserAvatarForm;
