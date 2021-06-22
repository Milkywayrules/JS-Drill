import { CardSingleSearch, CardSeparator } from "./Component.js"


// bikin artificial dataset
const data = {
  Title: "One Punch Man: Wanpanman",
  Year: "2015–",
  Rated: "TV-PG",
  Released: "05 Oct 2015",
  Runtime: "24 min",
  Genre: "Animation, Action, Comedy",
  Director: "N/A",
  Writer: "N/A",
  Actors: "Makoto Furukawa, Kaito Ishikawa, Max Mittelman",
  Plot: "In a world of superhuman beings, Saitama is a unique hero, he can defeat enemies with a single punch. But being just one hero in a world filled with them, his life is empty and hollow: he gets no respect from anyone, he displays a laidback attitude to everything and for the most part, he finds his overall hero life pointless... and worst of all, he lost his hair due to intense training. These are the adventures of an ordinary yet extraordinary hero.",
  Language: "Japanese, English",
  Country: "Japan",
  Awards: "2 nominations",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMTNmZDE2NDEtNTg3MS00OTE1LThlZGUtOGZkZTg0NTUyNGVmXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_SX300.jpg",
  Ratings: [
    {
      Source: "Internet Movie Database",
      Value: "8.8/10",
    },
  ],
  Metascore: "N/A",
  imdbRating: "8.8",
  imdbVotes: "124,524",
  imdbID: "tt4508902",
  Type: "series",
  totalSeasons: "2",
  Response: "True",
};

// looping sampai i untuk generate array artificial dataset
const arrs = () => {
  const loops = [];
  for (let i = 0; i < 25; i++) loops.push(i);
  return loops;
};

// inisialisasi artifical dataset
const arrsData = arrs();

// render ke html artifical dataset
arrsData.forEach((_, idx) => {
  idx++;
  document
    .getElementById("card-wrapper")
    .insertAdjacentHTML("beforeend", CardSingleSearch(idx, data));
  if (idx % 5 === 0) {
    document
      .getElementById(`card-${idx}`)
      .insertAdjacentHTML("afterend", CardSeparator(idx, arrsData.length));
  }
});