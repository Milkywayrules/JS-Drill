import { CardSingleSearch, CardSeparator } from "./components/Component.js";

// bikin artificial dataset
const queryResults = {
  Search: [
    {
      Title: "One Piece: Wan pîsu",
      Year: "1999–",
      imdbID: "tt0388629",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "One Piece Film Z",
      Year: "2012",
      imdbID: "tt2375379",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BM2FmMjg3MWUtNmI3Zi00OTAzLWFkOTctMjZhN2MzODQ3NWU0XkEyXkFqcGdeQXVyMjc0MjUzMzU@._V1_SX300.jpg",
    },
    {
      Title: "One Piece: Strong World",
      Year: "2009",
      imdbID: "tt1485763",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMmIyNGQ3NmEtNGZkNi00MDFhLThhOTMtYjEyN2U1OTc1MjBlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "One Piece: Stampede",
      Year: "2019",
      imdbID: "tt9430698",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BM2MxY2QwYTAtMDM1My00MTc0LWEwZjktMDdjODY2NWJiNDg2XkEyXkFqcGdeQXVyODY3ODQ2MTk@._V1_SX300.jpg",
    },
    {
      Title: "One Piece Film: Gold",
      Year: "2016",
      imdbID: "tt5251328",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzBiMTlhNTAtNDc4Yi00M2FiLWE3ODMtNzgwNWI3ZGFhYjNkXkEyXkFqcGdeQXVyMjQ5NjMxNDA@._V1_SX300.jpg",
    },
    {
      Title: "One piece the movie: Kaisokuou ni ore wa naru",
      Year: "2000",
      imdbID: "tt0814243",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNGU4YzAxOTQtOTk5Yi00MGI3LThiMDMtMzZhMmEwNDBlN2E3XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "One piece: Nejimaki shima no bôken",
      Year: "2001",
      imdbID: "tt0832449",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjAwMjk1NWQtMzY3ZS00Nzk1LWFmNTYtNDE5YjZiNGZjY2Q4XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "One piece: Dead end no bôken",
      Year: "2003",
      imdbID: "tt1006926",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMDExNjM1NmQtNjkxZi00N2Q5LWFjNjItOGVkMTUzNTFkYWVkXkEyXkFqcGdeQXVyMjAwMzU2MDY@._V1_SX300.jpg",
    },
    {
      Title: "One piece: Omatsuri danshaku to himitsu no shima",
      Year: "2005",
      imdbID: "tt1018764",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNWFiYjM4NGEtZGVlNi00MDQ4LWFjZjMtYmRiZjU0Zjc4NzRmXkEyXkFqcGdeQXVyMjAwMzU2MDY@._V1_SX300.jpg",
    },
    {
      Title: "One Piece: The Cursed Holy Sword",
      Year: "2004",
      imdbID: "tt1010435",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZWRkZjlkNzItZWRiOS00NDcwLTljNjQtODQxZjgyNDE4YzMyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
  ],
  totalResults: "73",
  Response: "True",
};

const movieDetail = {
  Title: "One Piece: Strong World",
  Year: "2009",
  Rated: "TV-14",
  Released: "19 Nov 2013",
  Runtime: "113 min",
  Genre: "Animation, Action, Adventure, Fantasy",
  Director: "Munehisa Sakai",
  Writer:
    "Eiichiro Oda (story and characters), Eiichiro Oda (story), Hirohiko Uesaka (screenplay)",
  Actors: "Felecia Angelle, Bryan Baker, Jeff Banks, Christopher Bevins",
  Plot: "Its a normal day on the Thousand Sunny until Nami reads the newspaper to the rest of the crew about the East Blue being attacked. Luffy then decides that they will go back to the East Blue to help out. Seconds later a big floating ship passes over the Sunny and Nami wishes to warn them about a storm coming by. The captain, impressed by Nami's navigating skills, tricks the Straw Hats and kidnaps Nami. Will the crew be able to save her, or will she join the other crew instead?",
  Language: "Japanese",
  Country: "Japan",
  Awards: "6 nominations.",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMmIyNGQ3NmEtNGZkNi00MDFhLThhOTMtYjEyN2U1OTc1MjBlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  Ratings: [
    { Source: "Internet Movie Database", Value: "7.6/10" },
    { Source: "Rotten Tomatoes", Value: "88%" },
  ],
  Metascore: "N/A",
  imdbRating: "7.6",
  imdbVotes: "4,729",
  imdbID: "tt1485763",
  Type: "movie",
  DVD: "25 Nov 2020",
  BoxOffice: "N/A",
  Production: "Toei Animation",
  Website: "N/A",
  Response: "True",
};

// ambil array hasil search aja
const allSearchData = queryResults.Search;

allSearchData.forEach((movieData, i) => {
  i++;
  document
    .getElementById("card-wrapper")
    .insertAdjacentHTML("beforeend", CardSingleSearch(i, movieData));
  if (idx % 5 === 0 || allSearchData.length === idx) {
    document
      .getElementById(`card-${idx}`)
      .insertAdjacentHTML("afterend", CardSeparator(idx, allSearchData.length));
  }
});
















// (
//   // // looping sampai i untuk generate array artificial dataset
//   // const arrs = (n) => {
//   //   let loops = [];
//   //   for (let i = 0; i < n; i++) loops.push(i);
//   //   return loops;
//   // };

//   // // inisialisasi artifical dataset
//   // const arrsData = arrs(25);

//   // // render ke html artifical dataset
//   // arrsData.forEach((_, idx) => {
//   //   idx++;
//   //   document
//   //     .getElementById("card-wrapper")
//   //     .insertAdjacentHTML("beforeend", CardSingleSearch(idx, data));
//   //   if (idx % 5 === 0 || arrsData.length === idx) {
//   //     document
//   //       .getElementById(`card-${idx}`)
//   //       .insertAdjacentHTML("afterend", CardSeparator(idx, arrsData.length));
//   //   }
//   // });
// )