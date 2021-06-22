// yg ini pake if else biar ke-handle ajasi
// yg component lain mah belom wkwk

export const CardInfo = ({ Class, TooltipTitle, Svg, TextId, Text }) => {
  if (
    Class === undefined ||
    TooltipTitle === undefined ||
    Svg === undefined ||
    TextId === undefined ||
    Text === undefined
  ) {
    throw new Error("Fill all the arguments needed.");
  } else {
    return `
      <small
        class="
          flex
          gap-1
          text-gray-500
          transition-color
          duration-300
          hover:text-indigo-700
          ${Class}
        "
        title="${TooltipTitle}"
      >
        ${Svg}
        </svg>
        <span id="${TextId}">${Text}</span>
      </small>
    `;
  }
};
