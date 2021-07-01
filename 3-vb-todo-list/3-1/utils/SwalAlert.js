import * as swalToast from "./SwalToast.js";
import { getStorageTodo, updateTodoLocStorage } from "./LocalStorageUtils.js"

/**
 * 
 * @param {*} param0 
 * @returns 
 */
function inputText({
  title,
  opts = { confirmButtonText: "Save" },
  thenOpts = { title: "Input success", toastType: "basic" },
}) {
  // 
  const optsDefault = {
    input: "text",
    inputAttributes: {
      autocapitalize: "off",
    },
    showCancelButton: true,
    confirmButtonText: "Save",
  };
  opts = { ...optsDefault, ...opts };

  // 
  const thenOptsDefault = { title: "Input success", toastType: "basic" };
  thenOpts = { ...thenOptsDefault, ...thenOpts };

  // 
  return Swal.fire({
    title: title,
    input: opts.input,
    inputAttributes: {
      autocapitalize: opts.inputAttributes.autocapitalize,
    },
    showCancelButton: opts.showCancelButton,
    confirmButtonText: opts.confirmButtonText,
    buttonsStyling: false,
    customClass: {
      confirmButton: "mr-2 py-2 px-5 rounded font-bold text-indigo-700 bg-indigo-100 hover:bg-indigo-300 focus:ring-4 ring-indigo-600",
      cancelButton: "mr-2 py-2 px-5 rounded font-bold text-gray-700 bg-gray-100 hover:bg-gray-300 focus:ring-4 ring-gray-600"
    }
  })
    .then((result) => {
      if (result.isConfirmed) {
        if (!!result.value) {
          const { myTodo: editTodo, myTodoLists } = getStorageTodo(parseInt(thenOpts.cardID))

          editTodo.text = result.value

          if (updateTodoLocStorage(thenOpts.cardID, editTodo).isSuccess) {
            document.getElementById(`${thenOpts.cardID}-text`).innerText = result.value
            swalToast.successToast({
              title: thenOpts.title,
              toastType: thenOpts.toastType,
            });
          }
        } else {
          throw "Input text is empty.";
        }
        // another if here
      }
    })
    .catch((err) => {
      console.warn(new Error(err));
      swalToast.warningToast({
        title: err,
      })
    });
}

/**
 * 
 * @param {*} param0 
 * @returns 
 */
 function inputText2({
  title,
  opts = { confirmButtonText: "Save" },
  thenOpts = { title: "Input success", toastType: "basic" },
}) {
  // 
  const optsDefault = {
    input: "text",
    inputAttributes: {
      autocapitalize: "off",
    },
    showCancelButton: true,
    confirmButtonText: "Save",
  };
  opts = { ...optsDefault, ...opts };

  // 
  const thenOptsDefault = { title: "Input success", toastType: "basic" };
  thenOpts = { ...thenOptsDefault, ...thenOpts };

  // 
  return Swal.fire({
    title: title,
    input: opts.input,
    inputAttributes: {
      autocapitalize: opts.inputAttributes.autocapitalize,
    },
    showCancelButton: opts.showCancelButton,
    confirmButtonText: opts.confirmButtonText,
  })
    .then((result) => {
      if (result.isConfirmed) {
        if (!!result.value) {
          if (updateTodoLocStorage(thenOpts.cardID, { text: result.value }).isSuccess) {
            document.getElementById(`${thenOpts.cardID}-text`).innerText = result.value
            swalToast.successToast({
              title: thenOpts.title,
              toastType: thenOpts.toastType,
            });
          }
        } else {
          throw "Input text is empty.";
        }
        // another if here
      }
    })
    .catch((err) => {
      console.warn(new Error(err));
      swalToast.warningToast({
        title: err,
      })
    });
}

export { inputText };
