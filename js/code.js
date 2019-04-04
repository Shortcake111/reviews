var navItems = document.querySelectorAll(".nav-item");
var spans = document.querySelectorAll("span");
var icons = document.querySelectorAll("i");

/*Array.from(navItems).forEach(element => {
  element.addEventListener("mouseover", function() {
    Array.from(spans).forEach(elementTwo => {
      elementTwo.style.transform = "width 200px";
    });
    Array.from(icons).forEach(elementThree => {
      elementThree.style.transform = "rotate(360deg)";
    });
  });
  element.addEventListener("mouseout", function() {
    //document.querySelector("#container").style.backgroundColor = "red";
  });
});*/

/*document.querySelector("#folder").onmouseout(function() {
  //document.querySelector("span").style.visibility = "hidden";
}, false);
*/

$(function() {
  $('[data-toggle="tooltip"]').tooltip();
});

document.querySelector("#selfIntroduction").innerHTML =
  "I'm a curator on Steam that tries to review visual novels.";
