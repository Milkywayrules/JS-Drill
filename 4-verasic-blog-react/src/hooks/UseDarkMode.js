import { useEffect, useState } from 'react';

function getDarkMode() {
  return localStorage.getItem(`${process.env.REACT_APP_VERASIC_CONF}darkMode`) === 'true';
}

export default function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(() => getDarkMode());
  const [hasError, setHasError] = useState(null);

  useEffect(() => {
    try {
      const htmlElement = document.getElementsByTagName('html')[0];
      localStorage.setItem(`${process.env.REACT_APP_VERASIC_CONF}darkMode`, isDarkMode);

      if (isDarkMode) htmlElement.classList.replace('light', 'dark');
      else htmlElement.classList.replace('dark', 'light');
    } catch (err) {
      setHasError(err);
    }
  }, [isDarkMode]);

  return {
    isDarkMode,
    setIsDarkMode,
    hasError,
  };
}
