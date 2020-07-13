// build the nav
const navList = document.getElementById('navbar__list');
const navElements = document.querySelectorAll('section')

// Build menu by iterating through the navelements
navElements.forEach(el => {
  const navlistElement = `<li class='menu__link ${el.className}' data-link=${el.id}><a href="#${el.id}">${el.dataset.nav}</li>`
  navList.insertAdjacentHTML('beforeend', navlistElement)
})

// Scroll to section on link click by listenting to the click-event in the navlist
navList.addEventListener('click', e => {
  e.preventDefault()
  const parent = e.target.hasAttribute('data-link')
    ? e.target
    : e.target.parentElement
  const elementToScrollTo = document.getElementById(parent.dataset.link)
  elementToScrollTo.scrollIntoView({ block: 'end', behavior: 'smooth' })
})

// Set section and nav link as active using the IntersectionObserver pattern
const callback = entries => {
  entries.forEach(entry => {
    const navListElement = document.querySelector(
      `.menu__link[data-link='${entry.target.id}']`,
    )
    const section = document.getElementById(entry.target.id)

    if (entry && entry.isIntersecting) {
      navListElement.classList.add('active')
      section.classList.add('active')
    } else {
      if (navListElement.classList.contains('active')) {
        navListElement.classList.remove('active')
      }

      if (section.classList.contains('active')) {
        section.classList.remove('active')
      }
    }
  })
}

//Get the button
const mybutton = document.getElementById("myBtn");

// When the user scrolls down 50px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

const scrollFunction = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Options for the observer. Most important is the threshold
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.6,
}

// Setting an observer with options and a callback which checks if the navelement should be active
const observer = new IntersectionObserver(callback, options)
navElements.forEach(el => {
  observer.observe(document.getElementById(el.id))
})