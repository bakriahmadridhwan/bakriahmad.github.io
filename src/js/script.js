// LOADING SCREEN
onload = function () {
  let thisApp = document.getElementById("thisApp");
  let startScreen = document.querySelector("#mulai");
  let teksLoading = document.querySelector(".teks");

  thisApp.style.display = "none";
  startScreen.style.display = "flex";

  let loaded = setInterval(() => {
    teksLoading.textContent = teksLoading.textContent + " . ";
  }, 1000);

  setTimeout(() => {
    clearInterval(loaded);

    // thisApp.style.display = "block";
    startScreen.style.display = "none";
    $(document).ready(function () {
      $(thisApp).fadeIn("slow");
    });
  }, 5000);
};

// PLAY AUDIO
const bakri = document.querySelector(".bakri");
// const audio = new Audio("./src/audio/ya_ghayeb.mp3");

// bakri.addEventListener("click", function () {
//   audio.play();
// });

// FULLSCREEN
let elem = document.documentElement;

bakri.addEventListener("click", function () {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  }
});

// CUSTOM CURSOR
let cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

// THEME
const theme = document.querySelector(".theme");
const border = document.querySelector(".brd");
const article = document.getElementsByTagName("article");
const p = document.getElementsByTagName("p");
const a = document.getElementsByTagName("a");

theme.addEventListener("click", function () {
  for (let i = 0; i < article.length; i++) {
    article[i].classList.toggle("change-theme");
  }

  // for (let i = 0; i < p.length; i++) {
  //   p[i].classList.toggle("change-p");
  // }

  for (let i = 0; i < a.length; i++) {
    a[i].classList.toggle("change-a");
  }
});

border.addEventListener("click", function () {
  for (let i = 0; i < article.length; i++) {
    article[i].classList.toggle("change-border");
  }

  for (let i = 0; i < a.length; i++) {
    a[i].classList.toggle("change-border");
  }
});

// TOAST
const toast = document.getElementById("snackbar");
const fotoBakri = document.querySelector(".foto-bakri");

fotoBakri.addEventListener("click", function () {
  toast.className = "show";
  setTimeout(function () {
    toast.className = toast.className.replace("show", "");
  }, 3000);
});

// CLOCK
function clock() {
  let hour = document.getElementById("hour");
  let minute = document.getElementById("minute");
  let seconds = document.getElementById("seconds");
  let ampm = document.getElementById("ampm");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let am = "AM";

  // if (h > 11) {
  //   let am = "SIANG";
  // } else if (h > 13) {
  //   let am = "SORE";
  // } else if (h > 20) {
  //   let am = "MALAM";
  // } else if (h > 1) {
  //   let am = "DINI HARI";
  // } else if (h > 4) {
  //   let am = "SHUBUH";
  // } else if (h > 6) {
  //   let am = "PAGI";
  // }

  if (h > 1) {
    am = "<b> - Dini Hari</b>";
  }
  if (h > 3) {
    am = "<b> - Shubuh</b>";
  }
  if (h > 5) {
    am = "<b> - Pagi</b>";
  }
  if (h > 10) {
    am = "<b> - Siang</b>";
  }
  if (h > 13) {
    am = "<b> - Sore</b>";
  }
  if (h > 17) {
    am = "<b> - Maghrib</b>";
  }
  if (h > 18) {
    am = "<b> - Malam</b>";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hour.innerHTML = h;
  minute.innerHTML = m;
  seconds.innerHTML = s;
  ampm.innerHTML = am;
}

let intervalClock = setInterval(clock, 1000);

// CUSTOM SCROLLBAR

// let progress = document.getElementById("progressbar");
// let totalHeight = document.body.scrollHeight - window.innerHeight;

// window.onscroll = function () {
//   let progressHeight = (window.pageYOffset / totalHeight) * 100;
//   progress.style.height = progressHeight + "%";
// };

// DRAGGABLE ELEMENT
// SEC1
dragElement(document.getElementById("sec1"));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();

    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;

    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// SEC2
dragElement(document.getElementById("sec2"));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();

    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;

    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// SEC3
dragElement(document.getElementById("sec3"));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();

    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;

    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// SEC4
dragElement(document.getElementById("sec4"));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();

    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;

    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// SEC5
dragElement(document.getElementById("sec5"));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();

    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;

    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// SEC6
dragElement(document.getElementById("sec6"));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();

    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;

    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// SEC7
dragElement(document.getElementById("sec7"));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();

    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;

    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// SEC8
dragElement(document.getElementById("sec8"));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();

    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;

    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// Z-INDEX
const sec1 = document.getElementById("sec1");
const sec2 = document.getElementById("sec2");
const sec3 = document.getElementById("sec3");
const sec4 = document.getElementById("sec4");
const sec5 = document.getElementById("sec5");
const sec6 = document.getElementById("sec6");
const sec7 = document.getElementById("sec7");
const sec8 = document.getElementById("sec8");

sec1.addEventListener("dblclick", function () {
  sec1.style.zIndex = "9999";
  sec2.style.zIndex = "9";
  sec3.style.zIndex = "8";
  sec4.style.zIndex = "7";
  sec5.style.zIndex = "6";
  sec6.style.zIndex = "5";
  sec7.style.zIndex = "4";
  sec8.style.zIndex = "3";
});

sec2.addEventListener("dblclick", function () {
  sec2.style.zIndex = "9999";
  sec1.style.zIndex = "10";
  sec3.style.zIndex = "8";
  sec4.style.zIndex = "7";
  sec5.style.zIndex = "6";
  sec6.style.zIndex = "5";
  sec7.style.zIndex = "4";
  sec8.style.zIndex = "3";
});

sec3.addEventListener("dblclick", function () {
  sec3.style.zIndex = "9999";
  sec1.style.zIndex = "10";
  sec2.style.zIndex = "9";
  sec4.style.zIndex = "7";
  sec5.style.zIndex = "6";
  sec6.style.zIndex = "5";
  sec7.style.zIndex = "4";
  sec8.style.zIndex = "3";
});

sec4.addEventListener("dblclick", function () {
  sec4.style.zIndex = "9999";
  sec1.style.zIndex = "10";
  sec2.style.zIndex = "9";
  sec3.style.zIndex = "8";
  sec5.style.zIndex = "6";
  sec6.style.zIndex = "5";
  sec7.style.zIndex = "4";
  sec8.style.zIndex = "3";
});

sec5.addEventListener("dblclick", function () {
  sec5.style.zIndex = "9999";
  sec1.style.zIndex = "10";
  sec2.style.zIndex = "9";
  sec3.style.zIndex = "8";
  sec4.style.zIndex = "7";
  sec6.style.zIndex = "5";
  sec7.style.zIndex = "4";
  sec8.style.zIndex = "3";
});

sec6.addEventListener("dblclick", function () {
  sec6.style.zIndex = "9999";
  sec1.style.zIndex = "10";
  sec2.style.zIndex = "9";
  sec3.style.zIndex = "8";
  sec4.style.zIndex = "7";
  sec5.style.zIndex = "6";
  sec7.style.zIndex = "4";
  sec8.style.zIndex = "3";
});

sec7.addEventListener("dblclick", function () {
  sec7.style.zIndex = "9999";
  sec1.style.zIndex = "10";
  sec2.style.zIndex = "9";
  sec3.style.zIndex = "8";
  sec4.style.zIndex = "7";
  sec5.style.zIndex = "6";
  sec6.style.zIndex = "5";
  sec8.style.zIndex = "3";
});

sec8.addEventListener("dblclick", function () {
  sec8.style.zIndex = "9999";
  sec1.style.zIndex = "10";
  sec2.style.zIndex = "9";
  sec3.style.zIndex = "8";
  sec4.style.zIndex = "7";
  sec5.style.zIndex = "6";
  sec6.style.zIndex = "5";
  sec7.style.zIndex = "4";
});

// COLLAPSE
const collapse1 = document.querySelector(".minimize1");
const collapse2 = document.querySelector(".minimize2");
const collapse3 = document.querySelector(".minimize3");
const collapse4 = document.querySelector(".minimize4");
const collapse5 = document.querySelector(".minimize5");
const collapse6 = document.querySelector(".minimize6");
const collapse7 = document.querySelector(".minimize7");
const collapse8 = document.querySelector(".minimize8");

const content1 = document.querySelector(".content1");
const content2 = document.querySelector(".content2");
const content3 = document.querySelector(".content3");
const content4 = document.querySelector(".content4");
const content5 = document.querySelector(".content5");
const content6 = document.querySelector(".content6");
const content7 = document.querySelector(".content7");
const content8 = document.querySelector(".content8");

collapse1.addEventListener("click", function () {
  if (content1.style.display === "none") {
    content1.style.display = "block";
    collapse1.setAttribute("src", "./src/img/white-minimize.png");
    collapse1.style.padding = "15px 10px";
  } else {
    content1.style.display = "none";
    collapse1.setAttribute("src", "./src/img/white-maximize.png");
    collapse1.style.padding = "10px 10px";
  }
});

collapse2.addEventListener("click", function () {
  if (content2.style.display === "none") {
    content2.style.display = "block";
    collapse2.setAttribute("src", "./src/img/white-minimize.png");
    collapse2.style.padding = "15px 10px";
  } else {
    content2.style.display = "none";
    collapse2.setAttribute("src", "./src/img/white-maximize.png");
    collapse2.style.padding = "10px 10px";
  }
});

collapse3.addEventListener("click", function () {
  if (content3.style.display === "none") {
    content3.style.display = "block";
    collapse3.setAttribute("src", "./src/img/white-minimize.png");
    collapse3.style.padding = "15px 10px";
  } else {
    content3.style.display = "none";
    collapse3.setAttribute("src", "./src/img/white-maximize.png");
    collapse3.style.padding = "10px 10px";
  }
});

collapse4.addEventListener("click", function () {
  if (content4.style.display === "none") {
    content4.style.display = "block";
    collapse4.setAttribute("src", "./src/img/white-minimize.png");
    collapse4.style.padding = "15px 10px";
  } else {
    content4.style.display = "none";
    collapse4.setAttribute("src", "./src/img/white-maximize.png");
    collapse4.style.padding = "10px 10px";
  }
});

collapse5.addEventListener("click", function () {
  if (content5.style.display === "none") {
    content5.style.display = "block";
    collapse5.setAttribute("src", "./src/img/white-minimize.png");
    collapse5.style.padding = "15px 10px";
  } else {
    content5.style.display = "none";
    collapse5.setAttribute("src", "./src/img/white-maximize.png");
    collapse5.style.padding = "10px 10px";
  }
});

collapse6.addEventListener("click", function () {
  if (content6.style.display === "none") {
    content6.style.display = "block";
    collapse6.setAttribute("src", "./src/img/white-minimize.png");
    collapse6.style.padding = "15px 10px";
  } else {
    content6.style.display = "none";
    collapse6.setAttribute("src", "./src/img/white-maximize.png");
    collapse6.style.padding = "10px 10px";
  }
});

collapse7.addEventListener("click", function () {
  if (content7.style.display === "none") {
    content7.style.display = "block";
    collapse7.setAttribute("src", "./src/img/white-minimize.png");
    collapse7.style.padding = "15px 10px";
  } else {
    content7.style.display = "none";
    collapse7.setAttribute("src", "./src/img/white-maximize.png");
    collapse7.style.padding = "10px 10px";
  }
});

collapse8.addEventListener("click", function () {
  if (content8.style.display === "none") {
    content8.style.display = "block";
    collapse8.setAttribute("src", "./src/img/white-minimize.png");
    collapse8.style.padding = "15px 10px";
  } else {
    content8.style.display = "none";
    collapse8.setAttribute("src", "./src/img/white-maximize.png");
    collapse8.style.padding = "10px 10px";
  }
});
