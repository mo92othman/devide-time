import { useState } from 'react';

const useAvatarAPI = () => {
  const [avatar, setAvatar] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const generateRandomNumber = () => {
    return Math.random();
  };

  const fetchAvatar = async () => {
    setIsLoading(true); // Set loading to true when starting the fetch
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
    } finally {
      setIsLoading(false); // Set loading to false after fetch completion
    }
  };

  return { avatar, isLoading, error, fetchAvatar };
};

export default useAvatarAPI;
