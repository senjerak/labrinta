var preload = ["home.png", "elevator.gif", "CASPER_talk.gif", "CASCA_talkmad.gif", "CASCA_talksad.gif", "CASPER_talkmad.gif", "CASPER_talksad.gif", "CASCAwalksad.gif", "CASCA_talk.gif", "CASCAwalkmad.gif",];

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
  novel.imagePath = "../s_one/", "../sprites/"; // path to your image directory
  novel.audioPath = ""; // path to your audio directory

  casca = new Character("Casca", { color: "rgb(145, 148, 230)" });
  casper = new Character("Casper", { color: "rgba(218, 234, 127, 1)" });
  n = new Character("");

  //casca_enter
  rightSide = new Position(1030, 560, 1, 1);
  // casper 
  place1 = new Position(650, 300, 0, 0);
  // casca
  place2 = new Position(572, 430, 0.5, 0.5);
  // casper 
  place3 = new Position(450, 300, 1, 0);
  //casca_elevator
  place4 = new Position(600, 310, 1, 0);
  //casper_elevator
  place5 = new Position(470, 300, 1, 0);


  photo = new Character("", { position: upperCenter });
  textArea = new TextBlock("");

  script = [

    label,
    "start",

    scene,
    "home.png",

    casca,
    { image: `CASCAWalkmad.gif?A=${Date.now()}`, position: rightSide, },

    casca,
    "The morning dew after a night of rainfall",

    casca,
    { image: "CASCA_talkmad.gif", position: place2, },

    casper,
    { image: "CASPER_talk.gif", position: place1 },
    casper,
    "good morning! . . . the sun is up! so I am up!",

    casca,
    { image: "CASCA_talk.gif" },
    casca,
    "Casper. Please. It's too early. Stop it already.",

    n,
    "casper couldn't stop, even if he wanted to. He doesn't know how. He doesn't know why.",
    n,
    "What does stopping even mean?",

    casca,
    "now. . . help me pick up your toys so that we can leave.",

    casper,
    { position: place3 },
    casper,
    "can I look at your buttons again? pretty please? I want to show mr. choco.",

    casca,
    "no. . . leave it alone.",

    casca,
    "there's no time for that! we've got to skidaddle before they run out of rentals.",

    casper,
    ". . .oh. . okay. .",

    casper,
    ". . .rental shmental. .",

    casca,
    "what was that?",

    casper,
    "oops! sorry!",

    casca,
    "hmm. . .",

    casca,
    "okay, well, come on. let's get those shoes on and head toward the elevators.",

    casper,
    "okay! okay! pkay!",


    jsCall,
    {
      fcn: () => {
        document.querySelector(".window").style.display = "none";
      },
    },

    scene,
    "elevator.gif",

    casca,
    { image: "CASCA_talkmad.gif", position: place4, },

    casper,
    { image: "CASPER_talk.gif", position: place5, },

    casper,
    "wheeeee~~!",


    /* jsCall,
     {
       fcn: () => {
         window.location.href = "../scene_two_podderstation.html";
       },
     },*/


  ];
}
