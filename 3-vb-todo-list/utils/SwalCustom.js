const fullBtnToast = ({
  timer: timer,
  position: position,
  showConfirmButton: showConfirmButton,
  confirmButtonText: confirmButtonText,
  buttonsStyling: buttonsStyling,
  customClass: customClass
} = {
  timer: 5000,
  position: "top-end",
  showConfirmButton: true,
  confirmButtonText: "Undo",
  buttonsStyling: false,
  customClass: {confirmButton: null}
}) => {
  console.warn(timer);
  console.warn(position);
  console.warn(customClass);
  // 
  const options = {
    toast: true,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  };

  let baseBtn = "w-full mx-auto py-1 px-4 rounded font-bold";
  let redBtn = "text-red-700 bg-red-100 hover:bg-red-300";
  let greenBtn = "text-green-700 bg-green-100 hover:bg-green-300";
  let blueBtn = "text-blue-700 bg-blue-100 hover:bg-blue-300";
  let pinkBtn = "text-pink-700 bg-pink-100 hover:bg-pink-300";
  let indigoBtn = "text-indigo-700 bg-indigo-100 hover:bg-indigo-300";

  // kalo gaada parameter untuk customClass.confirmButton, pake kelas custom. (DEFAULT)
  if (!customClass.confirmButton) {
    const classList =
      "w-full mx-auto py-1 px-4 rounded font-bold text-yellow-700 bg-yellow-100 hover:bg-yellow-300";
    customClass.confirmButton = classList
  }

  options.position = position; // 'top', 'top-start', 'top-end', 'center', 'center-start', 'center-end', 'bottom', 'bottom-start', or 'bottom-end'.
  options.showConfirmButton = showConfirmButton;
  options.confirmButtonText = confirmButtonText;
  options.customClass = {
    confirmButton: customClass.confirmButton
  };
  options.buttonsStyling = buttonsStyling;
  options.timer = timer;

  return Swal.mixin(options);
};

/**
 *
 * @param {*} title
 * @param {*} iconType
 */
const basicToast = (title, iconType) => {
  Swal.mixin({
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
 * selesaiin modul ini integrasiin semua yg ada di sini
 * kalo udah, ganti semua alert yg ada di tiap2 modul
 * dan sesuaiin dengan skema masing2
 */

const successAlert = ({ title, toastType = "basic", opts = {} }) => {
  const iconType = "success";
  //
  if (toastType == "basic") {
    basicToast(title, iconType);
  } else if (toastType == "fullBtn") {

    if (Object.keys(opts).length === 0) {
      fullBtnToast()
        .fire({
          icon: iconType,
          title: title,
        })
        .then((e) => {
          console.log(e);
        });
    } else {
      fullBtnToast(opts)
        .fire({
          icon: iconType,
          title: title,
        })
        .then((e) => {
          console.log(e);
        });

    }

  }
};

const infoAlert = ({ title, toastType = "basic" }) => {
  const iconType = "info";
  //
  if (toastType == "basic") {
    basicToast(title, iconType);
  } else if (toastType == "fullBtn") {
    fullBtnToast()
      .fire({
        icon: iconType,
        title: title,
      })
      .then((e) => {
        console.log(e);
      });
  }
};

const errorAlert = ({ title }) => {
  basicToast.fire({
    icon: "error",
    title: title,
  });
};

const warnAlert = ({ title }) => {
  basicToast.fire({
    icon: "warning",
    title: title,
  });
};

const questionAlert = ({ title }) => {
  basicToast.fire({
    icon: "question",
    title: title,
  });
};

const timerAlert = ({ title, html, timer, querySelector }) => {
  let timerInterval;
  Swal.fire({
    // title: 'Auto close alert!',
    // html: 'I will close in <b></b> milliseconds.',
    title: title,
    html: html,
    timer: timer,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      timerInterval = setInterval(() => {
        const content = Swal.getHtmlContainer();
        if (content) {
          const b = content.querySelector(querySelector);
          if (b) {
            b.textContent = Swal.getTimerLeft();
          }
        }
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });
};

export {
  successAlert,
  infoAlert,
  errorAlert,
  warnAlert,
  questionAlert,
  timerAlert,
};
