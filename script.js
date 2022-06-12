document
  .querySelector(".navbar-toggler-icon")
  .addEventListener("mouseenter", function () {
    document.querySelector("#main-navbar").style.backgroundColor = "#6143a1";
  });

document
  .querySelector("#main-navbar")
  .addEventListener("touchstart", function () {
    document.querySelector("#main-navbar").style.backgroundColor = "#6143a1";
  });

document
  .querySelector("#main-navbar")
  .addEventListener("mouseleave", function () {
    document.querySelector("#main-navbar").style.backgroundColor =
      "transparent";
  });

document
  .querySelector("#main-navbar")
  .addEventListener("touchend", function () {
    document.querySelector("#main-navbar").style.backgroundColor =
      "transparent";
  });

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar.fixed-top");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

