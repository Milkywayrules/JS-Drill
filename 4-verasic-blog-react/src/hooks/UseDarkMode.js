import { useEffect, useState } from 'react';

function getDarkMode() {
  return localStorage.getItem(`${process.env.REACT_APP_VERASIC_CONF}darkMode`) === 'true';
}

export default function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(() => getDarkMode());

  useEffect(() => {
    console.log(isDarkMode);
    try {
      localStorage.setItem(`${process.env.REACT_APP_VERASIC_CONF}darkMode`, isDarkMode);
      if (isDarkMode) {
        document.getElementsByTagName('html')[0].classList.replace('dark', 'light');
      } else {
        document.getElementsByTagName('html')[0].classList.replace('light', 'dark');
      }
    } catch (err) {
      console.error(err);
    }
  }, [isDarkMode]);

  return {
    isDarkMode,
    setIsDarkMode,
  };
}
