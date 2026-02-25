var preload = [
  "raindrops.webp",

  "homebtn.png",
  "home.gif",

  "homefirst.gif",
  "elevator.gif",

  "rental.gif",
  "overpass.png",
  "overpass2.png",
  "overpass3.png",

  "carinside1.png",
  "carinside2.png",
  "carinside3.png",

  "enter.gif",
  "front.gif",
  "lobby.gif",
  "lobby_closer.gif",

  "room1door.gif",
  "room2door.gif",
  "room3door.gif",

  "roomone.gif",
  "roomtwo.gif",
  "room2closer.png",

  "transport.gif",
  "market.gif",

  "room1minigame.png",
  "room2minigame.png",
  "room3minigame.png",

  "choco.png",
  "choco_R.png",
  "chocofall.gif",

  "npc1.gif",
  "npc1L.gif",
  "npc1oof.gif",

  "carnpc1.gif",
  "carnpc2.gif",
  "carcasca1.gif",
  "carcasca2.gif",

  "Sonador_talk.gif",
  "Sonador_talkL.gif",

  "CASCA_talkmad.gif",
  "CASCA_talkmadL.gif",
  "CASCA_talksad.gif",
  "CASCA_talksadL.gif",
  "CASCAwalksad.gif",
  "CASCAWalkmad.gif",
  "CASCAWalkmadL.gif",
  "CASCA_talk.gif",
  "CASCA_talkL.gif",
  "Casca_flappies.gif",

  "CASPER_talk.gif",
  "CASPER_talkL.gif",
  "CASPER_talkmad.gif",
  "CASPER_talksad.gif",
  "CASPER_talkmadL.gif",
  "CASPER_talksadL.gif",
  "casper_walks.gif",
  "casper_walksL.gif",
  "casper_jumps.gif",

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

  sonador = new Character("Soñador", { color: "rgb(147, 108, 236)" });
  casca = new Character("Casca", { color: "rgb(230, 145, 185)" });
  casper = new Character("Casper", { color: "rgba(218, 234, 127, 1)" });
  mrchoco = new Character("Choco", { color: "rgb(255, 127, 48)" });

  npc = new Character("Stranger", { color: "rgb(48, 255, 186)" });
  npc3 = new Character("Station Manager", { color: "rgb(128,125,116)" });
  npc2 = new Character("");
  n = new Character("");

  europe = new Character("", { position: new Position(0.5, 0.2, 0.5, 0.5) });

  //enter
  rightSide = new Position(1030, 600, 1, 1);
  rightSidedown = new Position(1030, 660, 1, 1);

  //home
  // casper
  homecasper1 = new Position(275, 295, 0, 0);
  // casca
  homecasca1 = new Position(572, 430, 0.5, 0.5);
  // casper
  homecasper2 = new Position(897, 300, 1, 0);
  //choco
  homechoco = new Position(850, 465, 1, 0);

  //elevator
  //casca
  elecasca1 = new Position(600, 300, 1, 0);
  //casper
  elecasper1 = new Position(470, 290, 1, 0);
  elecasper2 = new Position(475, 265, 1, 0);
  //choco
  elechoco = new Position(450, 460, 1, 0);

  //rental
  //casper
  rentcasper1 = new Position(150, 210, 1, 0);
  rentcasper2 = new Position(779, 218, 1, 0);
  rentcasper3 = new Position(950, 210, 1, 0);
  rentcasper4 = new Position(350, 210, 1, 0);
  //casca
  rentcasca1 = new Position(270, 200, 1, 0);
  rentcasca2 = new Position(420, 200, 1, 0);
  //choco
  rentchoco1 = new Position(150, 400, 1, 0);
  rentchoco2 = new Position(1782, 400, 1, 0);
  rentchoco3 = new Position(842, 380, 1, 0);
  //npc
  rentnpc1 = new Position(420, 233, 1, 0);
  rentnpc2 = new Position(431, 233, 1, 0);
  rentnpc3 = new Position(1731, 400, 1, 0);





  //no touch
  photo = new Character("", { position: upperCenter });
  textArea = new TextBlock("");

  script = [
    label,
    "start",

    scene,
    "homefirst.gif",

    label,
    "menu1",
    menu,
    [
      "So, what would you like to see?",
      "OwO",
      [jump, "beginning"],
      "stay",
      [jump, "beginning"],
      "elevator",
      [jump, "elevator"],
      "rental",
      [jump, "rental"],
      "overpass",
      [jump, "highwayone"],
      "enter.png",
      [jump, "enter"],
      "front",
      [jump, "front"],
      "lobby",
      [jump, "lobby"],
      "lobby_closer",
      [jump, "lobby_closer"],
      "room1door",
      [jump, "room1door"],
      "room1",
      [jump, "room1inside"],
      "market",
      [jump, "market"],
      "room2door",
      [jump, "room2door"],
      "room2",
      [jump, "room2"],
      "room3door",
      [jump, "room3door"],
    ],

    label,
    "beginning",
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
    { image: "CASCA_talkmad.gif", position: homecasca1 },

    casper,
    { image: "CASPER_talkL.gif", position: homecasper1 },
    casper,
    ". . . aw. . .",


    n,
    "Casper couldn't stop, even if he wanted to. He doesn't know how. He doesn't know why.",
    n,
    "What does stopping even mean?",


    casper,
    { image: `casper_walksL.gif?A=${Date.now()}`, position: rightSide },

    casca,
    { image: "CASCA_talkmadL.gif", position: homecasca1 },

    casca,
    "now. . . help me pick up your toys so that we can leave.",

    casper,
    { image: "CASPER_talk.gif", position: homecasper2 },

    casper,
    "can we play monster attack? plushies aren't toys...",

    casca,
    { image: "CASCA_talkL.gif", position: homecasca1 },

    casca,
    "no. . . put them away.",

    casper,
    "what about choco? choco's people too. you can't put away people.",

    mrchoco,
    { image: "choco.png", position: homechoco },
    mrchoco,
    ". . .",

    casca,
    { image: "CASCA_talkmadL.gif", position: homecasca1 },

    casca,
    "there's no time for that! we've got to skidaddle before they run out of rentals.",

    casca,
    ". . . I'll be in a pinch if I can't focus on my homework today, so you're playing somewhere new today.",

    casper,
    { image: "CASPER_talkmad.gif", position: homecasper2 },

    casper,
    ". . .oh. . okay. .",

    casper,
    ". . . .shmental frental. . .",

    casca,
    "what was that?",

    casper,
    { image: "CASPER_talk.gif", position: homecasper2 },

    casper,
    "oops! sorry!",

    casca,
    "hmm. . .",

    casca,
    { image: "CASCA_talkL.gif", position: homecasca1 },

    casca,
    "okay, well, come on. let's get those shoes on and head towards the elevators.",

    casper,
    "okay! okay! okay!",

    // PAGE 2 ////////////////////////////////////////////////////////////////////////////////////////////////

    label,
    "elevator",
    scene,
    "elevator.gif",

    casca,
    { image: "CASCA_talk.gif", position: elecasca1 },

    casper,
    { image: "CASPER_talk.gif", position: elecasper1 },

    mrchoco,
    { image: "choco.png", position: elechoco },

    casper,
    "wheeeee~~!",

    casca,
    { image: "CASCA_talkmad.gif", position: elecasca1 },

    casca,
    "Casper. . .",

    casper,
    { image: "CASPER_talkL.gif", position: elecasper1 },
    mrchoco,
    { image: "choco_R.png", position: elechoco },
    casper,
    ". . . sorry! sorry!",

    casca,
    ". . .",

    casper,
    ". . hee hee . . .",

    casper,
    { image: "casper_jumps.gif", position: elecasper2 },

    casper,
    "one!",

    casper,
    ". . two!!",

    casper,
    "three!!",

    casca,
    { image: "CASCA_talksad.gif", position: elecasca1 },

    casca,
    ". . . sigh. .",

    // PAGE 3 ////////////////////////////////////////////////////////////////////////////////////////////////

    label,
    "rental",
    scene,
    "rental.gif",

    npc,
    { image: "npc1.gif", position: rentnpc1 },

    casca,
    { image: "CASCA_talkL.gif", position: rentcasca1 },

    casper,
    { image: "CASPER_talkL.gif", position: rentcasper1 },

    mrchoco,
    { image: "choco_R.png", position: rentchoco1 },

    n,
    "Poddercarts help the Podlets get around. The only thing is, there's more road than house, so to actually own one is kind of a bit much.",

    n,
    "Stations make it easier for Podlets to rent Poddercarts instead.",

    casper,
    ". . . hee hee! . .",

    casca,
    ". . .",

    casper,
    ". . . okay, choco. . .",

    casper,
    "we're gonna play a game of hide n' seek",

    casper,
    "it's MY turn to look. . . so you're gonna have ta go hide somewhere.",

    mrchoco,
    ". . .",

    casper,
    "it'll be fun. . . trust me!",

    casper,
    ". . .here. . let me help you.",

    casper,
    { image: `casper_walksL.gif?A=${Date.now()}`, position: rentcasper3 },
    mrchoco,
    { image: "choco_R.png", position: rentchoco2 },

    casper,
    "..now stay put!",

    casca,
    { image: "CASCA_talkmadL.gif", position: rentcasca1 },

    casca,
    ". . . Casper, get back here.",

    casper,
    "okay!",

    casper,
    { image: `casper_walks.gif?A=${Date.now()}`, position: rentcasper2 },


    npc,
    { image: `npc1oof.gif?A=${Date.now()}`, position: rentnpc2 },

    npc,
    ". . . oof!",

    casca,
    { image: "CASCA_talkmad.gif", position: rentcasca1 },

    casca,
    ". . . Casper!",


    casper,
    { image: "caspersadbasicL.gif", position: rentcasper1 },

    casper,
    ". . oops!",

    npc,
    { image: "npc1L.gif", position: rentnpc1 },

    npc,
    "oh! it is perfectly f---",

    casca,
    ". . . Casper! Apologize!",

    casper,
    ". . i'm sorry!",

    npc,
    ". . . don't sweat it, kid.",

    npc,
    { image: "npc1.gif", position: rentnpc1 },

    casca,
    { image: "CASCA_talkmadL.gif", position: rentcasca1 },

    casca,
    ". . . Thank you.",

    casper,
    ". . thank you!",

    npc2,
    { image: `carnpc2.gif?A=${Date.now()}`, position: rightSide },

    npc3,
    ". . . Your Poddercart is ready.",

    casca,
    { image: "CASCA_talkL.gif", position: rentcasca2 },

    casper,
    { image: "caspersadbasicL.gif", position: rentcasper4 },

    npc,
    { image: "npc1.gif", position: rentnpc3 },

    npc3,
    ". . . Next. . .",

    npc2,
    { image: `carnpc1.gif?A=${Date.now()}`, position: rightSide },

    casca,
    ". . . i am Casca and i have two riders. .",

    npc3,
    ". . . One Moment. . .",


    npc3,
    ". . . ",

    npc3,
    ". . . Your Poddercart is ready.",

    npc2,
    { image: `carcasca1.gif?A=${Date.now()}`, position: rightSidedown },

    casca,
    ". . . come on, Casper.",

    casca,
    { image: "CASCA_talkL.gif", position: rentnpc3 },

    casper,
    { image: "caspersadbasicL.gif", position: rentnpc3 },

    npc2,
    { image: `carcasca2.gif?A=${Date.now()}`, position: rightSidedown },

    casper,
    ". . .",

    mrchoco,
    { image: `chocofall.gif?A=${Date.now()}`, position: rentchoco3 },

    n,
    ". . .",

    // PAGE 4 ////////////////////////////////////////////////////////////////////////////////////////////////

    label,
    "highwayone",
    scene,
    "overpass.png",

    n,
    "can I look at your buttons again? pretty please? I want to show mr. choco.",

    // PAGE 5 ////////////////////////////////////////////////////////////////////////////////////////////////

    label,
    "enter",
    scene,
    "enter.gif",

    n,
    "can I look at your buttons again? pretty please? I want to show mr. choco.",

    // PAGE 6 ////////////////////////////////////////////////////////////////////////////////////////////////

    label,
    "front",
    scene,
    "front.gif",

    n,
    "can I look at your buttons again? pretty please? I want to show mr. choco.",

    // PAGE 7 ////////////////////////////////////////////////////////////////////////////////////////////////

    label,
    "lobby",
    scene,
    "lobby.gif",

    n,
    "can I look at your buttons again? pretty please? I want to show mr. choco.",

    // PAGE 8 ////////////////////////////////////////////////////////////////////////////////////////////////

    label,
    "lobby_closer",
    scene,
    "lobbycloser.gif",

    n,
    "can I look at your buttons again? pretty please? I want to show mr. choco.",

    // PAGE 9 - ANTEROOM /////////////////////////////////////////////////////////////////////////////////////////

    label,
    "room1door",
    scene,
    "room1door.gif",

    n,
    "can I look at your buttons again? pretty please? I want to show mr. choco.",

    label,
    "room2door",
    scene,
    "room2door.gif",

    n,
    "can I look at your buttons again? pretty please? I want to show mr. choco.",

    label,
    "room3door",
    scene,
    "room3door.gif",

    n,
    "can I look at your buttons again? pretty please? I want to show mr. choco.",

    // PAGE 10 ROOM ONE/////////////////////////////////////////////////////////////////////////////////////////

    label,
    "room1",
    scene,
    "roomone.gif",

    n,
    "can I look at your buttons again? pretty please? I want to show mr. choco.",

    label,
    "portal",
    scene,
    "transport.gif",

    n,
    "can I look at your buttons again? pretty please? I want to show mr. choco.",


    label,
    "market",
    scene,
    "market.gif",

    n,
    "can I look at your buttons again? pretty please? I want to show mr. choco.",

    // PAGE 11 ROOM TWO /////////////////////////////////////////////////////////////////////////////////////////

    label,
    "room2",
    scene,
    "roomtwo.gif",

    n,
    "can I look at your buttons again? pretty please? I want to show mr. choco.",

    // PAGE 12 ROOM THREE/////////////////////////////////////////////////////////////////////////////////////////
    label,
    "room2",
    scene,
    "roomtwo.gif",

    n,
    "can I look at your buttons again? pretty please? I want to show mr. choco.",


    // SOS 1 /////////////////////////////////////////////////////////////////////////////////////////

    // SOS 2 /////////////////////////////////////////////////////////////////////////////////////////

    // SOS 3 /////////////////////////////////////////////////////////////////////////////////////////

  ];
}
