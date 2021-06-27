const toastFullBtn = () => {
  const options = {
    toast: true,
    position: 'top-end',
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  }

  const classList = "w-full mx-auto py-1 px-4 rounded font-bold text-yellow-700 bg-yellow-100 hover:bg-yellow-300"

  options.position = 'top-end' // 'top', 'top-start', 'top-end', 'center', 'center-start', 'center-end', 'bottom', 'bottom-start', or 'bottom-end'.
  options.showConfirmButton = true
  options.confirmButtonText = 'Undo'
  options.customClass = {
    confirmButton : classList
  }
  options.buttonsStyling = false
  options.timer = 5000

  return Swal.mixin(options)
}

/**
 * 
 * @param {*} title 
 * @param {*} iconType 
 */
const basicToast = (title, iconType) => {
    Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  .fire({
    icon: iconType,
    title: title
  })
}

const successAlert = ({ title }, toastType = 'basic') => {
  const iconType = "success"
  // 
  if (toastType == 'basic') {
    basicToast(title, iconType)
  } else if (toastType == 'fullBtn') {
    toastFullBtn().fire({
      icon: iconType,
      title: title
    })
    .then((e) => {
      console.log(e);
    })
  }
}

const infoAlert = ({ title }, toastType = 'basic') => {
  const iconType = "info"
  // 
  if (toastType == 'basic') {
    basicToast(title, iconType)
  } else if (toastType == 'fullBtn') {
    toastFullBtn().fire({
      icon: iconType,
      title: title
    })
    .then((e) => {
      console.log(e);
    })
  }
}

const errorAlert = ({ title }) => {
  basicToast.fire({
    icon: 'error',
    title: title
  })
}

const warnAlert = ({ title }) => {
  basicToast.fire({
    icon: 'warning',
    title: title
  })
}

const questionAlert = ({ title }) => {
  basicToast.fire({
    icon: 'question',
    title: title
  })
}

const timerAlert = ({ title, html, timer, querySelector }) => {
  let timerInterval
  Swal.fire({
    // title: 'Auto close alert!',
    // html: 'I will close in <b></b> milliseconds.',
    title: title,
    html: html,
    timer: timer,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading()
      timerInterval = setInterval(() => {
        const content = Swal.getHtmlContainer()
        if (content) {
          const b = content.querySelector(querySelector)
          if (b) {
            b.textContent = Swal.getTimerLeft()
          }
        }
      }, 100)
    },
    willClose: () => {
      clearInterval(timerInterval)
    }
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log('I was closed by the timer')
    }
  })
}

export { successAlert, infoAlert, errorAlert, warnAlert, questionAlert, timerAlert }