let retailerMainBtn = document.querySelector(".retailer-main-container-tags");

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
