var preload = [
  "home.png",
  "home.gif",
  "homebtn.png",
  "windowtilt.gif",
  "elevator.gif",
  "rental.png",
  "mrchoco.png",

  "CASCA_talkmad.gif",
  "CASCA_talkmadL.gif",
  "CASCA_talksad.gif",
  "CASCA_talksadL.gif",
  "CASCAwalksad.gif",
  "CASCAwalkmad.gif",
  "CASCA_talk.gif",
  "CASCA_talkL.gif",

  "CASPER_talk.gif",
  "CASPER_talkL.gif",
  "CASPER_talkmad.gif",
  "CASPER_talksad.gif",
  "CASPER_talkmadL.gif",
  "CASPER_talksadL.gif",
  "casper_walks.gif",
  "casper_walksL.gif",

  "buggotiny.gif",
  "loading.gif",
];

var preloadObj = new Array(preload.length);

var script;

var casca;
var casper;
var mrchoco;
var npc;
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
  ((novel.imagePath = "../s_one/"), "../media/"); // path to your image directory
  novel.audioPath = ""; // path to your audio directory

  casca = new Character("Casca", { color: "rgb(145, 148, 230)" });
  casper = new Character("Casper", { color: "rgba(218, 234, 127, 1)" });
  mrchoco = new Character("Mr.Choco", { color: "rgb(255, 127, 48)" });
  npc = new Character("Stranger", { color: "rgb(48, 255, 186)" });
  n = new Character("");

  europe = new Character("", { position: new Position(0.5, 0.2, 0.5, 0.5) });

  //enter
  rightSide = new Position(1030, 560, 1, 1);
  // casper
  place1 = new Position(275, 295, 0, 0);
  // casca
  place2 = new Position(572, 430, 0.5, 0.5);
  // casper
  place3 = new Position(897, 300, 1, 0);

  //casca_elevator
  place4 = new Position(600, 300, 1, 0);
  //casper_elevator
  place5 = new Position(470, 290, 1, 0);

  //casper_rental
  place6 = new Position(150, 200, 1, 0);
  //casca_rental
  place7 = new Position(270, 200, 1, 0);

  photo = new Character("", { position: upperCenter });
  textArea = new TextBlock("");

  script = [
    label,
    "start",

    scene,
    "home.png",

    label,
    "menu1",
    menu,
    [
      "So, what would you like to see?",
      "elevator",
      [jump, "elevator"],
      "rental",
      [jump, "rental"],
    ],

    n,
    "Poddertown, the industrious hive for the humble Podlet, wakes to the gentle embrace of a dwarf sun.<br> It is somewhat cold, wet, and not very bright.",

    n,
    "It was only unpleasant enough to ignore.",

    casper,
    { image: `casper_walks.gif?A=${Date.now()}`, position: rightSide },
    casper,
    "good morning! . . . the sun is up! so I am up!",

    casca,
    { image: `CASCAwalkmad.gif?A=${Date.now()}`, position: rightSide },
    casca,
    "Casper. It's too early. Just stop.",

    casca,
    { image: "CASCA_talkmad.gif", position: place2 },

    casper,
    { image: "CASPER_talkL.gif", position: place1 },
    casper,
    ". . . aw. . .",

    n,
    "Casper couldn't stop, even if he wanted to. He doesn't know how. He doesn't know why.",
    n,
    "What does stopping even mean?",

    casper,
    { image: `casper_walksL.gif?A=${Date.now()}`, position: rightSide },
    casca,
    { image: "CASCA_talkmadL.gif", position: place2 },
    casca,
    "now. . . help me pick up your toys so that we can leave.",

    casper,
    { image: "CASPER_talk.gif", position: place3 },
    casper,
    "can I look at your buttons again? pretty please? I want to show mr. choco.",

    casca,
    "no. . . leave it alone.",

    n,
    "Casca had a brilliant collection of buttons.<br>It was one of the few things they found interesting amongst the seas of industry.",

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
    "okay, well, come on. let's get those shoes on and head towards the elevators.",

    casper,
    "okay! okay! okay!",

    // PAGE 2

    label,
    "elevator",
    scene,
    "elevator.gif",

    jsCall,
    {
      fcn: () => {
        document.querySelector(".window").style.display = "none";
      },
    },

    casca,
    { image: "CASCA_talkmad.gif", position: place4 },

    casper,
    { image: "CASPER_talk.gif", position: place5 },

    casper,
    "wheeeee~~!",

    casca,
    "Casper. . .",

    casper,
    { image: "CASPER_talkL.gif", position: place5 },
    casper,
    ". . . sorry! sorry!",

    casca,
    ". . .",

    casper,
    ". . hee hee . . .",

    casper,
    "one!",

    casper,
    ". . two!!",

    casper,
    "three!!",

    casca,
    ". . . sigh.",

    // PAGE 3

    label,
    "rental",
    scene,
    "rental.png",

    jsCall,
    {
      fcn: () => {
        document.querySelector(".window").style.display = "none";
      },
    },

    mrchoco,
    { image: "mrchoco.png", position: place1 },
    mrchoco,
    "hiiiiii",

    casca,
    { image: "CASCA_talkmadL.gif", position: place7 },

    casper,
    { image: "CASPER_talkL.gif", position: place6 },

    n,
    "Poddercarts help the Podlets get around. The only thing is, there's more road than house, so to actually own one is kind of a bit much.",

    n,
    "Stations, such as these, make it easier to rent Poddercarts instead.",

    casper,
    ". . . hee hee! . .",

    casca,
    ". . .",

    casper,
    ". . . okay, mr. choco. . .",

    casper,
    "we're gonna play a game of hide n' seek",

    casper,
    "it's MY turn to look. . . so you're gonna have ta go hide somewhere.",

    /* jsCall,
     {
       fcn: () => {
         window.location.href = "../scene_two_podderstation.html";
       },
     },*/
  ];
}
