/**
 * 
 * Single card HTML for to-do list.
 * 
 * @param {Object} param0 CardID, to-do status, to-do text
 * @returns HTML template string
 */
export const SingleCard = ({ cardID, cardStatus, todoText }) => {
  let greenClass = " bg-green-100 border-green-300 hover:bg-green-200 lg:bg-green-50 lg:hover:bg-green-100 active:bg-green-200 "
  let redClass = " bg-red-100 border-red-300 lg:bg-red-50 lg:hover:bg-red-100 active:bg-red-200 "

  let checkSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" class="mt-1 h-5 w-5 mx-auto text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
    </svg>
  `;
  let crossSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" class="mt-1 h-5 w-5 mx-auto text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
  `;
  
  cardStatus = parseInt(cardStatus)
  
  const checkOrCross = cardStatus ? "Cross undone button" : "Check done button"
  const injectedSVG = cardStatus ? crossSVG : checkSVG
  const injectedClass = cardStatus ? redClass : greenClass

  return `
    <!-- card-wrapper -->
    <div id="${cardID}-cardWrapperOuter" data-id="${cardID}" data-status="${cardStatus}" class="flex flex-col drop-shadow-lg hover:drop-shadow-xl">
      <button id="${cardID}-cardWrapper" class="bg-white rounded z-10 ring-indigo-300 focus:ring-4 focus:shadow-xl" title="#${cardID} ~ ${todoText}">
        
        <div id="${cardID}-textWrapper" class="flex flex-col lg:flex-row">
          <p id="${cardID}-text" class="w-full px-5 py-6 text-left text-gray-900 lg:w-11/12">
            Auto-generated temporary To-do.
          </p>
          <!-- checkOrCross done btn -->
          <div
            id="${cardID}-checkOrCross"
            class="flex w-full py-2 items-center shadow-inner border-b-2 lg:w-2/12 lg:w-1/12 lg:py-6 lg:rounded-r lg:border-b-0 lg:border-l-4 hidden ${injectedClass}"
            title="${checkOrCross}"
          >
            ${injectedSVG}
          </div>
          <!-- /checkOrCross done btn -->
        </div>

        <div id="${cardID}-modifyWrapper" class="flex text-center z-10 hidden">
          <!-- edit btn -->
          <div id="${cardID}-edit" class="w-1/2 py-2 rounded-bl bg-gray-100 hover:bg-indigo-200 active:bg-indigo-200 shadow-inner" title="Edit to-do button">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mx-auto text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </div>
          <!-- /edit btn -->

          <!-- delete btn -->
          <div id="${cardID}-delete" class="w-1/2 py-2 rounded-br bg-gray-100 hover:bg-red-200 active:bg-red-200 shadow-inner" title="Delete to-do button">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mx-auto text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </div>
          <!-- /delete btn -->
        </div>

      </button>
      <div id="${cardID}-cardBottom" class="h-6 mx-2 z-0 -translate-y-4 bg-gray-300 rounded"></div>
    </div>
    <!-- /card-wrapper -->
  `;
};


// const checkDoneBtn = (cardID, isShown = "block") => `
//   <!-- check done btn -->
//   <div id="${cardID}-check" class="flex w-full py-2 items-center bg-green-100 shadow-inner border-b-2 border-green-300 lg:w-2/12 lg:w-1/12 lg:py-6 lg:bg-green-50 lg:hover:bg-green-100 lg:rounded-r lg:border-b-0 lg:border-l-4 active:bg-green-200 ${isShown}" title="Check done button">
//     <svg xmlns="http://www.w3.org/2000/svg" class="mt-1 h-5 w-5 mx-auto text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
//     </svg>
//   </div>
//   <!-- /check done btn -->
// `;

// const crossUndoneBtn = (cardID, isShown = "block") => `
//   <!-- cross undone btn -->
//   <div id="${cardID}-cross" class="flex w-full py-2 items-center bg-red-100 shadow-inner border-b-2 border-red-300 lg:w-2/12 lg:w-1/12 lg:py-6 lg:bg-red-50 lg:hover:bg-red-100 lg:rounded-r lg:border-b-0 lg:border-l-4 active:bg-red-200 ${isShown}" title="Cross undone button">
//     <svg xmlns="http://www.w3.org/2000/svg" class="mt-1 h-5 w-5 mx-auto text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
//     </svg>
//   </div>
//   <!-- /cross undone btn -->
// `;


