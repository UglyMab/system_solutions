const swiperTeam = new Swiper('.swiper-team', {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesOffsetBefore: 0,
  allowSlideNext: true,
  navigation: {
    nextEl: '.swiper-team-next',
    prevEl: '.swiper-team-prev',
  },
  loop: true,
  wrapperClass: 'slider-wrapper',
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
})
const swiperReviews = new Swiper('.swiper-reviews', {
  slidesPerView: 2,
  spaceBetween: 30,
  slidesOffsetBefore: 0,
  allowSlideNext: true,
  navigation: {
    nextEl: '.swiper-reviews-next',
    prevEl: '.swiper-reviews-prev',
  },
  loop: true,
  wrapperClass: 'slider-wrapper',
  breakpoints: {
    1170: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    },
  },
})
const logo = document.querySelector('.header-logo')
const logoWrapper = document.querySelector('.header-logo-wrapper')
document.addEventListener('scroll', () => {
  if (
    window.pageYOffset != undefined &&
    window.pageYOffset > 100 &&
    window.screen.width > 1370
  ) {
    logo.style.height = '40px'
  }
  if (
    window.pageYOffset != undefined &&
    window.pageYOffset <= 100 &&
    window.screen.width > 1370
  ) {
    logo.style.height = '60px'
    logoWrapper.style.height = '55px'
  }
})
const search = document.querySelector('.header-info__search')
const searchInput = document.querySelector('.header-info__search-input')

search.addEventListener('click', (e) => {
  searchInput.focus()
  searchInput.style.width = '170px'
  searchInput.style.paddingLeft = '10px'
})
searchInput.addEventListener('blur', (e) => {
  searchInput.style.width = '0'
  searchInput.style.paddingLeft = '0'
})
const mobileBtn = document.querySelector('.header-mobile-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const mobileClose = document.querySelector('.mobile-close')
const dropdownMenu = document.querySelector('.dropdown-menu')
const dropdownClose = document.querySelector('.dropdown-close-btn')
const dropdownOpen = document.querySelector('.dropdown-open')
const dropdownLink = document.querySelector('.dropdown-link')
mobileBtn.addEventListener('click', (e) => {
  mobileMenu.style.display = 'flex'
})
mobileClose.addEventListener('click', (e) => {
  mobileMenu.style.display = 'none'
})
dropdownClose.addEventListener('click', (e) => {
  mobileMenu.style.display = 'none'
})
dropdownOpen.addEventListener('click', (e) => {
  dropdownMenu.style.display = 'flex'
})
mobileMenu.addEventListener('click', (e) => {
  console.log(e.target)
  if (
    !e.target.classList.contains('dropdown-link') &&
    e.target != dropdownOpen
  ) {
    dropdownMenu.style.display = 'none'
  }
})
const outputs = document.querySelectorAll('.range-output')

function forOfNodeList(list, f) {
  for (const iter of list) {
    f(iter)
  }
}
function listenOutput(elem) {
  let range
  if (elem.previousElementSibling.classList.contains('range-block')) {
    range = elem.previousElementSibling.childNodes[2]
  }
  const outputPlus = elem.lastChild
  const outputMinus = elem.firstChild
  const outputInput = elem.childNodes[1]

  outputPlus.addEventListener('click', (e) => {
    const val = +outputInput.value + 1
    outputInput.value = val
    if (range) {
      range.value = val
      const slider = range.nextElementSibling
      const max = range.max
      slider.style.width = (100 / max) * val + '%'
    }
  })
  outputMinus.addEventListener('click', (e) => {
    let val = +outputInput.value - 1
    if (val <= 0) {
      val = 0
    }
    outputInput.value = val
    if (range) {
      range.value = val
      const slider = range.nextElementSibling
      const max = range.max
      slider.style.width = (100 / max) * val + '%'
    }
  })
}
forOfNodeList(outputs, listenOutput)

const ranges = document.querySelectorAll('.range')

function listenRange(elem) {
  const min = elem.min
  const max = elem.max
  const slider = elem.nextElementSibling
  const output = elem.parentNode.nextElementSibling.childNodes[1]
  elem.addEventListener('change', (e) => {
    const value = elem.value
    output.value = value
    slider.style.width = (100 / max) * value + '%'
  })
}
forOfNodeList(ranges, listenRange)
