const timer = document.querySelector(".time-bg p");

setInterval(() => {
  let time = new Date();
  timer.innerHTML = time.toLocaleTimeString();
}, 1000);
