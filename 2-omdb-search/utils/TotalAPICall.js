/**
 * 
 * Get total API call has been made today.
 * 
 * @returns object
 */
export const GetTotalAPICall = () => {
  const totalAPICallName = `totalAPICall#${new Date().toLocaleDateString()}`;
  let totalAPICall = localStorage.getItem(totalAPICallName);

  return {totalAPICall, totalAPICallName};
};

/**
 * 
 * Add +1 to the localStorage item.
 * 
 * @param {any} key Set the key name
 * @param {any} value Set the key value
 * @returns true | throw Error
 */
export const AddTotalAPICall = (key, value) => {
  try {
    // localStorage.setItem(totalAPICallName, totalAPICall++);
    localStorage.setItem(key, value++);

    return true;
  } catch (err) {
    throw new Error(err);
  }
};
