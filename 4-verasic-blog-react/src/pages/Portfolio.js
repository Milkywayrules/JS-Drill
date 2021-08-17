import { useEffect } from 'react';
import { useTabTitle } from '../hooks/modules';

function Portfolio() {
  const { setTabTitle } = useTabTitle();

  useEffect(() => {
    setTabTitle('Portfolio');
  }, []);

  return (
    <div className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white">
      <main>portfolioooooooo</main>
    </div>
  );
}

export default Portfolio;
