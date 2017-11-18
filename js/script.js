var navToggle = document.querySelector("#main-nav-toggle");
var navList = document.querySelector("#main-nav-list");

// Always check to see if elements exist before writing js involving those elements
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

/*
TAB JS
=================================================
*/

// Usually you want all variables declared at the top but I am grouping code here for demo purposes

var dogTabToggle = document.querySelector("#dog-tab-toggle");
var catTabToggle = document.querySelector("#cat-tab-toggle");
var giraffeTabToggle = document.querySelector("#giraffe-tab-toggle");

var tabItems = document.querySelectorAll(".tab-item");

var dogTabContent = document.querySelector("#tab-content-dog");
var catTabContent = document.querySelector("#tab-content-cat");
var giraffeTabContent = document.querySelector("#tab-content-giraffe");

function hideAllTabContent() {
  for (var x = 0; x < tabItems.length; x++) {
    tabItems[x].style.display = "none";
  }
  dogTabToggle.classList.remove("active");
  catTabToggle.classList.remove("active");
  giraffeTabToggle.classList.remove("active");
}

dogTabToggle.addEventListener("click", function() {
  hideAllTabContent();
  dogTabContent.style.display = "block";
  dogTabToggle.classList.add("active");
});

catTabToggle.addEventListener("click", function() {
  hideAllTabContent();
  catTabContent.style.display = "block";
  catTabToggle.classList.add("active");
});

giraffeTabToggle.addEventListener("click", function() {
  hideAllTabContent();
  giraffeTabContent.style.display = "block";
  giraffeTabToggle.classList.add("active");
});
