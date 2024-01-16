import React from 'react';
import { useEffect } from 'react';
import useAvatarAPI from './useAvatarAPI';
import Avatar from './Avatar';
import { useAppState } from '../../AppStateContext';
import LoadingSVG from '../../assets/loading.svg';

const UserAvatarForm = () => {
  const { dispatch } = useAppState();
  const { avatar, isLoading, fetchAvatar } = useAvatarAPI();

  const handleGenerateAvatar = () => {
    fetchAvatar();
  };

  useEffect(() => {
    fetchAvatar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAvatarClick = () => {
    dispatch({
      type: 'SET_USER_URL',
      payload: {
        avatarUrl: avatar,
      },
    });
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <button
        className="bg-indigo-600 hover:bg-indigo-500 text-white  py-1 px-4 rounded mb-3"
        onClick={handleGenerateAvatar}
      >
        Change your Avatar...
      </button>
      <div>
        {isLoading ? (
          <img src={LoadingSVG} alt="Loading" className="w-16 h-16" />
        ) : (
          avatar && <Avatar svgString={avatar} />
        )}
      </div>
      <button
        className="bg-green-500 text-white px-4 rounded hover:bg-green-600 mt-3"
        onClick={handleAvatarClick}
      >
        Save
      </button>
    </div>
  );
};

export default UserAvatarForm;
