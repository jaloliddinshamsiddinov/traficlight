const svetafor = document.querySelector(".svetafor");
const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const redNumber = document.querySelector("#redNumber");
const green = document.querySelector(".green");

let num = 6;

let id = setInterval(() => {
  num--;
  redNumber.textContent = num;
  if (num == -1) {
    red.style.backgroundColor = "rgb(53, 10, 0.1)";
    red.style.boxShadow = "0 0 0 0";
    redNumber.textContent = "";
    clearInterval(id);
    yellowfnc();
  }
}, 1000);

function sdlkfjsdkf(params) {
  yellow.style.backgroundColor = "#e7b416";
  yellow.style.boxShadow = "  0 0 48px 8px #e7b416";
}
function sdfsdfsdf(params) {
  yellow.style.backgroundColor = "rgba(252, 248, 0, 0.1";
  yellow.style.boxShadow = "0 0 0 0";
}
function yellowfnc() {
  sdlkfjsdkf();
  setTimeout(() => {
    sdfsdfsdf();
    setTimeout(() => {
      sdlkfjsdkf();
      setTimeout(() => {
        sdfsdfsdf();
        setTimeout(() => {
          sdlkfjsdkf();
          setTimeout(() => {
            sdfsdfsdf();
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 3000);

  setTimeout(() => {
    green.style.backgroundColor = "rgb(0, 255, 0)";
    green.style.boxShadow = "  0 0 48px 8px rgb(0, 255, 0)";
  }, 7000);
}

setInterval(() => {
  location.reload();
}, 20000);
