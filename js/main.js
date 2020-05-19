// Navbar
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navbar ul");
const links = document.querySelectorAll(".navbar li");
const path_inner = document.querySelector(".path-inner");
const path_svg = document.getElementById("logo-nav");
const circle_svg = document.getElementById("circle-svg");
const footer_socail = document.querySelector(".footer_content .footer_socail");

hamburger.addEventListener("click", function () {
  navLinks.classList.toggle("open");
  links.forEach(function (link) {
    link.classList.toggle("fade");
  });
  hamburger.classList.toggle("close");
  path_svg.classList.toggle("logo-nav");
  circle_svg.classList.toggle("logo-nav");
  path_inner.classList.toggle("add_blue_dark");
  footer_socail.classList.toggle("socail_menu_on");
});

// Tabs
$(".tab").on("click", function (e) {
  e.preventDefault();
  $(".tab, .panel").removeClass("active");
  $(this)
    .add(
      "#" +
        $(this)
          .attr("id")
          .replace(/\s*tab\s*/, "tab_content")
    )
    .addClass("active");
  $(this).focus();
});

// According
var acc = document.getElementsByClassName("list");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var icon = this.lastElementChild;
    var panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      icon.classList.remove("active");
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      icon.classList.add("active");
    }
  });
}

// Email verfication
const form = document.getElementById("contactForm");
const emailAddress = document.getElementById("email");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const email = emailAddress.value.trim();
  if (email === "") {
    // show error
    // add error class
    setErrorFor(emailAddress, "Email Address connot be empty");
  } else if (!isEmail(email)) {
    setErrorFor(emailAddress, "Whoops, make sure it's an email");
  } else {
    return 0;
  }
}
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("label");
  //   add error message in small
  small.innerText = message;
  // add error class
  formControl.className = "error";
}
function isEmail(emailAddress) {
  return /^\S+@\S+\.\S+$/.test(emailAddress);
}
