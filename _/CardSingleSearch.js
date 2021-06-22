import { CardInfo } from "./CardInfo.js";

export const CardSingleSearch = (
  idx,
  {
    Poster,
    Title,
    Genre,
    Runtime,
    Released,
    Metascore,
    imdbRating,
    Rated,
    Plot,
  }
) => `
  <div
    id="card-${idx}"
    class="max-w-md mx-auto shadow-md overflow-hidden md:max-w-4xl"
  >
    <div
      class="
        rounded-xl
        border-4 border-transparent
        overflow-hidden
        transition-color
        duration-150
        hover:border-pink-600
        md:flex
      "
    >

      <div class="overflow-hidden md:flex-shrink-0">
        <a href="#">
          <img
            class="
              h-full
              w-full
              object-cover
              transition-transform
              duration-300
              transform
              hover:scale-105
              md:w-48
            "
            src="${Poster}"
            alt="${Title} Poster Image"
          />
        </a>
      </div>

      <div class="p-8 bg-white">
        <a
          href="#"
          class="
            text-2xl
            leading-tight
            font-bold
            text-indigo-500
            transition-color
            duration-300
            hover:text-indigo-700
            hover:underline
          "
        >
          ${Title}
        </a>

        <div
          class="
            mt-2
            w-full
            md:w-full
            grid grid-cols-5 grid-rows-4 grid-flow-row
            gap-1
          "
        >
          ${CardInfo({
            Class: "col-span-5 md:col-span-3",
            TooltipTitle: "Genre",
            Svg: '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"/></svg>',
            TextId: "_genre",
            Text: Genre,
          })}
          ${CardInfo({
            Class: "col-span-2 md:col-span-1 md:row-start-2",
            TooltipTitle: "Total runtime",
            Svg: '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
            TextId: "_runtime",
            Text: Runtime,
          })}
          ${CardInfo({
            Class: "col-span-2 md:col-span-1 md:row-start-2",
            TooltipTitle: "Released date",
            Svg: '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>',
            TextId: "_released",
            Text: Released,
          })}
          ${CardInfo({
            Class: "col-span-2 md:col-span-1 md:row-start-3",
            TooltipTitle: "Metascore rating",
            Svg: '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>',
            TextId: "_metascore",
            Text: Metascore,
          })}
          ${CardInfo({
            Class: "col-span-2 md:col-span-1 md:row-start-3",
            TooltipTitle: "IMDB rating",
            Svg: '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>',
            TextId: "_imdbRating",
            Text: imdbRating,
          })}
          ${CardInfo({
            Class: "col-span-2 md:col-span-1 md:row-start-4",
            TooltipTitle: "Rated",
            Svg: '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"/></svg>',
            TextId: "_rated",
            Text: Rated,
          })}
        </div>

        <p class="mt-4 text-gray-700">
          ${Plot}
        </p>
      </div>

      </div>
  </div>
`;
