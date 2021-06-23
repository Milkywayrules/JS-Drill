/**
 *
 * Get total API call has been made today.
 *
 * @returns Object = {totalAPICall, totalAPICallName}
 */
export const GetTotalAPICallToday = (isNumber = true) => {
  const totalAPICallNameToday = `totalAPICall#${new Date().toLocaleDateString()}`;

  const totalAPICallToday = isNumber
    ? parseInt(localStorage.getItem(totalAPICallNameToday))
    : localStorage.getItem(totalAPICallNameToday);
  
    // if (isNumber) {
    //   var totalAPICall = parseInt(localStorage.getItem(totalAPICallName))
    //   console.log("TotalAPICall/1", totalAPICall, typeof totalAPICall, isNumber);
    // } else {
    //   var totalAPICall = localStorage.getItem(totalAPICallName)
    //   console.log("TotalAPICall/1", totalAPICall, typeof totalAPICall, isNumber);
    // }


  return { totalAPICallToday, totalAPICallNameToday };
};

/**
 *
 * Add +1 to the localStorage item.
 *
 * @param {any} key Set the key name
 * @param {any} value Set the key value
 * @returns true | throw Error
 */
export const AddTotalAPICall = (totalAPICallName, totalAPICall) => {
  // let { totalAPICall, totalAPICallName } = GetTotalAPICall();
  // console.error(totalAPICall, typeof(totalAPICall));
  localStorage.setItem(totalAPICallName, totalAPICall);
};
