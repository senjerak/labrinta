var preload = ["home.png", "elevator.gif", "CASPER_talk.gif", "CASCA_talkmad.gif", "CASCA_talkmadL.gif", "CASCA_talksad.gif", "CASPER_talkmad.gif", "CASPER_talksad.gif", "CASCAwalksad.gif", "CASCA_talk.gif", "CASCAwalkmad.gif", "pfp1.png", "pfp2.png",];

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

  //enter
  rightSide = new Position(1030, 560, 1, 1);
  // casper 
  place1 = new Position(275, 295, 0, 0);
  // casca
  place2 = new Position(572, 430, 0.5, 0.5);
  // casper 
  place3 = new Position(897, 300, 1, 0);
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

    casper,
    { image: `casper_walks.gif?A=${Date.now()}`, position: rightSide, },
    casper,
    "good morning! . . . the sun is up! so I am up!",

    casca,
    { image: `CASCAwalkmad.gif?A=${Date.now()}`, position: rightSide, },
    casca,
    "Casper. It's too early. Stop it already.",

    casca,
    { image: "CASCA_talkmad.gif", position: place2, },

    casper,
    { image: "CASPER_talkL.gif", position: place1, },
    casper,
    ". . . aw.",

    n,
    "Casper couldn't stop, even if he wanted to. He doesn't know how. He doesn't know why.",
    n,
    "What does stopping even mean?",

    casper,
    { image: `casper_walksL.gif?A=${Date.now()}`, position: rightSide, },
    casca,
    { image: "CASCA_talkmadL.gif", position: place2, },
    casca,
    "now. . . help me pick up your toys so that we can leave.",

    casper,
    { image: "CASPER_talk.gif", position: place3 },
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
    "okay! okay! okay!",

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

    casca,
    "Casper. . .",

    casper,
    ". . . sorry! sorry!",

    /* jsCall,
     {
       fcn: () => {
         window.location.href = "../scene_two_podderstation.html";
       },
     },*/


  ];
}
