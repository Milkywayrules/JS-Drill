/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 415:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

;// CONCATENATED MODULE: ./src/env.js
var ENV = {
  DB_KEYNAME: "myTodoList",
  DB_DARKMODEKEYNAME: "jsDrillTodoListDarkMode"
};
;// CONCATENATED MODULE: ./src/components/SingleCard.js
/**
 * 
 * @param {*} cardID 
 * @param {*} cardStatus 
 * @returns 
 */
var checkOrCrossBtn = function checkOrCrossBtn(cardID, cardStatus) {
  // green for check button
  var greenClass = " bg-green-100 border-green-300 hover:bg-green-200 lg:bg-green-50 lg:hover:bg-green-100 active:bg-green-200 "; // red for cross button

  var redClass = " bg-red-100 border-red-300 hover:bg-red-200 lg:bg-red-50 lg:hover:bg-red-100 active:bg-red-200 "; // checkSVG for check button

  var checkSVG = "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"mt-1 h-5 w-5 mx-auto text-green-700\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5 13l4 4L19 7\" />\n    </svg>\n  "; // crossSVG for cross button

  var crossSVG = "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"mt-1 h-5 w-5 mx-auto text-red-700\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\" />\n    </svg>\n  "; // 

  var checkOrCross = cardStatus ? "Cross undone button" : "Check done button";
  var injectedSVG = cardStatus ? crossSVG : checkSVG;
  var injectedClass = cardStatus ? redClass : greenClass;
  return "\n      <div \n        class=\"\n          flex\n          w-full\n          py-2\n          items-center\n          shadow-inner\n          border-b-2\n          lg:w-2/12 lg:w-1/12 lg:py-6 lg:rounded-r lg:border-b-0 lg:border-l-4\n          ".concat(injectedClass, "\n        \"\n        title=\"").concat(checkOrCross, " - (ID:").concat(cardID, ")\"\n        >\n        ").concat(injectedSVG, "\n      </div>\n  ");
};
/**
 * 
 * Single card HTML for to-do list.
 * 
 * @param {Object} param0 CardID, to-do status, to-do text
 * @returns HTML template string
 */


var SingleCard = function SingleCard(_ref) {
  var cardID = _ref.cardID,
      cardStatus = _ref.cardStatus,
      todoText = _ref.todoText;
  var textDoneClass = "line-through bg-gray-500 focus:bg-gray-200 dark:bg-gray-600 dark:focus:bg-gray-400";
  var textNotDoneClass = "not-line-through bg-white focus:bg-white dark:bg-gray-50 dark:focus:bg-white";
  var textDoneOrNot = cardStatus ? textDoneClass : textNotDoneClass; // if true (done) show textDoneClass

  var bottomDoneClass = "bg-gray-600 dark:bg-gray-700";
  var bottomNotDoneClass = "bg-gray-300 dark:bg-gray-400";
  var bottomDoneOrNot = cardStatus ? bottomDoneClass : bottomNotDoneClass; // if true (done) show bottomDoneClass

  return "\n    <!-- card-wrapper -->\n    <div\n      id=\"".concat(cardID, "-cardWrapperOuter\"\n      data-id=\"").concat(cardID, "\"\n      data-status=\"").concat(cardStatus, "\"\n      class=\"flex flex-col drop-shadow-lg hover:drop-shadow-xl\"\n    >\n      <button\n        id=\"").concat(cardID, "-cardWrapper\"\n        class=\"\n          rounded\n          z-10\n          ring-indigo-300\n          focus:ring-4\n          focus:shadow-xl\n          dark:focus:ring-4\n          dark:focus:ring-indigo-300\n          dark:focus:ring-offset-2\n          dark:focus:ring-offset-indigo-900\n          ").concat(textDoneOrNot, "\n        \"\n        title=\"#").concat(cardID, " ~ ").concat(todoText.substr(0, 200), "\"\n      >\n        <div id=\"").concat(cardID, "-textWrapper\" class=\"flex flex-col lg:flex-row\">\n          <p\n            id=\"").concat(cardID, "-text\"\n            class=\"w-full px-5 py-6 text-left text-gray-900 lg:w-11/12\"\n          >\n            --- Auto-generated temporary To-do. ---\n          </p>\n          <!-- checkOrCross done btn -->\n          <div id=\"").concat(cardID, "-checkOrCross\" class=\"hidden\">\n            ").concat(checkOrCrossBtn(cardID, cardStatus), "\n          </div>\n          <!-- /checkOrCross done btn -->\n        </div>\n    \n        <div id=\"").concat(cardID, "-modifyWrapper\" class=\"flex text-center z-10 hidden\">\n          <!-- edit btn -->\n          <div\n            id=\"").concat(cardID, "-edit\"\n            class=\"\n              w-1/2\n              py-2\n              rounded-bl\n              bg-gray-100\n              hover:bg-indigo-200\n              active:bg-indigo-200\n              shadow-inner\n              dark:bg-gray-300\n              dark:hover:bg-indigo-200\n            \"\n            title=\"Edit to-do button (ID:").concat(cardID, ")\"\n          >\n            <svg\n              xmlns=\"http://www.w3.org/2000/svg\"\n              class=\"h-4 w-4 mx-auto text-indigo-700\"\n              fill=\"none\"\n              viewBox=\"0 0 24 24\"\n              stroke=\"currentColor\"\n            >\n              <path\n                stroke-linecap=\"round\"\n                stroke-linejoin=\"round\"\n                stroke-width=\"2\"\n                d=\"M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z\"\n              />\n            </svg>\n          </div>\n          <!-- /edit btn -->\n    \n          <!-- delete btn -->\n          <div\n            id=\"").concat(cardID, "-delete\"\n            class=\"\n              w-1/2\n              py-2\n              rounded-br\n              bg-gray-100\n              hover:bg-red-200\n              active:bg-red-200\n              shadow-inner\n              dark:bg-gray-300\n              dark:hover:bg-red-200\n            \"\n            title=\"Delete to-do button (ID:").concat(cardID, ")\"\n          >\n            <svg\n              xmlns=\"http://www.w3.org/2000/svg\"\n              class=\"h-4 w-4 mx-auto text-red-700 dark:text-red-500\"\n              fill=\"none\"\n              viewBox=\"0 0 24 24\"\n              stroke=\"currentColor\"\n            >\n              <path\n                stroke-linecap=\"round\"\n                stroke-linejoin=\"round\"\n                stroke-width=\"2\"\n                d=\"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16\"\n              />\n            </svg>\n          </div>\n          <!-- /delete btn -->\n        </div>\n      </button>\n      <div\n        id=\"").concat(cardID, "-cardBottom\"\n        class=\"h-6 mx-2 z-0 -translate-y-4 rounded ").concat(bottomDoneOrNot, "\"\n      ></div>\n    </div>\n    <!-- /card-wrapper -->  \n  ");
};


// EXTERNAL MODULE: ./node_modules/sweetalert2/dist/sweetalert2.all.js
var sweetalert2_all = __webpack_require__(455);
var sweetalert2_all_default = /*#__PURE__*/__webpack_require__.n(sweetalert2_all);
;// CONCATENATED MODULE: ./src/utils/SwalToast.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


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

var fullBtnToast = function fullBtnToast(_ref) {
  var confirmButtonText = _ref.confirmButtonText,
      _ref$anyCustomClass = _ref.anyCustomClass,
      anyCustomClass = _ref$anyCustomClass === void 0 ? 'default' : _ref$anyCustomClass,
      _ref$timer = _ref.timer,
      timer = _ref$timer === void 0 ? 3000 : _ref$timer,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? "top-end" : _ref$position;
  // set base styling for all button, then apply to specific style button.
  var baseBtn = "w-full mx-auto py-1 px-4 rounded font-bold";
  var greenBtn = "".concat(baseBtn, " text-green-700 bg-green-100 hover:bg-green-300 ring-green-600 focus:ring-4");
  var blueBtn = "".concat(baseBtn, " text-blue-700 bg-blue-100 hover:bg-blue-300 ring-blue-600 focus:ring-4");
  var yellowBtn = "".concat(baseBtn, " text-yellow-700 bg-yellow-100 hover:bg-yellow-300 ring-yellow-600 focus:ring-4");
  var redBtn = "".concat(baseBtn, " text-red-700 bg-red-100 hover:bg-red-300 ring-red-600 focus:ring-4");
  var pinkBtn = "".concat(baseBtn, " text-pink-700 bg-pink-100 hover:bg-pink-300 ring-pink-600 focus:ring-4");
  var indigoBtn = "".concat(baseBtn, " text-indigo-700 bg-indigo-100 hover:bg-indigo-300 ring-indigo-600 focus:ring-4"); // initialize confirmButtonStyle

  var confirmButtonStyle; // kalo gaada parameter untuk customClass.confirmButton, pake kelas custom. (DEFAULT)

  if (anyCustomClass == 'default') confirmButtonStyle = greenBtn;else if (anyCustomClass == 'green' || anyCustomClass == 'success') confirmButtonStyle = greenBtn;else if (anyCustomClass == 'blue' || anyCustomClass == 'info') confirmButtonStyle = blueBtn;else if (anyCustomClass == 'yellow' || anyCustomClass == 'warning') confirmButtonStyle = yellowBtn;else if (anyCustomClass == 'red' || anyCustomClass == 'danger') confirmButtonStyle = redBtn;else if (anyCustomClass == 'pink' || anyCustomClass == 'primary') confirmButtonStyle = pinkBtn;else if (anyCustomClass == 'indigo' || anyCustomClass == 'secondary') confirmButtonStyle = indigoBtn;else if (anyCustomClass == 'undoConfirm') confirmButtonStyle = yellowBtn;else confirmButtonStyle = pinkBtn; // default options

  var opts = {
    showCloseButton: true,
    toast: true,
    position: position,
    // 'top', 'top-start', 'top-end', 'center', 'center-start', 'center-end', 'bottom', 'bottom-start', or 'bottom-end'.
    showConfirmButton: true,
    // always true, bcs this is fullBtnToast ~_~
    confirmButtonText: confirmButtonText,
    buttonsStyling: false,
    // always false, always need custom style to override the default
    customClass: {
      confirmButton: confirmButtonStyle
    },
    timer: timer,
    timerProgressBar: true,
    didOpen: function didOpen(toast) {
      toast.addEventListener('mouseenter', (sweetalert2_all_default()).stopTimer);
      toast.addEventListener('mouseleave', (sweetalert2_all_default()).resumeTimer);
    }
  };
  return sweetalert2_all_default().mixin(opts);
};
/**
 *
 * @param {*} title
 * @param {*} iconType
 */


var basicToast = function basicToast(title, iconType) {
  sweetalert2_all_default().mixin({
    showCloseButton: true,
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: function didOpen(toast) {
      toast.addEventListener("mouseenter", (sweetalert2_all_default()).stopTimer);
      toast.addEventListener("mouseleave", (sweetalert2_all_default()).resumeTimer);
    }
  }).fire({
    icon: iconType,
    title: title
  });
};
/**
 * 
 * @param {*} param0 
 */


function boilerplateToast(_ref2) {
  var iconType = _ref2.iconType,
      title = _ref2.title,
      toastType = _ref2.toastType,
      opts = _ref2.opts;
  var toastRole = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var dataToUndo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  // choose wheter "basic w/o button" or go for "full button"
  if (toastType == "basic") {
    basicToast(title, iconType);
  } else if (toastType == "fullBtn") {
    // default opts value
    var optsDefault = {
      anyCustomClass: 'default',
      timer: 5000,
      position: "top-end"
    };
    opts = _objectSpread(_objectSpread({}, optsDefault), opts); // 

    return fullBtnToast(opts).fire({
      icon: iconType,
      title: title
    }).then(function (toastStatus) {
      // 
      if (toastStatus.isConfirmed == true) {
        // 
        if (toastRole == "undo" && dataToUndo != null) {
          return undoClearAllTodosCallback(dataToUndo);
        } else if (toastRole == "refreshPage") {
          return location.reload();
        }
      }
    }); // we can use .then here
  }
}
/**
 * 
 * success toast with "basic w/o button" or go for "full button".
 * 
 * @param {Object} param0 title, toastType, opts = {confirmButtonText, anyCustomClass}
 */


var successToast = function successToast(_ref3) {
  var title = _ref3.title,
      _ref3$toastType = _ref3.toastType,
      toastType = _ref3$toastType === void 0 ? "basic" : _ref3$toastType,
      _ref3$opts = _ref3.opts,
      opts = _ref3$opts === void 0 ? {
    confirmButtonText: "OK",
    anyCustomClass: "success"
  } : _ref3$opts;
  // Fill all the params then boilerplateToast() will decide it for you
  boilerplateToast({
    iconType: "success",
    title: title,
    toastType: toastType,
    opts: opts
  });
};
/**
 * 
 * info toast with "basic w/o button" or go for "full button".
 * 
 * @param {Object} param0 title, toastType, opts = {confirmButtonText, anyCustomClass}
 */


var infoToast = function infoToast(_ref4) {
  var title = _ref4.title,
      _ref4$toastType = _ref4.toastType,
      toastType = _ref4$toastType === void 0 ? "basic" : _ref4$toastType,
      _ref4$opts = _ref4.opts,
      opts = _ref4$opts === void 0 ? {
    confirmButtonText: "OK",
    anyCustomClass: "info"
  } : _ref4$opts;
  var optsDefault = {
    confirmButtonText: "OK",
    anyCustomClass: "info"
  };
  opts = _objectSpread(_objectSpread({}, optsDefault), opts); // Fill all the params then boilerplateToast() will decide it for you

  boilerplateToast({
    iconType: "info",
    title: title,
    toastType: toastType,
    opts: opts
  }, "refreshPage");
};
/**
 * 
 * warning toast with "basic w/o button" or go for "full button".
 * 
 * @param {Object} param0 title, toastType, opts = {confirmButtonText, anyCustomClass}
 */


var warningToast = function warningToast(_ref5) {
  var title = _ref5.title,
      _ref5$toastType = _ref5.toastType,
      toastType = _ref5$toastType === void 0 ? "basic" : _ref5$toastType,
      _ref5$opts = _ref5.opts,
      opts = _ref5$opts === void 0 ? {
    confirmButtonText: "OK",
    anyCustomClass: "warning"
  } : _ref5$opts;
  // Fill all the params then boilerplateToast() will decide it for you
  boilerplateToast({
    iconType: "warning",
    title: title,
    toastType: toastType,
    opts: opts
  });
};
/**
 * 
 * question toast with "basic w/o button" or go for "full button".
 * 
 * @param {Object} param0 title, toastType, opts = {confirmButtonText, anyCustomClass}
 */


var questionToast = function questionToast(_ref6) {
  var title = _ref6.title,
      _ref6$toastType = _ref6.toastType,
      toastType = _ref6$toastType === void 0 ? "basic" : _ref6$toastType,
      _ref6$opts = _ref6.opts,
      opts = _ref6$opts === void 0 ? {
    confirmButtonText: "OK",
    anyCustomClass: "question"
  } : _ref6$opts;
  // Fill all the params then boilerplateToast() will decide it for you
  boilerplateToast({
    iconType: "question",
    title: title,
    toastType: toastType,
    opts: opts
  });
};
/**
 * 
 * danger toast with "basic w/o button" or go for "full button".
 * 
 * @param {Object} param0 title, toastType, opts = {confirmButtonText, anyCustomClass}
 */


var dangerToast = function dangerToast(_ref7) {
  var title = _ref7.title,
      _ref7$toastType = _ref7.toastType,
      toastType = _ref7$toastType === void 0 ? "basic" : _ref7$toastType,
      _ref7$opts = _ref7.opts,
      opts = _ref7$opts === void 0 ? {
    confirmButtonText: "OK",
    anyCustomClass: "danger"
  } : _ref7$opts;
  // Fill all the params then boilerplateToast() will decide it for you
  boilerplateToast({
    iconType: "error",
    title: title,
    toastType: toastType,
    opts: opts
  });
};
/**
 * 
 * primary toast with "basic w/o button" or go for "full button".
 * 
 * @param {Object} param0 title, toastType, opts = {confirmButtonText, anyCustomClass}
 */


var primaryToast = function primaryToast(_ref8) {
  var title = _ref8.title,
      _ref8$toastType = _ref8.toastType,
      toastType = _ref8$toastType === void 0 ? "basic" : _ref8$toastType,
      _ref8$opts = _ref8.opts,
      opts = _ref8$opts === void 0 ? {
    confirmButtonText: "OK",
    anyCustomClass: "primary"
  } : _ref8$opts;
  // Fill all the params then boilerplateToast() will decide it for you
  boilerplateToast({
    iconType: "primary",
    title: title,
    toastType: toastType,
    opts: opts
  });
};
/**
 * 
 * secondary toast with "basic w/o button" or go for "full button".
 * 
 * @param {Object} param0 title, toastType, opts = {confirmButtonText, anyCustomClass}
 */


var secondaryToast = function secondaryToast(_ref9) {
  var title = _ref9.title,
      _ref9$toastType = _ref9.toastType,
      toastType = _ref9$toastType === void 0 ? "basic" : _ref9$toastType,
      _ref9$opts = _ref9.opts,
      opts = _ref9$opts === void 0 ? {
    confirmButtonText: "OK",
    anyCustomClass: "secondary"
  } : _ref9$opts;
  // Fill all the params then boilerplateToast() will decide it for you
  boilerplateToast({
    iconType: "secondary",
    title: title,
    toastType: toastType,
    opts: opts
  });
};
/**
 * 
 * undoConfirm toast with "basic w/o button" or go for "full button".
 * 
 * @param {Object} param0 title, toastType, opts = {confirmButtonText, anyCustomClass}
 */


var undoConfirmToast = function undoConfirmToast(_ref10, dataToUndo) {
  var title = _ref10.title,
      _ref10$toastType = _ref10.toastType,
      toastType = _ref10$toastType === void 0 ? "fullBtn" : _ref10$toastType,
      _ref10$opts = _ref10.opts,
      optsArgs = _ref10$opts === void 0 ? {
    confirmButtonText: "Undo",
    anyCustomClass: "undoConfirm"
  } : _ref10$opts;
  // whether the params are supplied or not, the default value will remain
  var optsDefault = {
    confirmButtonText: "Undo",
    anyCustomClass: "undoConfirm"
  };

  var opts = _objectSpread(_objectSpread({}, optsDefault), optsArgs); // Fill all the params then boilerplateToast() will decide it for you


  var toastRole = "undo";
  boilerplateToast({
    iconType: "success",
    title: title,
    toastType: toastType,
    opts: opts
  }, toastRole, dataToUndo);
};
/**
 * 
 * Using Memento pattern for undo the clear all todos.
 * see ref: https://stackoverflow.com/questions/54416318/how-to-make-a-undo-redo-function#answer-54416376
 * 
 * @param {*} dataToUndo 
 * @returns 
 */


function undoClearAllTodosCallback(dataToUndo) {
  try {
    // undoDeleteMyTodoLists
    localStorage.setItem("myTodoList", JSON.stringify(dataToUndo));
    infoToast({
      title: "Your data is back! Please refresh the page.",
      toastType: "fullBtn",
      opts: {
        confirmButtonText: "Refresh now"
      }
    });
    setTimeout(function () {
      location.reload();
    }, 5000);
    return 'true';
  } catch (e) {
    console.error(e);
    return 'false';
  }
}

;// CONCATENATED MODULE: ./src/utils/LocalStorageUtils.js
function LocalStorageUtils_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function LocalStorageUtils_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { LocalStorageUtils_ownKeys(Object(source), true).forEach(function (key) { LocalStorageUtils_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { LocalStorageUtils_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function LocalStorageUtils_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 *
 * @param {number} id Must be a number type.
 * @returns
 */

function getStorageTodo() {
  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  if (id) {
    var myTodoLists = JSON.parse(localStorage.getItem(ENV.DB_KEYNAME));
    var myTodo = myTodoLists.find(function (todo) {
      return todo.ID === id;
    });
    return {
      myTodo: myTodo,
      myTodoLists: myTodoLists
    };
  } else {
    return JSON.parse(localStorage.getItem(ENV.DB_KEYNAME));
  }
}
/**
 *
 * @param {*} value
 * @param {*} key
 * @returns
 */


function setStorageTodo() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ENV.DB_KEYNAME;

  try {
    if (value) {
      if (typeof value === "string") {
        localStorage.setItem(key, value);
        return {
          isSuccess: true
        };
      } else if (typeof value === "boolean") {
        console.log("masuk");
      } else {
        localStorage.setItem(key, JSON.stringify(value));
        return {
          isSuccess: true
        };
      }
    }
  } catch (err) {
    var msg = "set storage for todo failed.";
    console.error(new Error(msg));
    warningToast({
      title: msg
    });
  }
}

function LocalStorageUtils_updateTodoLocStorage() {
  var todoID = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    ID: null,
    text: null,
    status: null
  };
  // default value to override with the input obj
  var dataDefault = {
    ID: null,
    text: null,
    status: null
  };
  data = LocalStorageUtils_objectSpread(LocalStorageUtils_objectSpread({}, dataDefault), data); // get specific todo item from localStorage and get all todos too

  var _getStorageTodo = getStorageTodo(todoID),
      myTodo = _getStorageTodo.myTodo,
      myTodoLists = _getStorageTodo.myTodoLists; //


  var newTodoLists = myTodoLists.map(function (rowTodo) {
    if (rowTodo.ID === myTodo.ID) {
      // keys are only 3: ID, text, and status. We never change the ID, so we change only these 2.
      rowTodo.text = data.text;
      rowTodo.status = data.status;
    }

    return rowTodo;
  }); //

  if (setStorageTodo(newTodoLists).isSuccess) {
    return {
      isSuccess: true
    };
  } else {
    return {
      isSuccess: false
    };
  }
}

function deleteTodoLocStorage() {
  var todoID = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  // get specific todo item from localStorage and get all todos too
  var _getStorageTodo2 = getStorageTodo(todoID),
      myTodo = _getStorageTodo2.myTodo,
      myTodoLists = _getStorageTodo2.myTodoLists; //


  var newTodoLists = myTodoLists.filter(function (rowTodo) {
    if (rowTodo.ID !== myTodo.ID) {
      return rowTodo;
    }
  }); //

  if (setStorageTodo(newTodoLists).isSuccess) {
    return {
      isSuccess: true
    };
  } else {
    return {
      isSuccess: false
    };
  }
}


;// CONCATENATED MODULE: ./src/utils/SwalAlert.js
function SwalAlert_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function SwalAlert_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SwalAlert_ownKeys(Object(source), true).forEach(function (key) { SwalAlert_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SwalAlert_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SwalAlert_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * 
 * @param {*} param0 
 * @returns 
 */

function inputText(_ref) {
  var title = _ref.title,
      _ref$opts = _ref.opts,
      opts = _ref$opts === void 0 ? {
    confirmButtonText: "Save"
  } : _ref$opts,
      _ref$thenOpts = _ref.thenOpts,
      thenOpts = _ref$thenOpts === void 0 ? {
    title: "Input success",
    toastType: "basic"
  } : _ref$thenOpts;
  // 
  var optsDefault = {
    input: "text",
    inputAttributes: {
      autocapitalize: "off"
    },
    showCancelButton: true,
    confirmButtonText: "Save"
  };
  opts = SwalAlert_objectSpread(SwalAlert_objectSpread({}, optsDefault), opts); // 

  var thenOptsDefault = {
    title: "Input success",
    toastType: "basic"
  };
  thenOpts = SwalAlert_objectSpread(SwalAlert_objectSpread({}, thenOptsDefault), thenOpts); // 

  return sweetalert2_all_default().fire({
    title: title,
    input: opts.input,
    inputAttributes: {
      autocapitalize: opts.inputAttributes.autocapitalize
    },
    showCancelButton: opts.showCancelButton,
    confirmButtonText: opts.confirmButtonText,
    buttonsStyling: false,
    customClass: {
      confirmButton: "mr-2 py-2 px-5 rounded font-bold text-indigo-700 bg-indigo-100 hover:bg-indigo-300 focus:ring-4 ring-indigo-600",
      cancelButton: "mr-2 py-2 px-5 rounded font-bold text-gray-700 bg-gray-100 hover:bg-gray-300 focus:ring-4 ring-gray-600"
    }
  }).then(function (result) {
    if (result.isConfirmed) {
      if (!!result.value) {
        var _getStorageTodo = getStorageTodo(parseInt(thenOpts.cardID)),
            editTodo = _getStorageTodo.myTodo,
            myTodoLists = _getStorageTodo.myTodoLists;

        editTodo.text = result.value;

        if (LocalStorageUtils_updateTodoLocStorage(thenOpts.cardID, editTodo).isSuccess) {
          document.getElementById("".concat(thenOpts.cardID, "-text")).innerText = result.value;
          successToast({
            title: thenOpts.title,
            toastType: thenOpts.toastType
          });
        }
      } else {
        throw "Input text is empty.";
      } // another if here

    }
  })["catch"](function (err) {
    console.warn(new Error(err));
    warningToast({
      title: err
    });
  });
}
/**
 * 
 * @param {*} param0 
 * @returns 
 */


function inputText2(_ref2) {
  var title = _ref2.title,
      _ref2$opts = _ref2.opts,
      opts = _ref2$opts === void 0 ? {
    confirmButtonText: "Save"
  } : _ref2$opts,
      _ref2$thenOpts = _ref2.thenOpts,
      thenOpts = _ref2$thenOpts === void 0 ? {
    title: "Input success",
    toastType: "basic"
  } : _ref2$thenOpts;
  // 
  var optsDefault = {
    input: "text",
    inputAttributes: {
      autocapitalize: "off"
    },
    showCancelButton: true,
    confirmButtonText: "Save"
  };
  opts = SwalAlert_objectSpread(SwalAlert_objectSpread({}, optsDefault), opts); // 

  var thenOptsDefault = {
    title: "Input success",
    toastType: "basic"
  };
  thenOpts = SwalAlert_objectSpread(SwalAlert_objectSpread({}, thenOptsDefault), thenOpts); // 

  return Swal.fire({
    title: title,
    input: opts.input,
    inputAttributes: {
      autocapitalize: opts.inputAttributes.autocapitalize
    },
    showCancelButton: opts.showCancelButton,
    confirmButtonText: opts.confirmButtonText
  }).then(function (result) {
    if (result.isConfirmed) {
      if (!!result.value) {
        if (updateTodoLocStorage(thenOpts.cardID, {
          text: result.value
        }).isSuccess) {
          document.getElementById("".concat(thenOpts.cardID, "-text")).innerText = result.value;
          swalToast.successToast({
            title: thenOpts.title,
            toastType: thenOpts.toastType
          });
        }
      } else {
        throw "Input text is empty.";
      } // another if here

    }
  })["catch"](function (err) {
    console.warn(new Error(err));
    swalToast.warningToast({
      title: err
    });
  });
}


;// CONCATENATED MODULE: ./src/utils/CardUtils.js






/**
 * 
 * Create HTML element and render it to the very top of cards-wrapper,
 * with ID and to-do text as a params.
 * 
 * Return an object contain cardID and cardWrapperOuter
 * 
 * @param {Object} param0 contains cardID and to-do text
 * @returns { cardID, cardWrapperOuter }
 */

function createCardHTML(_ref) {
  var cardsWrapper = _ref.cardsWrapper,
      cardID = _ref.cardID,
      cardStatus = _ref.cardStatus,
      todoText = _ref.todoText;
  //  create card html without to-do text
  cardsWrapper.insertAdjacentHTML("afterbegin", SingleCard({
    cardID: cardID,
    cardStatus: cardStatus,
    todoText: todoText
  })); // get to-do text element <p></p>

  var cardTodoTextEl = document.getElementById("".concat(cardID, "-text")); // set innerText of to-do

  todoText = document.createTextNode(todoText);
  cardTodoTextEl.innerText = null;
  cardTodoTextEl.appendChild(todoText); // get CWO for export

  var cardWrapperOuter = document.getElementById("".concat(cardID, "-cardWrapperOuter"));
  return {
    cardID: cardID,
    cardWrapperOuter: cardWrapperOuter
  };
} // end of createCardHTML

/**
 * altho we can do this to add listener to every single card from it's parent (cardsWrapper)
 * see ref: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_delegation
 *
 *
 *| cardsWrapper.addEventListener("focusin", () => {
 *|   console.log('cardWrapper: focus in');
 *| })
 *| cardsWrapper.addEventListener("focusout", () => {
 *|   console.log('cardWrapper: focus out');
 *| })
 *
 * we do add listeners while loop for every single array and add another utils inside them
 */

/**
 * 
 * Contains all children element on the cards-wrapper (allCardsWrapper).
 * Then loop the array trough every single one of them (single to-do card).
 * 
 * Control every single card behaviour here. e.g. eventListener
 * 
 * @param {Array} arrayOfCards Contains all children element on the cards-wrapper (allCardsWrapper)
 */


function assignCardListener(arrayOfCards) {
  // yg masuk array dari card wrapper outer
  arrayOfCards.forEach(function (cardWrapperOuter) {
    /**
     * 
     */
    // set cardID from data-id on #{id}-cardWrapperOuter element
    var cardID = cardWrapperOuter.dataset.id; // initialize empty object const

    var _ = {}; // 1 - cardWrapper holds 2 children: textWrapper and modifyWrapper -> btn

    _.cardWrapper = cardWrapperOuter.children["".concat(cardID, "-cardWrapper")]; // 1.1 - textWrapper holds 2 children: text and check btn

    _.textWrapper = _.cardWrapper.children["".concat(cardID, "-textWrapper")]; // 1.1.1 - this is the actual text content

    _.todoText = _.textWrapper.children["".concat(cardID, "-text")]; // 1.1.2 - this is the check btn (green) -> btn-like

    _.checkOrCrossBtn = _.textWrapper.children["".concat(cardID, "-checkOrCross")]; // 1.2 - modifyWrapper holds 2 children: edit btn and delete btn

    _.modifyWrapper = _.cardWrapper.children["".concat(cardID, "-modifyWrapper")]; // 1.2.1 - this is the edit btn (indigo) -> btn-like

    _.editBtn = _.modifyWrapper.children["".concat(cardID, "-edit")]; // 1.2.2 - this is the delete btn (red) -> btn-like

    _.deleteBtn = _.modifyWrapper.children["".concat(cardID, "-delete")]; // 2 - cardBottom don't have any child, only for accent below every card

    _.cardBottom = cardWrapperOuter.children["".concat(cardID, "-cardBottom")];
    /**
     * 
     */
    // when the card is focus, whether clicked or tabbed

    _.cardWrapper.addEventListener("focusin", function () {
      // get current timestamp / 1000 to get more narrow value
      // to see differences between onfocus and onclick.
      var focusTimestamp = parseInt(Date.now() / 1000); // toggle from hidden to block -> show cardWrapper

      _.checkOrCrossBtn.classList.replace("hidden", "block"); // toggle edit&delete btn wrapper from hidden to show -> show modifyWrapper


      _.modifyWrapper.classList.remove("hidden"); // toggle card accent on bottom from show to hidden -> hide card bottom accent


      _.cardBottom.classList.add("hidden"); // add margin bottom 5 to the outer of cardWrapper,
      // so it's stay stay away of each other.


      cardWrapperOuter.classList.add("mb-5"); // when the card is clicked, automatically onfocus after onclick.
      // but, onfocus triggered first, then onclick.

      _.cardWrapper.onclick = function () {
        // get current timestamp / 1000 to get more narrow value
        // to see differences between onfocus and onclick
        var clickTimestamp = parseInt(Date.now() / 1000); // if there is a delay about 1++ second,
        // we assume the user clicking the card again to hide it.
        // but if not, we assume the user clicked the card once,
        // but triggered 2 event (onfocus & onclick).

        if (focusTimestamp != clickTimestamp) {
          // blur = get out focus
          _.cardWrapper.blur();
        }
      };
    });
    /**
     * when the card is out of focus after being focus.
     */


    _.cardWrapper.addEventListener("focusout", function () {
      // toggle from block to hidden -> hide cardWrapper
      _.checkOrCrossBtn.classList.replace("block", "hidden"); // 


      _.modifyWrapper.classList.add("hidden");

      _.cardBottom.classList.remove("hidden");

      cardWrapperOuter.classList.remove("mb-5");
    });
    /**
     * when CHECK/CROSS btn is clicked
     * CHECK/CROSS status in localStorage reference to done/not state
     */


    _.checkOrCrossBtn.addEventListener("click", function () {
      // 
      var _getStorageTodo = getStorageTodo(parseInt(cardID)),
          statusTodo = _getStorageTodo.myTodo,
          myTodoLists = _getStorageTodo.myTodoLists;

      statusTodo.status = !statusTodo.status;

      if (LocalStorageUtils_updateTodoLocStorage(parseInt(cardID), statusTodo).isSuccess) {
        _.checkOrCrossBtn.innerHTML = checkOrCrossBtn(cardID, statusTodo.status, false);

        if (statusTodo.status) {
          // todo is now done (true)
          successToast({
            title: "Done: ".concat(statusTodo.text)
          });

          _.cardWrapper.classList.replace("not-line-through", "line-through");

          _.cardWrapper.classList.replace("bg-white", "bg-gray-500");

          _.cardWrapper.classList.replace("focus:bg-white", "focus:bg-gray-200");

          _.cardWrapper.classList.replace("dark:bg-gray-50", "dark:bg-gray-600");

          _.cardWrapper.classList.replace("dark:focus:bg-white", "dark:focus:bg-gray-400");

          _.cardBottom.classList.replace("bg-gray-300", "bg-gray-600");

          _.cardBottom.classList.replace("dark:bg-gray-400", "dark:bg-gray-700");
        } else {
          infoToast({
            title: "Undone: ".concat(statusTodo.text)
          });

          _.cardWrapper.classList.replace("line-through", "not-line-through");

          _.cardWrapper.classList.replace("bg-gray-500", "bg-white");

          _.cardWrapper.classList.replace("focus:bg-gray-200", "focus:bg-white");

          _.cardWrapper.classList.replace("dark:bg-gray-600", "dark:bg-gray-50");

          _.cardWrapper.classList.replace("dark:focus:bg-gray-400", "dark:focus:bg-white");

          _.cardBottom.classList.replace("bg-gray-600", "bg-gray-300");

          _.cardBottom.classList.replace("dark:bg-gray-700", "dark:bg-gray-400");
        }
      } // 
      // swalAlert.inputText({
      //   title: `<small>Edit: <br> <i>${statusTodo.myTodo.text}</i></small>`,
      //   opts: {
      //     input: "text",
      //     showCancelButton: true,
      //     confirmButtonText: "Save",
      //   },
      //   thenOpts: {
      //     title: "Update success",
      //     cardID: parseInt(cardID)
      //   }
      // })

    });
    /**
     * when edit btn is clicked
     * edit text in localStorage reference to cardID
     */


    _.editBtn.addEventListener("click", function () {
      // 
      var editTodo = getStorageTodo(parseInt(cardID)); // 

      inputText({
        title: "<small>Edit: <br> <i>".concat(editTodo.myTodo.text, "</i></small>"),
        opts: {
          input: "text",
          showCancelButton: true,
          confirmButtonText: "Save"
        },
        thenOpts: {
          title: "Update success",
          cardID: parseInt(cardID)
        }
      });
    });
    /**
     * when delete btn is clicked
     * delete data in localStorage reference to cardID
     */


    _.deleteBtn.addEventListener("click", function () {
      // 
      var _getStorageTodo2 = getStorageTodo(parseInt(cardID)),
          myTodo = _getStorageTodo2.myTodo,
          undoDeleteMyTodoLists = _getStorageTodo2.myTodoLists;

      sweetalert2_all_default().fire({
        title: "<small> Delete: <br> <i>".concat(myTodo.text, "</i> </small>"),
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: "Delete",
        buttonsStyling: false,
        customClass: {
          confirmButton: "mr-2 py-2 px-5 rounded font-bold text-red-700 bg-red-100 hover:bg-red-300 focus:ring-4 ring-red-600",
          cancelButton: "mr-2 py-2 px-5 rounded font-bold text-gray-700 bg-gray-100 hover:bg-gray-300 focus:ring-4 ring-gray-600"
        }
      }).then(function (event) {
        if (event.isConfirmed) {
          // 
          if (deleteTodoLocStorage(parseInt(cardID)).isSuccess) {
            document.getElementById("".concat(cardID, "-cardWrapperOuter")).innerHTML = null; //

            undoConfirmToast({
              // success, info, warning, question, danger, primary, secondary
              title: "Your to-do list(s) have been deleted.",
              toastType: "fullBtn",
              opts: {
                timer: 10000
              }
            }, undoDeleteMyTodoLists);
          }
        }
      });
    });
  }); // End of array of card forEach
} // end of assignCardListener



;// CONCATENATED MODULE: ./src/utils/ToggleDarkMode.js
/**
 * 
 * set darkmode lightmode based on localStorage data
 * 
 * @param {*} isDarkMode 
 * @returns 
 */
function setDarkLightMode(isDarkMode) {
  var htmlClassList = document.querySelector("html").classList; // 

  if (isDarkMode) htmlClassList.replace("light", "dark");else htmlClassList.replace("dark", "light");
  return isDarkMode;
}
/**
 * 
 * @returns 
 */


function getDarkLightMode() {
  // 
  var jsDrillTodoListDarkModeKey = "jsDrillTodoListDarkMode";
  var isDarkMode; // 

  if (localStorage.getItem(jsDrillTodoListDarkModeKey)) {
    isDarkMode = localStorage.getItem("jsDrillTodoListDarkMode") === "true" ? true : false;
    setDarkLightMode(isDarkMode);
    return isDarkMode;
  } else {
    // 
    localStorage.setItem(jsDrillTodoListDarkModeKey, "false");
    isDarkMode = false;
    return isDarkMode;
  }
}


// EXTERNAL MODULE: ./src/favicon.js
var favicon = __webpack_require__(810);
// EXTERNAL MODULE: ./node_modules/workbox-routing/index.mjs + 11 modules
var workbox_routing = __webpack_require__(46);
// EXTERNAL MODULE: ./node_modules/workbox-strategies/index.mjs + 16 modules
var workbox_strategies = __webpack_require__(539);
;// CONCATENATED MODULE: ./src/service-worker.js

 // Check that service workers are supported

if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('./service-worker.js').then(function () {
      console.log('sukses register SW');
    });
  }); // registerRoute(
  //   ({request}) => request.destination === 'script' ||
  //                   request.destination === 'style',
  //   new StaleWhileRevalidate({
  //     cacheName: 'static-resources',
  //   })
  // );
}
;// CONCATENATED MODULE: ./src/app.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }









var isDarkMode = getDarkLightMode();
var deleteAllTodosBtn = document.getElementById("delete-all-todos-btn");
var toggleDarkMode = document.getElementById("dark-mode-btn"); //

var inputForm = document.getElementById("input-form");
var inputBox = document.getElementById("input-box");
var inputBtn = document.getElementById("input-btn"); //

var todoListContainerTitle = document.querySelector("#todo-list-container h2"); // Contains all children element on the cards-wrapper, then cast Obj to Arr

var cardsWrapper = document.getElementById("cards-wrapper"); // const arrayOfCards = Array.prototype.slice.call(cardsWrapper.children);
// get all to-do(s) and render all the to-do(s) list card then assign listener

if (localStorage.getItem(ENV.DB_KEYNAME)) {
  try {
    //
    var myTodoLists = JSON.parse(localStorage.getItem(ENV.DB_KEYNAME)); // 

    todoListContainerTitle.classList.replace("hidden", "block");
    deleteAllTodosBtn.classList.replace("hidden", "block"); //

    myTodoLists.forEach(function (myTodoList) {
      var _createCardHTML = createCardHTML({
        cardsWrapper: cardsWrapper,
        cardID: myTodoList.ID,
        cardStatus: myTodoList.status,
        todoText: myTodoList.text
      }),
          cardWrapperOuter = _createCardHTML.cardWrapperOuter;

      assignCardListener([cardWrapperOuter]);
    });
  } catch (e) {
    //
    console.log(e);
    alert("There was an error with the data. Please clear up your browser local storage. Thank you.");
  }
}
/**
 *
 * Delete all to-do list item from localStorage ENV.DB_KEYNAME = "myTodoList".
 *
 */


deleteAllTodosBtn.onclick = function () {
  // get all to-dos from localStorage to be used in the undo process
  var undoDeleteMyTodoLists = JSON.parse(localStorage.getItem(ENV.DB_KEYNAME)); // remove all to-do lists

  localStorage.removeItem(ENV.DB_KEYNAME); // set HTML card to empty string

  cardsWrapper.innerHTML = "";
  todoListContainerTitle.classList.replace("block", "hidden");
  deleteAllTodosBtn.classList.replace("block", "hidden"); //

  undoConfirmToast({
    // success, info, warning, question, danger, primary, secondary
    title: "Your to-do list(s) have been deleted.",
    toastType: "fullBtn",
    opts: {
      timer: 10000
    }
  }, undoDeleteMyTodoLists);
};
/**
 * disable input box and btn
 * replace + with spin animation to btn
 * get inputBox.value and now timestamp
 * set to-do text, unique id (timestamp), and status (0|1)
 * then, when done, replace spin with + again
 * then, empty the input box
 * then, enable the input box and btn
 * last, fire SWAL (or alert)
 */

/**
 *
 *
 *
 * @param {any} e Event
 */


inputForm.onsubmit = function (e) {
  try {
    // prevent the form from submitting the inputBox value.
    // Thus, we can control the behaviour but still with secure form-minded flow.
    e.preventDefault(); // initialize toSave object contains key=>value for the to-do list

    var toSave = {}; // create unique ID from timestamp + 2 digits number

    toSave.ID = Date.now() + ~~(Math.random() * 100); // get the to-do value from input box

    toSave.text = inputBox.value.trim(); // set status false|true ; false = not done yet, true = done

    toSave.status = false; // if the input text is empty, reset again the inputBox then alert user

    if (toSave.text === "") {
      inputBox.value = "";
      inputBox.focus();
      inputBtn.click();
      throw "Please fill with appropriate character.";
    } // disable inputBox and inputBtn so the user cannot do anything while processing the input to-do process


    inputBox.disabled = true;
    inputBtn.disabled = true; // if myTodoList exist getItem and add the new to-do in front of the array
    // if not, straight to setItem

    if (localStorage.getItem(ENV.DB_KEYNAME)) {
      try {
        // get all to-dos from localStorage and parse into valid JSON
        var localStorageTodo = JSON.parse(localStorage.getItem(ENV.DB_KEYNAME)); // set max todos to store

        var maxTodos = 100; // check todos already in the localStorage not greater than the maxTodos

        if (localStorageTodo.length < maxTodos) {
          // udpate the to-do list with the new one being the last on the array
          setStorageTodo([].concat(_toConsumableArray(localStorageTodo), [toSave]));
        } else {
          // when the total to-dos on the localStorage have been exceed the maxTodos
          // throw to upper catch
          throw "You already have ".concat(localStorageTodo.length, " to-dos active. Please delete some or clear all to-dos. (Max. ").concat(maxTodos, " to-dos for the sake of your device's memory goodness)");
        }
      } catch (e) {
        // throw to upper catch
        throw e;
      }
    } else {
      // when there is no data on the localStorage, immediately create a new localStorage data
      setStorageTodo([toSave]); // 

      todoListContainerTitle.classList.replace("hidden", "block");
      deleteAllTodosBtn.classList.replace("hidden", "block");
    } // create card and assign event listener to every components in a single card


    var _createCardHTML2 = createCardHTML({
      cardsWrapper: cardsWrapper,
      cardID: toSave.ID,
      cardStatus: toSave.status,
      todoText: toSave.text
    }),
        cardWrapperOuter = _createCardHTML2.cardWrapperOuter;

    assignCardListener([cardWrapperOuter]); // show clear all todo lists button

    deleteAllTodosBtn.classList.replace("hidden", "block"); // reset inputBox to the initial condition

    inputBox.value = "";
    inputBox.disabled = false;
    inputBtn.disabled = false;
    inputBox.focus();
  } catch (err) {
    // reset inputBox to the initial condition
    inputBox.value = "";
    inputBox.disabled = false;
    inputBtn.disabled = false;
    inputBox.focus(); // catch all error from child try catch and console then alert the user

    console.error(err);
    dangerToast({
      title: err,
      toastType: "basic"
    });
  }
}; // End of onSubmit

/**
 * Toggle between dark and light mode. Get user preferences using localStorage item.
 */


toggleDarkMode.onclick = function () {
  isDarkMode = !isDarkMode;
  setDarkLightMode(isDarkMode);
  localStorage.setItem(ENV.DB_DARKMODEKEYNAME, isDarkMode);
};

/***/ }),

/***/ 810:
/***/ (() => {

// IIFE immedieately invoked function expression
(function () {
  var htmlTemplate = "\n  <!-- ****** faviconit.com favicons ****** -->\n  <!-- ****** mantap betul faviconit ****** -->\n  <link rel=\"shortcut icon\" href=\"../assets/icon/favicon.ico\">\n  <link rel=\"icon\" sizes=\"16x16 32x32 64x64\" href=\"../assets/icon/favicon.ico\">\n  <link rel=\"icon\" type=\"image/png\" sizes=\"196x196\" href=\"../assets/icon/favicon-192.png\">\n  <link rel=\"icon\" type=\"image/png\" sizes=\"160x160\" href=\"../assets/icon/favicon-160.png\">\n  <link rel=\"icon\" type=\"image/png\" sizes=\"96x96\" href=\"../assets/icon/favicon-96.png\">\n  <link rel=\"icon\" type=\"image/png\" sizes=\"64x64\" href=\"../assets/icon/favicon-64.png\">\n  <link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"../assets/icon/favicon-32.png\">\n  <link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"../assets/icon/favicon-16.png\">\n  <link rel=\"apple-touch-icon\" href=\"../assets/icon/favicon-57.png\">\n  <link rel=\"apple-touch-icon\" sizes=\"114x114\" href=\"../assets/icon/favicon-114.png\">\n  <link rel=\"apple-touch-icon\" sizes=\"72x72\" href=\"../assets/icon/favicon-72.png\">\n  <link rel=\"apple-touch-icon\" sizes=\"144x144\" href=\"../assets/icon/favicon-144.png\">\n  <link rel=\"apple-touch-icon\" sizes=\"60x60\" href=\"../assets/icon/favicon-60.png\">\n  <link rel=\"apple-touch-icon\" sizes=\"120x120\" href=\"../assets/icon/favicon-120.png\">\n  <link rel=\"apple-touch-icon\" sizes=\"76x76\" href=\"../assets/icon/favicon-76.png\">\n  <link rel=\"apple-touch-icon\" sizes=\"152x152\" href=\"../assets/icon/favicon-152.png\">\n  <link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"../assets/icon/favicon-180.png\">\n  <meta name=\"msapplication-TileColor\" content=\"#FFFFFF\">\n  <meta name=\"msapplication-TileImage\" content=\"../assets/icon/favicon-144.png\">\n  <meta name=\"msapplication-config\" content=\"../assets/icon/browserconfig.xml\">\n  <!-- ****** mantap betul faviconit ****** -->\n  <!-- ****** faviconit.com favicons ****** -->\n"; // render favicon into head tag

  document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend", htmlTemplate);
})();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			143: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk_3_vb_todo_list"] = self["webpackChunk_3_vb_todo_list"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [325], () => (__webpack_require__(415)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.bundle.js.map