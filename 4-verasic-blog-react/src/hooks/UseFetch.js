import { useEffect, useState } from 'react';

export default function useFetch(initialUrl, initialOptions) {
  const [url, setUrl] = useState(initialUrl);
  const [options, setOptions] = useState(initialOptions);
  const [response, setResponse] = useState();
  const [isError, setIsError] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    try {
      fetch(url, options)
        .then((x) => x.json())
        .then((json) => setResponse(json));
    } catch (err) {
      setIsError(err);
    } finally {
      setIsLoading(false);
    }
  }, [url, options]);

  return {
    response,
    isError,
    isLoading,
    setUrl,
    setOptions,
  };
}
