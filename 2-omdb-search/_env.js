export const ENV = ((API_KEY = "32913f44") => {
  const baseUrl = `https://www.omdbapi.com/?apikey=${API_KEY}`;

  return {
    fullUrl: {
      base: `https://www.omdbapi.com/?apikey=${API_KEY}`,
      byTitle: baseUrl, // page=n ; s=Str
      byId: `${baseUrl}&plot=full`, //plot=full ; i=Num
    },
  };
})();
