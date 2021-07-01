
/**
 * 
 * set darkmode lightmode based on localStorage data
 * 
 * @param {*} isDarkMode 
 * @returns 
 */
function setDarkLightMode (isDarkMode) {
  const htmlClassList = document.querySelector("html").classList
  // 
  if (isDarkMode) htmlClassList.replace("light", "dark")
  else htmlClassList.replace("dark", "light")

  return isDarkMode;
}

/**
 * 
 * @returns 
 */
function getDarkLightMode () {
  // 
  let jsDrillTodoListDarkModeKey = "jsDrillTodoListDarkMode";
  let isDarkMode;
  // 
  if (localStorage.getItem(jsDrillTodoListDarkModeKey)) {
    isDarkMode = localStorage.getItem("jsDrillTodoListDarkMode") === "true" ? true : false
    setDarkLightMode(isDarkMode)

    return isDarkMode
  } else {
    // 
    localStorage.setItem(jsDrillTodoListDarkModeKey, "false")
    isDarkMode = false

    return isDarkMode
  }
}

export { setDarkLightMode, getDarkLightMode }