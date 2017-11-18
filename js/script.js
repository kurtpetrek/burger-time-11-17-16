var navToggle = document.querySelector("#main-nav-toggle");
var navList = document.querySelector("#main-nav-list");

// Always check to see if elements exist before writing js involving those elements

function (event) {
  // This checks to see if the element has the class of close on it
  console.log(event);
  if (navToggle.classList.contains("close")) {
    // if the element has the close class that means the nav is open so to close it we need to remove the open class from the nav list and remove the close class from the hamburger
    navToggle.classList.remove("close");
    navList.classList.remove("open");
  } else {
    navToggle.classList.add("close");
    navList.classList.add("open");
  }
}

if (navToggle && navList) {
  navToggle.addEventListener("click", function(event) {
    // This checks to see if the element has the class of close on it
    if (navToggle.classList.contains("close")) {
      // if the element has the close class that means the nav is open so to close it we need to remove the open class from the nav list and remove the close class from the hamburger
      navToggle.classList.remove("close");
      navList.classList.remove("open");
    } else {
      navToggle.classList.add("close");
      navList.classList.add("open");
    }
    // Check out the event that comes with addEventListener
    console.log(event);
  });
}
