
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