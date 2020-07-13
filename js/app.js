// build the nav
const navBar = document.getElementById('navbar__list');
const containerLength = document.getElementsByClassName('landing__container').length;

for (let i = 1; i <= containerLength; i++) {
  const newListItem = document.createElement('li');
  newListItem.textContent = `Section ${i}`;
  const navId = `sample-nav-${i}`;
  newListItem.setAttribute('id', navId);
  newListItem.setAttribute('class', 'nav-list-item');
  navBar.appendChild(newListItem);
  const item = `section${i}`;
  const itemTarget = document.getElementById(item);
  const listTarget = document.getElementById(navId);
  const buttonName = `section${i}-button`;
  const buttonToAdd = document.getElementById(buttonName);

  //Adds button when scrolls into view

  listTarget.addEventListener('click', function () {
    itemTarget.scrollIntoView({
      behavior: 'smooth'
    })
    buttonToAdd.innerHTML = "<button class='section-button' onclick='goToTop()'>Return to Top</button>";
  });
}

//This is the helper function for a scroll
const scrollToTop = () => {
  const scrolling = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrolling > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, scrolling - scrolling / 50);
  }
};

// On button click, goes to top of page 
function goToTop() {
  scrollToTop();

  for (i = 1; i < containerLength + 1; i++) {
    let buttonToDelete = document.getElementById("section" + i + "-button");
    buttonToDelete.innerHTML = "";
  }
}

//Checks if section is in view and adds active-class with moving background and color change
function checkIfSectionInView() {
  let isInViewport = function (elem) {
    let bounding = elem.getBoundingClientRect();
    return (
      bounding.top <= 50 &&
      bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  for (i = 1; i <= containerLength; i++) {
    let sectionInFullView = document.getElementById("section" + i);

    window.addEventListener(
      "scroll",
      function (event) {
        if (isInViewport(sectionInFullView)) {
          sectionInFullView.classList.add("your-active-class");
        } else {
          sectionInFullView.classList.remove("your-active-class");
        }
      },
      false
    );
  }
}

// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the navbar
var navbar = document.getElementById("header");
// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
checkIfSectionInView();
