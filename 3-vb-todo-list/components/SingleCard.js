/**
 *
 * Single card for to-do list.
 *
 * @returns HTML Template string
 */
export const SingleCard = `
  <!-- card-wrapper -->
  <div id="card-wrapper" class="flex flex-col hover:drop-shadow-xl">
    <a href="" onclick="event.preventDefault()" class="bg-white rounded z-10 ring-indigo-300 focus:ring-4 focus:shadow-xl">
      <p class="px-5 py-6 text-gray-900">Do something really productive.</p>

      <div class="flex text-center z-10 ">
        <div class="w-1/2 py-2 rounded-bl bg-gray-100 hover:bg-indigo-200">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mx-auto text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </div>

        <div class="w-1/2 py-2 rounded-br bg-gray-100 hover:bg-red-200">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mx-auto text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </div>
      </div>

    </a>
    <div class="h-6 mx-2 z-0 -translate-y-4 bg-gray-300 rounded"></div>
  </div>
  <!-- /card-wrapper -->
`;
