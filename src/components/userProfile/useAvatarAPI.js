// useAvatarAPI.js
import { useState } from 'react';

const useAvatarAPI = () => {
  const [avatar, setAvatar] = useState(null);
  const [error, setError] = useState(null);

  const generateRandomNumber = () => {
    return Math.random();
  };

  const fetchAvatar = async () => {
    try {
      const randomNumber = generateRandomNumber();
      const response = await fetch(
        `https://api.multiavatar.com/${randomNumber}?apikey=KCBXicp2RtgJLw`,
      );
      if (response.ok) {
        const svgData = await response.text();
        setAvatar(svgData);
      } else {
        setError(`Error fetching avatar: ${response.statusText}`);
      }
    } catch (error) {
      setError(`Error fetching avatar: ${error.message}`);
    }
  };

  // useEffect(() => {
  //   // Fetch an initial avatar when the component mounts
  //   fetchAvatar();
  // }, []);

  if (error) {
    console.error(error);
  }

  return { avatar, fetchAvatar };
};

export default useAvatarAPI;
