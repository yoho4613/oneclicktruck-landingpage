// ================HTML SELECTORS ===============
let body = document.querySelector("body");
let retailerMainBtn = document.querySelector(".retailer-main-container-tags");
let navList = document.querySelectorAll(".nav-list");
let btnNav = document.querySelectorAll(".btn-nav");
let dropdown = document.querySelectorAll(".service-dropdown");

// ----------------addEventListeners----------------



retailerMainBtn.addEventListener("click", function (e) {
  let tagName = e.target.className;
  let divs = [...document.querySelectorAll(".retailer-main-description")];
  divs.forEach((el) => {
    el.classList.remove("show");
    el.classList.add("hide");
  });
  if (tagName === "option-one") {
    divs[0].classList.add("show");
  } else if (tagName === "option-two") {
    divs[1].classList.add("show");
  } else if (tagName === "option-three") {
    divs[2].classList.add("show");
  }
});

navList.forEach((el) =>
  el.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target === btnNav[0]) {
      dropdown[0].classList.toggle("hide");
    }
    if (e.target === btnNav[1]) {
      dropdown[1].classList.toggle("hide");
    }
    if (e.target === btnNav[2]) {
      dropdown[2].classList.toggle("hide");
    }
  })
);
