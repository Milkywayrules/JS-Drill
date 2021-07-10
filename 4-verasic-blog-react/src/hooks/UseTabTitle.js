import { useEffect, useState } from 'react';

const appName = 'Verasic Story';

function useTabTitle(defaultTabTitle = appName) {
  const [tabTitle, setTabTitle] = useState('');

  useEffect(() => {
    if (tabTitle === '') document.title = `${defaultTabTitle}`;
    else document.title = `${tabTitle} - ${defaultTabTitle}`;
  }, [tabTitle]);

  return { tabTitle, setTabTitle };
}

export default useTabTitle;
