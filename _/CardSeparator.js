export const CardSeparator = (idx, dataLength) => `
  <div class="flex w-full max-w-lg mx-auto my-4 md:w-3/4 md:max-w-4xl">
    <div class="w-full h-2 my-auto rounded-xl bg-gray-700"></div>
    <h6 class="w-1/2 text-xs text-center text-gray-400 md:text-base">
      ${idx} of ${dataLength}
    </h6>
  <div class="w-full h-2 my-auto rounded-xl bg-gray-700"></div>
`;
