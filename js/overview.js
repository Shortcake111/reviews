function capitalLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

var urls = ['https://store.steampowered.com/app/825550/BlueberryNOVA/', "https://vndb.org/v22812"];
var blueberryNOVA = ["blueberryNOVA", "blueberryNOVA.jpg", "A new class, 2 interesting girls. Can you (♀️, 1st-person) get along with both? Short, multiple endings. 2 sexual scenes. Voiced: ✖️, EN: 👍", urls];

urls = ['https://store.steampowered.com/app/908690/BigBoy__Visual_Novel/'];
var bigBoy = ["bigBoy", "bigBoy.jpg", "You had one job (♂️, 3rd-person), with many passengers. What happened? Very short, 1 ending. Unique art style. No sexual content. Voiced: ✖️, EN: 👍", urls];

urls = ['https://store.steampowered.com/app/363410/Always_The_Same_Blue_Sky/', 'https://vndb.org/v13110'];
var alwaysTheSameBlueSky = ["Always The Same Blue Sky", "alwaysthesamebluesky.jpg", "You (choose ♂️ or ♀️, 1st-person) are the newbie in town. Go meet that mysterious girl from class! Very short, multiple endings. Sexual content: ✖️, voiced: ✖️, EN: 👍", urls]

var novels = [blueberryNOVA, bigBoy, alwaysTheSameBlueSky];

novels.forEach(novel => {
    var cardOpening = "<div id=\"" + novel[0] + "\" class='col-12 col-md-6 col-lg-4'><div class='card shadow'>"
    var img = "<img onclick=\"window.open('./reviews/" + novel[0] + ".html', '_self')\" src=\"../img/games/" + novel[1] + "\" class=\"card-img-top clickable\" alt=\"" + capitalLetter(novel[0]) + "\" />"
    var cardContent = "<div class=\"card-body\">" +
        "<h5 onclick=\"window.open('./reviews/" + novel[0] + ".html', '_self')\" class=\"clickable card-title\">" + capitalLetter(novel[0]) + "</h5> <p onclick=\"window.open('./reviews/" + novel[0] + ".html', '_self')\" class=\"clickable card-text\">" + novel[2] + "</p>"
    var cardBody = "<div class=\"card-body\">"
    var btngroup = "<div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">"

    var btns = ""
    novel[3].forEach(element => {
        var theme = "warning"
        var siteName = "Other"

        if (element.includes("steampowered")) {
            theme = "dark"
            siteName = "Steam"
        } else if (element.includes("vndb")) {
            theme = "primary"
            siteName = "VNDB"
        } else if (element.includes("mangagamer")) {
            theme = "pink"
            siteName = "MangaGamer"
        }

        btns += "<button onclick=\"window.open('" + element + "')\" type=\"button\" class=\"btn btn-" + theme + "\">" +
            siteName +
            "</button>"
    })

    var cardClosing = "</div></div></div></div>"

    var card = cardOpening + img + cardContent + cardBody + btngroup + btns + cardClosing
    document.getElementById("reviewsOverview").innerHTML += card
});

$(".card-body .card-body").css({
    "padding-left": "0",
    "padding-bottom": "0"
})

$("#" + novels[novels.length - 1][0]).find("h5").append(" <span class=\"badge badge-info\">New</span>")

/*

    <
    div class = "col-12 col-md-6 col-lg-4" >
    <
    div class = "card shadow" >
    <
    img onclick = "window.open('./reviews/BigBoy.html', '_self')"
src = "../img/games/BigBoy.jpg"
class = "card-img-top clickable"
alt = "BigBoy" / >
    <
    div onclick = "window.open('./reviews/BigBoy.html', '_self')"
class = "card-body clickable" >
    <
    h5 class = "card-title" > BigBoy < /h5> <
    p class = "card-text" >
    You had one job(♂️, 3 rd - person), with many passengers.What happened ? Very short, 1 ending.Unique art
style.No sexual content.Voiced: ✖️, EN: 👍
    <
    /p> <
    /div> <
    div class = "card-body" >
    <
    div class = "btn-group"
role = "group"
aria - label = "Basic example" >
    <
    button onclick = "window.open('https://store.steampowered.com/app/908690/BigBoy__Visual_Novel/')"
type = "button"
class = "btn btn-dark" >
    Steam <
    /button> <
    /div> <
    /div> <
    /div> <
    /div>*/