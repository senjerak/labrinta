var preload = ["home.png", "CASPER_talk.gif", "CASCA_talk.gif"];

var preloadObj = new Array(preload.length);

var script;

var casca;
var casper;
var n; // short for "narrator"
var photo;
var textBlock;

var leftSide;
var rightSide;
var upperCenter;

for (var i = 0; i < preload.length; i++) {
  preloadObj[i] = new Image();

  preloadObj[i].src = "../s_one/" + preload[i];
}

function prepareNovel() {
  novel.imagePath = "../s_one/"; // path to your image directory
  novel.audioPath = ""; // path to your audio directory

  casca = new Character("Casca", { color: "rgb(145, 148, 230)" });
  casper = new Character("Casper", { color: "rgb(134, 234, 127)" });
  n = new Character("");

  place1 = new Position(300, 400, 0, 0);
  place2 = new Position(300, 400, 0.5, 0.5);
  place3 = new Position(300, 400, 1, 0);

  leftSide = new Position(0, 0.75, 0, 1);
  rightSide = new Position(800, 450, 1, 1);
  upperCenter = new Position(0.5, 0.3, 0.5, 0.5);
  rightTop = new Position(0.9, 0.1, 1, 0);

  photo = new Character("", { position: upperCenter });
  textArea = new TextBlock("");

  script = [
    label,
    "start",

    scene,
    "home.png",

    n,
    "The morning dew after a night of rainfall",

    // casper,
    // { image: "CASPERWalk.gif", position: rightSide },
    casper,
    { image: "CASPER_talk.gif", position: leftSide },
    casper,
    "good morning! the sun is up! so, I am up!",

    /* jsCall,
    {
      fcn: () => {
        document.querySelector(".window").style.display = "none";
      },
    },*/

    casca,
    { position: rightSide, image: "CASCAWalkmad.gif" },
    casca,
    { image: "CASCA_talk.gif" },
    casca,
    "casper. please. It's too early. Stop it already.",

    n,
    "casper couldn't stop, even if he wanted to. He doesn't know how. He doesn't know why.",
    n,
    "What does stopping even mean?",

    casca,
    "now... help me pick up your toys so that we can leave.",

    casper,
    { position: rightSide },
    casper,
    "can I look at your buttons again? pretty please? I want to show mr. choco.",

    casca,
    "no. leave it alone.",

    casca,
    "there's no time for that, we have to put our raincoats and skidaddle before they run out of rentals.",

    casper,
    "...rental shmental..",

    casca,
    "what was that?",

    casper,
    "oops! sorry!",

    casca,
    "hmm...",

    /*jsCall,
    {
      fcn: () => {
        window.location.href = "../next.html";
      },
    },*/

    scene,
    "home.png",
  ];
}
