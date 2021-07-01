import Swal from "sweetalert2";

/**
 * 
 * 
 * 
 * @param {*} confirmButtonText 
 * @param {*} anyCustomClass 
 * @param {*} timer 
 * @param {*} position 
 * @returns 
 * 
 */
const fullBtnToast = ({
  confirmButtonText,
  anyCustomClass = 'default',
  timer = 3000,
  position = "top-end",
}) => {
  // set base styling for all button, then apply to specific style button.
  const baseBtn = "w-full mx-auto py-1 px-4 rounded font-bold";
  const greenBtn = `${baseBtn} text-green-700 bg-green-100 hover:bg-green-300 ring-green-600 focus:ring-4`;
  const blueBtn = `${baseBtn} text-blue-700 bg-blue-100 hover:bg-blue-300 ring-blue-600 focus:ring-4`;
  const yellowBtn = `${baseBtn} text-yellow-700 bg-yellow-100 hover:bg-yellow-300 ring-yellow-600 focus:ring-4`;
  const redBtn = `${baseBtn} text-red-700 bg-red-100 hover:bg-red-300 ring-red-600 focus:ring-4`;
  const pinkBtn = `${baseBtn} text-pink-700 bg-pink-100 hover:bg-pink-300 ring-pink-600 focus:ring-4`;
  const indigoBtn = `${baseBtn} text-indigo-700 bg-indigo-100 hover:bg-indigo-300 ring-indigo-600 focus:ring-4`;

  // initialize confirmButtonStyle
  let confirmButtonStyle

  // kalo gaada parameter untuk customClass.confirmButton, pake kelas custom. (DEFAULT)
  if (anyCustomClass == 'default') confirmButtonStyle = greenBtn
  else if (anyCustomClass == 'green' || anyCustomClass == 'success') confirmButtonStyle = greenBtn
  else if (anyCustomClass == 'blue' || anyCustomClass == 'info') confirmButtonStyle = blueBtn
  else if (anyCustomClass == 'yellow' || anyCustomClass == 'warning') confirmButtonStyle = yellowBtn
  else if (anyCustomClass == 'red' || anyCustomClass == 'danger') confirmButtonStyle = redBtn
  else if (anyCustomClass == 'pink' || anyCustomClass == 'primary') confirmButtonStyle = pinkBtn
  else if (anyCustomClass == 'indigo' || anyCustomClass == 'secondary') confirmButtonStyle = indigoBtn
  else if (anyCustomClass == 'undoConfirm') confirmButtonStyle = yellowBtn
  else confirmButtonStyle = pinkBtn

  // default options
  const opts = {
    showCloseButton: true,
    toast: true,
    position: position, // 'top', 'top-start', 'top-end', 'center', 'center-start', 'center-end', 'bottom', 'bottom-start', or 'bottom-end'.
    showConfirmButton: true, // always true, bcs this is fullBtnToast ~_~
    confirmButtonText: confirmButtonText,
    buttonsStyling: false, // always false, always need custom style to override the default
    customClass: {
      confirmButton: confirmButtonStyle
    },
    timer: timer,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  }

  return Swal.mixin(opts);
};

/**
 *
 * @param {*} title
 * @param {*} iconType
 */
const basicToast = (title, iconType) => {
  Swal.mixin({
    showCloseButton: true,
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  }).fire({
    icon: iconType,
    title: title,
  });
};

/**
 * 
 * @param {*} param0 
 */
function boilerplateToast({ iconType, title, toastType, opts}, toastRole = null, dataToUndo = null) {
  // choose wheter "basic w/o button" or go for "full button"
  if (toastType == "basic") {
    basicToast(title, iconType);
  } else if (toastType == "fullBtn") {
    // default opts value
    const optsDefault = { anyCustomClass: 'default', timer: 5000, position: "top-end" }
    opts = { ...optsDefault, ...opts }

    // 
    return fullBtnToast(opts)
      .fire({
        icon: iconType,
        title: title,
      })
      .then((toastStatus) => {
        // 
        if (toastStatus.isConfirmed == true) {
          // 
          if (toastRole == "undo" && dataToUndo != null) {
            return undoClearAllTodosCallback(dataToUndo)
          } else if (toastRole == "refreshPage") {
            return location.reload()
          }
        }
      })
      // we can use .then here
  }
}


/**
 * 
 * success toast with "basic w/o button" or go for "full button".
 * 
 * @param {Object} param0 title, toastType, opts = {confirmButtonText, anyCustomClass}
 */
const successToast = ({ title, toastType = "basic", opts = {confirmButtonText: "OK", anyCustomClass: "success"} }) => {
  // Fill all the params then boilerplateToast() will decide it for you
  boilerplateToast({ iconType: "success", title, toastType, opts })
};

/**
 * 
 * info toast with "basic w/o button" or go for "full button".
 * 
 * @param {Object} param0 title, toastType, opts = {confirmButtonText, anyCustomClass}
 */
const infoToast = ({ title, toastType = "basic", opts = {confirmButtonText: "OK", anyCustomClass: "info"} }) => {
  const optsDefault = {confirmButtonText: "OK", anyCustomClass: "info"}
  opts = { ...optsDefault, ...opts }

  // Fill all the params then boilerplateToast() will decide it for you
  boilerplateToast({ iconType: "info", title, toastType, opts }, "refreshPage")
};

/**
 * 
 * warning toast with "basic w/o button" or go for "full button".
 * 
 * @param {Object} param0 title, toastType, opts = {confirmButtonText, anyCustomClass}
 */
const warningToast = ({ title, toastType = "basic", opts = {confirmButtonText: "OK", anyCustomClass: "warning"} }) => {
  // Fill all the params then boilerplateToast() will decide it for you
  boilerplateToast({ iconType: "warning", title, toastType, opts })
};

/**
 * 
 * question toast with "basic w/o button" or go for "full button".
 * 
 * @param {Object} param0 title, toastType, opts = {confirmButtonText, anyCustomClass}
 */
const questionToast = ({ title, toastType = "basic", opts = {confirmButtonText: "OK", anyCustomClass: "question"} }) => {
  // Fill all the params then boilerplateToast() will decide it for you
  boilerplateToast({ iconType: "question", title, toastType, opts })
};

/**
 * 
 * danger toast with "basic w/o button" or go for "full button".
 * 
 * @param {Object} param0 title, toastType, opts = {confirmButtonText, anyCustomClass}
 */
const dangerToast = ({ title, toastType = "basic", opts = {confirmButtonText: "OK", anyCustomClass: "danger"} }) => {
  // Fill all the params then boilerplateToast() will decide it for you
  boilerplateToast({ iconType: "error", title, toastType, opts })
};

/**
 * 
 * primary toast with "basic w/o button" or go for "full button".
 * 
 * @param {Object} param0 title, toastType, opts = {confirmButtonText, anyCustomClass}
 */
const primaryToast = ({ title, toastType = "basic", opts = {confirmButtonText: "OK", anyCustomClass: "primary"} }) => {
  // Fill all the params then boilerplateToast() will decide it for you
  boilerplateToast({ iconType: "primary", title, toastType, opts })
};

/**
 * 
 * secondary toast with "basic w/o button" or go for "full button".
 * 
 * @param {Object} param0 title, toastType, opts = {confirmButtonText, anyCustomClass}
 */
const secondaryToast = ({ title, toastType = "basic", opts = {confirmButtonText: "OK", anyCustomClass: "secondary"} }) => {
  // Fill all the params then boilerplateToast() will decide it for you
  boilerplateToast({ iconType: "secondary", title, toastType, opts })
};

/**
 * 
 * undoConfirm toast with "basic w/o button" or go for "full button".
 * 
 * @param {Object} param0 title, toastType, opts = {confirmButtonText, anyCustomClass}
 */
const undoConfirmToast = ({ title, toastType = "fullBtn", opts: optsArgs = {confirmButtonText: "Undo", anyCustomClass: "undoConfirm"} }, dataToUndo) => {
  // whether the params are supplied or not, the default value will remain
  const optsDefault = {confirmButtonText: "Undo", anyCustomClass: "undoConfirm"}
  const opts = {...optsDefault, ...optsArgs}
  // Fill all the params then boilerplateToast() will decide it for you
  var toastRole = "undo"

  boilerplateToast({ iconType: "success", title, toastType, opts }, toastRole, dataToUndo)
};


/**
 * 
 * Using Memento pattern for undo the clear all todos.
 * see ref: https://stackoverflow.com/questions/54416318/how-to-make-a-undo-redo-function#answer-54416376
 * 
 * @param {*} dataToUndo 
 * @returns 
 */
export function undoClearAllTodosCallback(dataToUndo) {
  try {
    // undoDeleteMyTodoLists
    localStorage.setItem("myTodoList", JSON.stringify(dataToUndo))

    infoToast({
      title: "Your data is back! Please refresh the page.",
      toastType: "fullBtn",
      opts: { confirmButtonText: "Refresh now" }
    })

    setTimeout(() => {
      location.reload()
    }, 5000);

    return 'true'
  } catch (e) {
    console.error(e);
    return 'false'
  }
}



export {
  successToast,
  infoToast,
  dangerToast,
  warningToast,
  questionToast,
  primaryToast,
  secondaryToast,
  undoConfirmToast
};
