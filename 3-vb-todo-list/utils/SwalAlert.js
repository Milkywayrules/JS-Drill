import * as swalToast from "./SwalToast.js";
import { getStorageItem, updateTodoLocStorage } from "./LocalStorageUtils.js"

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
  })
    .then((result) => {
      if (result.isConfirmed) {
        if (!!result.value) {
          if (updateTodoLocStorage(thenOpts.cardID, { text: result.value}).isSuccess) {
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
