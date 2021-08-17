import { useEffect } from 'react';
import { useTabTitle } from '../hooks/modules';

function Story() {
  const { setTabTitle } = useTabTitle();

  useEffect(() => {
    setTabTitle('Story');
  }, []);

  return (
    <div className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white">
      <main>storyyyyy</main>
    </div>
  );
}

export default Story;
