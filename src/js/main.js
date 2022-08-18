const swiperTeam = new Swiper(".swiper-team", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesOffsetBefore: 0,
  allowSlideNext: true,
  navigation: {
    nextEl: ".swiper-team-next",
    prevEl: ".swiper-team-prev",
  },
  loop: true,
  wrapperClass: "slider-wrapper",
  breakpoints: {
    900: {
      slidesPerView: 3,
    },
    590: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    },
  },
});
const swiperReviews = new Swiper(".swiper-reviews", {
  slidesPerView: 2,
  spaceBetween: 30,
  slidesOffsetBefore: 0,
  allowSlideNext: true,
  navigation: {
    nextEl: ".swiper-reviews-next",
    prevEl: ".swiper-reviews-prev",
  },
  loop: true,
  wrapperClass: "slider-wrapper",
  breakpoints: {
    1170: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    },
  },
});
const logo = document.querySelector(".header-logo");
const logoWrapper = document.querySelector(".header-logo-wrapper");
document.addEventListener("scroll", () => {
  if (
    window.pageYOffset != undefined &&
    window.pageYOffset > 100 &&
    window.screen.width > 1370
  ) {
    logo.style.height = "40px";
  }
  if (
    window.pageYOffset != undefined &&
    window.pageYOffset <= 100 &&
    window.screen.width > 1370
  ) {
    logo.style.height = "60px";
    logoWrapper.style.height = "55px";
  }
});
const search = document.querySelector(".header-info__search");
const searchInput = document.querySelector(".header-info__search-input");

search.addEventListener("click", (e) => {
  searchInput.focus();
  searchInput.style.width = "170px";
  searchInput.style.paddingLeft = "10px";
});
searchInput.addEventListener("blur", (e) => {
  searchInput.style.width = "0";
  searchInput.style.paddingLeft = "0";
});
const mobileBtn = document.querySelector(".header-mobile-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileClose = document.querySelector(".mobile-close");
const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownOpen = document.querySelector(".dropdown-open");
const dropdownLink = document.querySelector(".dropdown-link");
const dropdownBack = document.createElement("img");
dropdownBack.classList.add("dropdown-back");
dropdownBack.src = "assets/slider-arrow.svg";
dropdownBack.alt = "Dropdown menu back button";
const dropdownClose = document.createElement("img");
dropdownClose.classList.add("dropdown-close");
dropdownClose.classList.add("dropdown-close-btn");
dropdownClose.src = "assets/close.svg";
dropdownClose.alt = "Dropdown menu close button";

mobileBtn.addEventListener("click", (e) => {
  mobileMenu.style.display = "flex";
});
mobileClose.addEventListener("click", (e) => {
  mobileMenu.style.display = "none";
});

dropdownOpen.addEventListener("click", (e) => {
  dropdownMenu.style.display = "flex";
  // dropdownMenu.querySelector("li").appendChild(dropdownBack);
  // dropdownMenu.querySelector("li").appendChild(dropdownClose);
});
mobileMenu.addEventListener("click", (e) => {
  if (
    !e.target.classList.contains("dropdown-link") &&
    e.target != dropdownOpen
  ) {
    dropdownMenu.style.display = "none";
    // dropdownMenu.querySelector("li").removeChild(dropdownBack);
    // dropdownMenu.querySelector("li").removeChild(dropdownClose);
  }
});
const outputs = document.querySelectorAll(".output-block");
function forOfNodeList(list, f) {
  for (const iter of list) {
    f(iter);
  }
}
function listenOutput(elem) {
  let range;
  if (elem.previousElementSibling.classList.contains("range-wrapper")) {
    range = elem.previousElementSibling.querySelector(".range");
  }
  const outputPlus = elem.querySelector(".output-plus");
  const outputMinus = elem.querySelector(".output-minus");
  const outputInput = elem.querySelector(".output-number");
  outputPlus.addEventListener("click", (e) => {
    const val = +outputInput.value + 1;
    outputInput.value = val;
    if (range) {
      range.value = val;
      const slider = range.nextElementSibling;
      const max = range.max;
      slider.style.width = (100 / max) * val + "%";
    }
  });
  outputMinus.addEventListener("click", (e) => {
    let val = +outputInput.value - 1;
    if (val <= 0) {
      val = 0;
    }
    outputInput.value = val;
    if (range) {
      range.value = val;
      const slider = range.nextElementSibling;
      const max = range.max;
      slider.style.width = (100 / max) * val + "%";
    }
  });
}
forOfNodeList(outputs, listenOutput);

const ranges = document.querySelectorAll(".range");

function listenRange(elem) {
  const min = elem.min;
  const max = elem.max;
  const slider = elem.nextElementSibling;
  const output =
    elem.parentNode.nextElementSibling.querySelector(".output-number");
  elem.addEventListener("input", (e) => {
    const value = elem.value;
    output.value = value;
    slider.style.width = (100 / max) * value + "%";
  });
}
forOfNodeList(ranges, listenRange);

const services = document.querySelectorAll(".services-tab");
const servicesText = document.querySelectorAll(".services-text");

function listenServices(elem) {
  console.log();
  elem.addEventListener("click", (e) => {
    const index = indexInParent(e.target);
    const serviceText = servicesText[index];
    forOfNodeList(servicesText, toggleServicesTextClass);
    forOfNodeList(services, toggleServicesClass);
    forOfNodeList(services, removeServicesMargin);
    elem.classList.add("active");
    serviceText.classList.add("visible");
    if (window.screen.width < 670) {
      serviceText.parentElement.style.top = index * 48 + 120 + "px";
      if (serviceText.clientHeight > 300) {
        elem.style.marginBottom = serviceText.clientHeight + 10 + "px";
      } else {
        elem.style.marginBottom = "300px";
      }
    }
  });
}
forOfNodeList(services, listenServices);
function toggleServicesClass(elem) {
  elem.classList.remove("active");
}
function toggleServicesTextClass(elem) {
  elem.classList.remove("visible");
}
function removeServicesMargin(elem) {
  elem.style.marginBottom = 0;
}
function indexInParent(node) {
  var children = node.parentNode.childNodes;
  var num = 0;
  for (var i = 0; i < children.length; i++) {
    if (children[i] == node) return num;
    if (children[i].nodeType == 1) num++;
  }
  return -1;
}
