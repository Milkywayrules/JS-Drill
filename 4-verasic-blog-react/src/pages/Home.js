import { useEffect } from 'react';
import { useTabTitle } from '../hooks/modules';

function Home() {
  const { setTabTitle } = useTabTitle();

  useEffect(() => {
    setTabTitle('Home');
  }, []);

  return (
    <div className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white">
      <main>homeeeeeeeee</main>
    </div>
  );
}

export default Home;
