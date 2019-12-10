var navItems = document.querySelectorAll(".nav-item");
var spans = document.querySelectorAll("span");
var icons = document.querySelectorAll("i");

var twitterBtn = $("#twitter a");
var reviewContent = document.querySelector("#reviewContent");
var steamBanner = $("#steamBanner");

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

//$("#selfIntroduction").text();

/*function searchIndex(vnTitle) {
  for (var i = 0; i < vNovels.length; i++) {
    if (vNovels[i][1][0] === vnTitle) {
      return i;
    }

  }
  return -1;
}*/

function loadReview(vn) {
  $("title").text(vn[1][0])
  $("#title").text(vn[1][0]);
  twitterBtn.attr("href", vn[2][0]);
  twitterBtn.text(vn[2][0]);
  steamBanner.attr("src", vn[3]);

  reviewContent.innerHTML = "";
  for (var i = 1; i < (vn[0].length); i++) {
    if (i < vn[0].length - 1) {
      reviewContent.innerHTML += ("<div class=\"card mb-0\"><div class=\"card-header\"><h4 class=\"mb-0\">" + vn[0][i] + "</h4></div><div class=\"card-body\"><p class=\"card-text\">" + vn[1][i] + "</div></div>");
    } else {
      reviewContent.innerHTML += ("<div class=\"card mb-0\"><div class=\"card-header\"><h4 class=\"mb-0\">" + vn[0][i] + "</h4></div><div class=\"card-body\">" + vn[1][i] + "<p class=\"card-text\">" + vn[1][++i] + "</div></div>");
    }
  }
}

//testing
//let vnName = sessionStorage.getItem('novelName');
//sessionStorage.removeItem('novelName');
