// build the nav
const navElements = document.querySelectorAll('section');
const navBar = document.getElementById('navbar__list');

// Build menu by iterating through the navElements
navElements.forEach(navElement => {
  const navListElement = document.createElement('li');
  navListElement.className = 'menu__link';
  navListElement.dataset.nav = navElement.id;
  navListElement.innerText = navElement.dataset.nav;
  navBar.appendChild(navListElement)
})

// Scroll to section on click.
navBar.addEventListener('click', event => {
  event.preventDefault();
  const clicked = document.querySelector(`#${event.target.dataset.nav}`);
  clicked.scrollIntoView({ behavior: 'smooth' })
})


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

const sectionInView = () => {
  const inViewport = () => {
    let whichNavElement = navElements[0];
    navElements.forEach(navElement => {
      const boundary = navElement.getBoundingClientRect();
      if (boundary.bottom >= -50 & boundary.top <= 50) {
        whichNavElement = navElement;
      }
    })
    return whichNavElement;
  };

  window.addEventListener(
    "scroll",
    function () {
      let navElementSection = inViewport();
      console.log(navElementSection);
      navElementSection.classList.add("active");
      navElements.forEach(navElement => {
        if (navElement.id != navElementSection.id && navElement.classList.contains('active')) {
          navElement.classList.remove('active');
        }
      });
      const activeElement = document.querySelector(`li[data-nav="${navElementSection.id}"]`);
      activeElement.classList.add('active__link');
      const headerElements = document.querySelectorAll('.menu__link');
      headerElements.forEach(headerElement => {
        if (headerElement.dataset.nav != activeElement.dataset.nav & headerElement.classList.contains('active__link')) {
          headerElement.classList.remove('active__link');
        }
      })
    }
  );
}

sectionInView();