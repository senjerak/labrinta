var casca;
var casper;
var mrchoco;
var npc;
var n; // short for "narrator"
var photo;
var textBlock;

var crystalnpc;
var scrollnpc;
var fruitnpc;
var armsnpc;

var leftSide;
var rightSide;
var upperCenter;

var rightSideopen;
var rightSide;
var rightSidedown;

var rightSidelobby;
var leftSide;
var leftSidetwo;
var leftSidethree;

//choco
var rentchoco1;
var rentchoco2;
var rentchoco3;
var homechoco;
var elechoco;
//npc
var rentnpc1;
var rentnpc2;
var rentnpc3;
///car
var rightSidecar;
//sonador
var desk;
var sonadorlobby1;
var sonadorlobby2;
///casca
var elecasca1;
var homecasca1;
var cascalobby1;
var cascalobby2;
var cascalobby3;
var cascadrive;
var cascadrive2;
var cascadrive3;
var cascadrive4;
var cascadrive5;
var cascadrive6;
var cascadrive7;
var cascadrive8;
var rentcasca1;
var rentcasca2;
///casper
var elecasper1;
var elecasper2;
var homecasper2;
var homecasper1;
var casperlobby1;
var casperlobby2;
var casperlobby3;
var casperlobby4;
var casperride;
var casperride2;
var casperride3;
var rentcasper1;
var rentcasper2;
var rentcasper3;
var rentcasper4;

var room_one;

const preload = [
  "raindrops.webp",
  "homebtn.png",
  "home.gif",
  "homefirst.gif",
  "elevator.gif",
  "rental.gif",
  "overpass.gif",
  "overpass2.gif",
  "overpass3.gif",
  "overpass4.gif",
  "overpass5.gif",
  "stills/carinside1.png",
  "stills/carinside2.png",
  "stills/carinside3.png",
  "enter.gif",
  "front.gif",
  "lobby.gif",
  "lobbycloser.gif",
  "room1door.gif",
  "room2door.gif",
  "room3door.gif",
  "roomone.gif",
  "roomone_dark1.gif",
  "roomone_dark2.gif",
  "roomone_dark3.gif",
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
  "Sonador_walk.gif",
  "Sonador_walkR.gif",
  "CASCA_talkmad.gif",
  "CASCA_talkmadL.gif",
  "CASCA_talksad.gif",
  "CASCA_talksadL.gif",
  "CASCAWalksad.gif",
  "CASCAWalkmad.gif",
  "CASCAWalkmad_L.gif",
  "CASCA_talk.gif",
  "CASCA_talkL.gif",
  "Casca_flappies.gif",
  "Casca_fall.gif",
  "CASCA_portal.gif",
  "cascaride1.gif",
  "cascaride_mad1.gif",
  "cascahand1.gif",
  "cascahand2.gif",
  "cascabehind1.gif",
  "cascabehind2.gif",
  "cascabehind3.gif",
  "cascabehind4.gif",
  "cascabehind5.gif",
  "CASPER_talk.gif",
  "CASPER_talkL.gif",
  "CASPER_talkmad.gif",
  "CASPER_talksad.gif",
  "CASPER_talkmadL.gif",
  "CASPER_talksadL.gif",
  "casper_walks.gif",
  "casper_walksL.gif",
  "casper_jumps.gif",
  "casperride1.gif",
  "casperride_sad1.gif",
  "caspermirror.gif",
  "caspermirror2.gif",
  "wheel.gif",
  "front_car.gif",
  "../media/buggotiny.gif",
  "../media/loading.gif",
  "road.mp4",
];

function prepareNovel() {
  sonador = new Character("Soñador", { color: "rgb(147, 108, 236)" });

  npc = new Character("Stranger", { color: "rgb(48, 255, 186)" });
  npc3 = new Character("Station Manager", { color: "rgb(128,125,116)" });
  npc2 = new Character("");
  n = new Character("");

  crystalnpc = new Character("Crystal Seller", { color: "rgb(197, 0, 215)" });
  scrollnpc = new Character("Scroll Seller", { color: "rgb(249, 126, 92)" });
  fruitnpc = new Character("Fruit Seller", { color: "rgb(224, 0, 0)" });
  armsnpc = new Character("Arms Seller", { color: "rgb(0, 146, 78)" });

  one = new Character("", { position: new Position(0.5, 0.2, 0.5, 0.5) });
  marketmap = new Character("", { position: new Position(0.5, 0.2, 0.5, 0.5) });

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
  rentchoco3 = new Position(909, 380, 1, 0);
  //npc
  rentnpc1 = new Position(420, 233, 1, 0);
  rentnpc2 = new Position(431, 233, 1, 0);
  rentnpc3 = new Position(1731, 400, 1, 0);

  ///Drive
  ///casca
  cascadrive = new Position(980, 540, 1, 1);
  cascadrive2 = new Position(380, 540, 1, 1);
  cascadrive3 = new Position(530, 600, 1, 1);
  cascadrive4 = new Position(550, 490, 1, 1);
  cascadrive5 = new Position(300, 490, 1, 1);
  cascadrive6 = new Position(250, 520, 1, 1);
  cascadrive7 = new Position(405, 520, 1, 1);
  cascadrive8 = new Position(277, 520, 1, 1);
  ///casper
  casperride = new Position(700, 20, 1, 0);
  casperride2 = new Position(700, 220, 1, 0);
  casperride3 = new Position(1020, 600, 1, 1);
  ///car
  rightSidecar = new Position(1030, 600, 1, 1);

  ///Lobby
  ///sonador
  desk = new Position(600, 690, 1, 1);
  sonadorlobby1 = new Position(516, 295, 1, 0);
  sonadorlobby2 = new Position(816, 300, 1, 0);

  ///casca
  cascalobby1 = new Position(480, 295, 0, 0);
  cascalobby2 = new Position(500, 300, 0, 0);
  cascalobby3 = new Position(350, 300, 0, 0);

  rightSidelobby = new Position(1020, 560, 1, 1);
  leftSide = new Position(800, 560, 1, 1);
  leftSidetwo = new Position(500, 560, 1, 1);
  leftSidethree = new Position(600, 560, 1, 1);

  ///casper
  casperlobby1 = new Position(245, 295, 0, 0);
  casperlobby2 = new Position(45, 295, 0, 0);
  casperlobby3 = new Position(275, 295, 0, 0);
  casperlobby4 = new Position(540, 300, 0, 0);

  /// Room One ////////////
  cascaroom1 = new Position(285, 300, 0, 0);
  cascaroom2 = new Position(45, 160, 0, 0);
  cascaroom3 = new Position(115, 220, 0, 0);
  cascaportal = new Position(350, 10, 0, 0);
  cascamarket1 = new Position(445, 10, 0, 0);
  cascamarket2 = new Position(458, 325, 0, 0);

  casperroom1 = new Position(5, 300, 0, 0);

  /// Room Two //////
  sonadorroom2_1 = new Position(705, 300, 0, 0);
  cascaroom2_1 = new Position(258, 325, 0, 0);

  /*
   jsCall,
  {
    fcn: () => {
      document.querySelector(".window").style.display = "none";
    },
  },
  
    jsCall,
  {
    fcn: () => {
      document.querySelector(".window").style.display = "none";
    },
  },
  
  
  */

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
      "Hello Handsome :D",

      "START",
      [jump, "beginning"],
      "front",
      [jump, "front"],
      "map_one",
      [jump, "room1map"],
      "lobby",
      [jump, "lobby"],
      "lobby closer",
      [jump, "lobby_closer"],
      "room1 door",
      [jump, "room1door"],
      "room3 door",
      [jump, "room3door"],
      "room2 door",
      [jump, "room2door"],
      "room1",
      [jump, "room1"],
      "room1 cont",
      [jump, "room1_3"],
      "room2",
      [jump, "room2"],
      "market",
      [jump, "market"],
      "portal",
      [jump, "portal"],
    ],

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
    "we're gonna play hide n' seek",

    casper,
    "it's MY turn to look. . . so you're gonna have ta hide somewhere.",

    mrchoco,
    ". . .",

    casper,
    "it's gonna be fun. . . trust me!",

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
    ". . . Are you a member? ",

    casca,
    "It expired last week--",

    npc3,
    "You can renew now for only...",

    casca,
    "No! No thank you. I can't. Yet.",

    npc3,
    ". . . members save on average 30% on toll fare, you know.",

    casca,
    "yep. I'll just buy a guest pass for today.",

    npc3,
    ". . Okay . . . That will be 75 Pods. .",

    casca,
    "Ugh. . Okay.",

    n,
    "Guest prices seem to have gone up since the last time Casca was in such a pinch.",

    n,
    "Not to mention tolls. . .",

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
    "overpass.gif",

    n,
    "Well... the road seemed like it was pretty clear. You would think with all the highways that were built that there would be less traffic",
    n,
    "Everyone seems to have somewhere to be, all at the same time, every day.",

    casper,
    " . . oh no!",

    label,
    "highwaytwo",
    scene,
    "overpass3.gif",

    casper,
    { image: `casperride1.gif?A=${Date.now()}`, position: casperride },

    casca,
    { image: `cascaride1.gif?A=${Date.now()}`, position: cascadrive },

    casca,
    "what!? what is it?",

    casper,
    { image: `casperride_sad1.gif?A=${Date.now()}`, position: casperride },

    casper,
    " ...sniff... choco!",

    casca,
    { image: `cascaride_mad1.gif?A=${Date.now()}`, position: cascadrive },

    casca,
    "stop that! use your words, Casper! . . . Come on.",

    casper,
    "choco!... choco!!",

    casca,
    "what about choco? isn't he still at home?",

    label,
    "highwaythree",
    scene,
    "overpass4.gif",

    casper,
    { image: `casperride_tantrum1.gif?A=${Date.now()}`, position: casperride2 },

    casper,
    "n-no!!!",

    casca,
    { image: `cascahand1.gif?A=${Date.now()}`, position: cascadrive2 },

    casca,
    "UGH! what do you mean? you left him?",

    casca,
    { image: `cascahand2.gif?A=${Date.now()}`, position: cascadrive2 },

    casper,
    ". . . sniff. . . sniff. .",

    casper,
    ". . . no i did not!",

    label,
    "highwayfour",
    scene,
    "overpass2.gif",

    casca,
    { image: `cascabehind1.gif?A=${Date.now()}`, position: cascadrive3 },

    casper,
    { image: `caspermirror.gif?A=${Date.now()}`, position: casperride3 },

    casca,
    "then how's he left at the station? I told you to leave him at home.",

    casper,
    ". . . no. . . no you did--",

    casca,
    { image: `cascabehind3.gif?A=${Date.now()}`, position: cascadrive3 },

    casca,
    "CASPER! Don't start talking back to me!",

    casca,
    { image: `cascabehind5.gif?A=${Date.now()}`, position: cascadrive3 },

    casper,
    { image: `caspermirror3.gif?A=${Date.now()}`, position: casperride3 },

    n,
    "HONK!!! HONK HONK!!",

    casca,
    { image: `cascabehind4.gif?A=${Date.now()}`, position: cascadrive3 },

    casca,
    "AAAAGH!!!",

    casca,
    { image: `cascabehind2.gif?A=${Date.now()}`, position: cascadrive3 },

    casper,
    { image: `caspermirror.gif?A=${Date.now()}`, position: casperride3 },

    casca,
    "I HATE this!",

    casper,
    { image: `caspermirror2.gif?A=${Date.now()}`, position: casperride3 },

    casper,
    ". . . . . me too.",

    label,
    "highwayfive",
    scene,
    "overpass5.gif",

    n,
    "At least that made sense.",

    label,
    "video",

    jsCall,
    {
      fcn: () => {
        const dialog = document.getElementById("dialogDiv");
        dialog.style.display = "none";
        const bg = document.getElementById("background0");
        bg.style.display = "none";
        const video = document.querySelector("#video");
        video.style.opacity = 1;

        document.body.style.pointerEvents = "none";

        video.play();
        video.addEventListener("ended", () => {
          bg.style.display = "unset";
          dialog.style.display = "block";
          document.body.style.pointerEvents = "unset";
          video.remove();
          playNovel();
        });
      },
    },

    pause,
    undefined,

    // PAGE 5 ////////////////////////////////////////////////////////////////////////////////////////////////

    label,
    "enter",

    scene,
    "enter.gif",

    casca,
    { image: `front_car.gif?A=${Date.now()}`, position: rightSide },

    n,
    "Eventually they made it to their destination.",

    npc,
    { image: `front_car.png?A=${Date.now()}`, position: rightSidecar },

    casca,
    { image: "CASCA_talkmad.gif", position: cascadrive4 },

    casper,
    { image: "CASPER_talkL.gif", position: homecasper1 },

    casper,
    " . . .",

    casca,
    { image: "CASCA_talkmadL.gif", position: cascadrive5 },

    casca,
    " . . Did you kick your shoes off again? Casper, I told you to--",

    casca,
    { image: "CASCA_talkmadL.gif", position: cascadrive6 },

    casper,
    { image: "CASPER_talk.gif", position: homecasper1 },

    casper,
    "they fell off!",

    casca,
    { image: "CASCA_talksadL.gif", position: cascadrive6 },

    casca,
    "You don't have to lie to me.",

    casper,
    { image: "caspersadbasic.gif", position: homecasper1 },

    casper,
    "um. . I. .",

    casca,
    { image: `CASCA_tiest.gif?A=${Date.now()}`, position: cascadrive7 },

    casca,
    "Here. Just... There. They're back on. Good as new.",

    casca,
    { image: "CASCA_talksadL.gif", position: cascadrive8 },

    n,
    "Casper wasn't a fan of when Casca spoke such a mad expression.",

    n,
    "At least the parking's free for two hours.",

    // PAGE 6 ////////////////////////////////////////////////////////////////////////////////////////////////

    label,
    "front",
    scene,
    "front.gif",

    casper,
    "where are we going. . ?",

    casca,
    "We're going to read some books.",

    casper,
    "BOOKS!? but i want to play!",

    casca,
    "I didn't say you can't play. . . There's probably toys.",

    casper,
    "oh. . i thought you said that. . .",

    casca,
    ". . .",

    n,
    "LA BRINTA was the only third space left in Poddertown. Barely afloat, the Library has anchored itself as the oldest building in Podder.",

    n,
    "Casca had been meaning to visit more often for some time.",

    // PAGE 7 ////////////////////////////////////////////////////////////////////////////////////////////////

    label,
    "lobby",
    scene,
    "lobby.gif",

    casper,
    { image: `casper_walks.gif?A=${Date.now()}`, position: rightSideopen },

    casper,
    "oh! we're so high up!",

    casca,
    { image: `CASCAWalkmad.gif?A=${Date.now()}`, position: rightSideopen },

    casca,
    "Mmm.",

    casper,
    { image: `CASPER_talk.gif?A=${Date.now()}`, position: casperlobby1 },

    casper,
    "i bet we can see home from here!",

    casca,
    { image: `CASCA_talkmadL.gif?A=${Date.now()}`, position: cascalobby1 },

    casca,
    ". . .",

    casper,
    "there's so many cars on the road!",

    casca,
    ". . .",

    casper,
    { image: `CASPER_talkL.gif?A=${Date.now()}`, position: casperlobby1 },

    casper,
    ". .casca..!",

    casca,
    { image: `CASCA_talkmad.gif?A=${Date.now()}`, position: cascalobby1 },

    casca,
    ". . what?",

    casper,
    "nevermind. .",

    // PAGE 8 ////////////////////////////////////////////////////////////////////////////////////////////////

    label,
    "lobby_closer",
    scene,
    "lobbycloser.gif",

    sonador,
    { image: "Sonador_talkL.gif", position: sonadorlobby1 },

    npc2,
    { image: "desk.png", position: desk },

    casper,
    { image: `casper_walks.gif?A=${Date.now()}`, position: rightSideopen },

    sonador,
    "hello.",

    casca,
    { image: `CASCAWalkmad.gif?A=${Date.now()}`, position: rightSidelobby },

    sonador,
    "can I help you two with anything. . ?",

    casca,
    { image: `CASCA_talkmad.gif?A=${Date.now()}`, position: cascalobby2 },

    casper,
    { image: `CASPER_talkL.gif?A=${Date.now()}`, position: casperlobby3 },

    casca,
    "I just need something to distract Casper for a few hours. Do you have anywhere for kids?",

    sonador,
    { image: "Sonador_eyestalkL.gif", position: sonadorlobby1 },

    sonador,
    "If you-",

    casca,
    { image: `CASCA_talksad.gif?A=${Date.now()}`, position: cascalobby2 },

    casca,
    "Where?",

    sonador,
    { image: "Sonador_talk.gif", position: sonadorlobby1 },

    sonador,
    ". . .",

    sonador,
    { image: "Sonador_eyestalk.gif", position: sonadorlobby1 },

    sonador,
    ". . If you'll follow me. . .",

    casca,
    { image: `CASCA_talk.gif?A=${Date.now()}`, position: cascalobby2 },

    casca,
    ". . oh- okay-",

    casper,
    { image: `casper_jumps.gif?A=${Date.now()}`, position: casperlobby3 },

    casper,
    "HI! I'm Casper!",

    sonador,
    { image: "Sonador_talkL.gif", position: sonadorlobby1 },

    sonador,
    ". . Hello Casper.",

    casca,
    { image: `CASCA_talksad.gif?A=${Date.now()}`, position: cascalobby2 },

    n,
    "It was times like these that made Casca feel like they've completely forgotten how to talk to other adults.",

    // PAGE 9 - ANTEROOM (INITIAL SCENE) /////////////////////////////////////////////////////////////

    label,
    "room1door",
    scene,
    "room1door.gif",

    sonador,
    { image: `Sonador_walk.gif?A=${Date.now()}`, position: leftSide },

    sonador,
    ". . here you are. . .",

    sonador,
    { image: "Sonador_talkL.gif", position: sonadorlobby2 },

    casper,
    { image: `casper_walksL.gif?A=${Date.now()}`, position: leftSide },

    sonador,
    "This is the kindergarten.",

    casca,
    { image: `CASCAWalkmad_L.gif?A=${Date.now()}`, position: leftSidetwo },

    casper,
    { image: `CASPER_talk.gif?A=${Date.now()}`, position: casperlobby4 },

    sonador,
    "There's plenty to do inside.",

    casca,
    { image: `CASCA_talkmadL.gif?A=${Date.now()}`, position: cascalobby3 },

    casper,
    "woooahh!",

    sonador,
    ". . .",

    casca,
    ". . thank you. . .",

    sonador,
    { image: "Sonador_eyestalkL.gif", position: sonadorlobby2 },

    sonador,
    ". . If you need anything, you know where to find me. ",

    sonador,
    { image: `Sonador_walkR.gif?A=${Date.now()}`, position: leftSidethree },

    sonador,
    ". . If you need anything, you know where to find me. ",

    // PAGE 10 ROOM ONE/////////////////////////////////////////////////////////////////////////////////////////

    label,
    "room1",
    scene,
    "roomone.gif",

    casper,
    { image: `casper_walksL.gif?A=${Date.now()}`, position: leftSide },

    casper,
    "woah! so many toys!!",

    casca,
    { image: `CASCAWalkmad_L.gif?A=${Date.now()}`, position: leftSidetwo },

    casca,
    "Thank goodness. . .",

    casper,
    { image: `CASPER_talk.gif?A=${Date.now()}`, position: casperlobby4 },

    casper,
    "will you play with me?",

    casca,
    { image: `CASCA_talkmadL.gif?A=${Date.now()}`, position: cascalobby3 },

    casper,
    { image: "caspersadbasic.gif", position: casperlobby4 },

    casca,
    "...no, not right now,",

    casper,
    "whaa.. why?",

    casca,
    { image: `CASCA_talksadL.gif?A=${Date.now()}`, position: cascalobby3 },

    casca,
    "I just can't.",

    casper,
    "but-",

    casca,
    "Cas-",

    casper,
    { image: "CASPER_talkmad.gif", position: casperlobby4 },

    casper,
    "No! WHY Why Why!",

    casper,
    { image: `CASPER_jumpmad.gif?A=${Date.now()}`, position: casperlobby4 },

    casper,
    "WHY!!! Why!!",

    casper,
    "W",

    casper,
    "H",

    casper,
    "Y",

    casper,
    "!!!!",

    casper,
    { image: "CASPER_talkmad.gif", position: casperlobby4 },

    casca,
    { image: `Casca_flappies.gif?A=${Date.now()}`, position: cascaroom1 },

    casca,
    "CASPER!",

    casca,
    { image: `CASCA_talksadL.gif?A=${Date.now()}`, position: cascalobby3 },

    casca,
    ". . .",

    casper,
    { image: "CASPER_talkmadL.gif", position: casperlobby4 },

    casper,
    ". . .",

    casca,
    { image: `CASCA_talksadL.gif?A=${Date.now()}`, position: cascaroom3 },

    casca,
    "Go on. . . I'll watch from here.",

    casca,
    { image: `CASCA_sit.gif?A=${Date.now()}`, position: cascaroom2 },

    n,
    "Casper knew better than to continue at this rate.",

    casca,
    { image: `CASCA_sit4.gif?A=${Date.now()}`, position: cascaroom2 },

    n,
    ". . . to some degree.",

    casca,
    { image: `CASCA_sit7.gif?A=${Date.now()}`, position: cascaroom2 },

    //phone scene

    casper,
    { image: "CASPER_talkmadL.gif", position: casperlobby4 },

    casca,
    ". . . ick . .",

    casca,
    { image: `CASCA_sit8.gif?A=${Date.now()}`, position: cascaroom2 },

    casca,
    ". . I can't stop yawning . .",

    casca,
    { image: `CASCA_sit2.gif?A=${Date.now()}`, position: cascaroom2 },

    casca,
    ". . .",

    casper,
    " Hmmmm. . . i want to play with. . . YOU!",

    casca,
    { image: `CASCA_sit3.gif?A=${Date.now()}`, position: cascaroom2 },

    casca,
    ". . . . . . ZzZzzZ . .",

    casper,
    "you're the BAD GUY!",

    casper,
    "hee hee!",

    label,
    "room1_2",
    scene,
    "roomone_dark1.gif",

    casca,
    { image: `CASCA_sit3.gif?A=${Date.now()}`, position: cascaroom2 },

    casper,
    { image: "CASPER_talkL.gif", position: casperlobby4 },

    casper,
    "huh. . ?",

    label,
    "room1_3",
    scene,
    "roomone_dark2.gif",

    casca,
    { image: `CASCA_sit3.gif?A=${Date.now()}`, position: cascaroom2 },

    casper,
    { image: "caspersadbasic.gif", position: casperlobby4 },

    casper,
    "whats going on?",

    casca,
    ". . .",

    casper,
    "who's there?",

    n,
    ". . .",

    casper,
    "i'm scared. . !",

    casca,
    ". . ZZzZzzz. . .",

    label,
    "room1_4",
    scene,
    "roomone_dark3.gif",

    casper,
    { image: "CASPER_talk.gif", position: casperlobby4 },

    casca,
    { image: `CASCA_sit3.gif?A=${Date.now()}`, position: cascaroom2 },

    casper,
    "woah!",

    casper,
    "what was that?",

    casper,
    { image: `casper_walks2.gif?A=${Date.now()}`, position: casperroom1 },

    casper,
    "Oh..!!",

    label,
    "room1_5",
    scene,
    "roomone_dark2.gif",

    casca,
    { image: `CASCA_sit3.gif?A=${Date.now()}`, position: cascaroom2 },

    casca,
    ". . . ZzzZZZzZzz . .",

    casca,
    ". . . . . . ZzZzz . .",

    casca,
    { image: `CASCA_sit5.gif?A=${Date.now()}`, position: cascaroom2 },

    casca,
    ". . . . huh?",

    casca,
    { image: `CASCA_sit9.gif?A=${Date.now()}`, position: cascaroom2 },

    n,
    "It never failed to surprise Casca. .",

    casca,
    { image: `CASCA_sit6.gif?A=${Date.now()}`, position: cascaroom2 },

    n,
    ". . how quickly everything changes.",

    casca,
    "Casper?",

    casca,
    { image: `CASCA_sit9.gif?A=${Date.now()}`, position: cascaroom2 },

    casca,
    "Casper! Where are you?",

    label,
    "room1_6",
    scene,
    "roomone_dark1.gif",

    casca,
    { image: `CASCA_sit9.gif?A=${Date.now()}`, position: cascaroom2 },

    casca,
    "Casper?",

    label,
    "room1_7",
    scene,
    "roomone.gif",

    casca,
    { image: `CASCA_sit9.gif?A=${Date.now()}`, position: cascaroom2 },

    /// IMG MAP ONE //////////////////////////////////////////////////////////////////////////////////

    label,
    "room1map",

    room_one,
    { image: "roomone.gif" },
    imagemap,
    { madId: "room_one", character: one },

    label,
    "stars",
    n,
    "little twinkle star",

    label,
    "animals",
    n,
    "plastic zoo creature",

    label,
    "posters",
    n,
    "playful posties of goobles",

    label,
    "dinos",
    n,
    "speedy speedster-saur",

    label,
    "busyboard",
    n,
    "knick-knacker wall for twisty knobs",

    label,
    "cat",
    n,
    "Mi-mi Ow",

    label,
    "mouse",
    n,
    "Squeaker",

    label,
    "bowl",
    n,
    "bowl of naks",

    label,
    "skates",
    n,
    "Rolley Pollies",

    label,
    "books",
    n,
    "pastpods recounter",

    label,
    "carpet",
    n,
    "what's this?",

    /// PORTAL //////////////////////////////////////////////////////////////////////////////////

    label,
    "carpet",
    label,
    "portal",
    scene,
    "transport.gif",

    casca,
    { image: `CASCA_portal.gif?A=${Date.now()}`, position: cascaportal },

    casca,
    "A-AAAA!!!",

    /// MARKET //////////////////////////////////////////////////////////////////////////////////

    label,
    "market",
    scene,
    "market.gif",

    casca,
    { image: `CASCA_fall.gif?A=${Date.now()}`, position: cascamarket1 },

    casca,
    "w-woah!!",

    casca,
    { image: `CASCA_fall2.gif?A=${Date.now()}`, position: cascamarket2 },

    casca,
    "omf!",

    n,
    "The Underpass",

    casca,
    ". . . Where am I?",

    n,
    "Casca found it hard to think through the noise of the crowd.",

    crystalnpc,
    "THE CRYSTAL CALLS!",

    scrollnpc,
    "What have you?",

    fruitnpc,
    "Farm Fresh!",

    armsnpc,
    "Trade Here. Trade.",

    casca,
    { image: `CASCA_talk.gif?A=${Date.now()}`, position: cascamarket2 },

    casca,
    "Casper? Are you here?",

    casca,
    "Casper!!",

    label,
    "Crystal",

    crystalnpc,
    "Ah.. Welcome to my shop. I have plenty of delightful trinkets.",

    crystalnpc,
    "There is more than meets the eye, my dear.",

    casca,
    "I need to get back to the library... do you know where we are?",

    crystalnpc,
    "..why, we are on Scarlet of course!",

    crystalnpc,
    "The best, most beautiful world to grace the eyes!",

    casca,
    "what? no- thats obvious! i meant here! right here'",

    crystalnpc,
    "The Library? ah... I love the Library.",

    crystalnpc,
    "I have something I need to return there.",

    casca,
    "Did you hear me? CAN you hear me?",

    casca,
    "how am I gonna get back?",

    crystalnpc,
    "hmm... not sure about that. but here!",

    crystalnpc,
    "be a doll and take this for me once you figure it out!",

    casca,
    "...huh?",

    n,
    "The Story of Scarlet, Vol. One",

    casca,
    "...what? what is this?",

    crystalnpc,
    "Go on! Shoo! Go find your way!",

    label,
    "backfromcrystal",

    casca,
    "...",

    ///SOS1 plays

    label,
    "Scroll",

    scrollnpc,
    "I have wares... you have pods?",

    casca,
    "barely... can you help me?",

    scrollnpc,
    "help has a price..",

    casca,
    "No! Please! Where am I?",

    casca,
    "did you not see me drop from the sky?",

    scrollnpc,
    "...not everything is about you.",

    casca,
    "...thanks..",

    scrollnpc,
    "I give you nothing.",

    label,
    "backfromscroll",

    casca,
    "I can see that...",

    casca,
    "...what am I going to do?",

    label,
    "Fruit",

    fruitnpc,
    "No, No, No! I smell your wealth!",

    fruitnpc,
    "theres nothing for you. theres nothing for me.",

    casca,
    "i just need to know how to get back to the library!",

    fruitnpc,
    "You think I know?",

    fruitnpc,
    "i just sell fruit.",

    casca,
    "you've never driven past there?",

    fruitnpc,
    "Fruit is a grind that never lets up the hustle.",

    label,
    "backfromfruit",

    casca,
    "...ugh.. that was fruitless..",

    casca,
    "ha ha ha...",

    label,
    "Arms",

    /// ANTEROOM //////////////////////////////////////////////////////////////////////////////////

    label,
    "room1doorante",
    scene,
    "room1door.gif",

    casca,
    { image: `CASCA_fall.gif?A=${Date.now()}`, position: cascamarket1 },

    casca,
    "woah!!",

    casca,
    { image: `CASCA_fall2.gif?A=${Date.now()}`, position: cascamarket2 },

    casca,
    "oof!",

    n,
    "The Kindergarten.",

    casca,
    "that was weird...",

    casca,
    "did that book bring me back here?",

    casca,
    "CASPER!! WHERE ARE YOU?",

    casca,
    "Casper...?",

    n,
    ". . .",

    casper,
    { image: "CASPER_talkL.gif", position: casperlobby4 },

    label,
    "room2door",
    scene,
    "room2door.gif",

    casca,
    { image: `CASCAWalkL.gif?A=${Date.now()}`, position: leftSidetwo },

    n,
    "The Office.",

    casca,
    "Casper?? You in there?",

    // PAGE 11 ROOM TWO /////////////////////////////////////////////////////////////////////////////////////////

    label,
    "room2",
    scene,
    "roomtwo.gif",

    sonador,
    { image: "Sonador_eyestalkL.gif", position: sonadorroom2_1 },

    casca,
    { image: `CASCA_talkL.gif?A=${Date.now()}`, position: cascaroom2_1 },

    casca,
    "oh..! I'm sorry. I didn't realize you were in here.",

    sonador,
    ". . . It's quite alright.",

    sonador,
    { image: "Sonador_talkL.gif", position: sonadorroom2_1 },

    sonador,
    "why don't you join me?",

    casca,
    { image: `CASCA_talkmadL.gif?A=${Date.now()}`, position: cascaroom2_1 },

    casca,
    "I can't. I'm looking for Casper. He's lost.",

    sonador,
    ". . . Is Casper the one who's lost?",

    casca,
    { image: `CASCA_talksadL.gif?A=${Date.now()}`, position: cascaroom2_1 },

    casca,
    "Whats that supposed to mean?",

    sonador,
    "Maybe you should slow down and take a moment to think this through.",

    casca,
    { image: `CASCA_flappies.gif?A=${Date.now()}`, position: cascaroom2_1 },

    casca,
    "Did you hear me? I don't HAVE the time! I HAVE to FIND CASPER!",

    sonador,
    "If I told you I know where he is, would you sit and chat with me..?",

    casca,
    "You know where he is?? Is this some sort of joke!?",

    sonador,
    "I don't know for certain, but I have an idea.",

    sonador,
    "I'm sure that he's safe, regardless.",

    casca,
    ". . . fine.",

    casca,
    "you better help me after this.",

    sonador,
    "come with me.",

    ///observatory

    sonador,
    "I want to give you a book.",

    casca,
    ". . . uh . . I appreciate it, but I'm not sure how this is going to help me find casper.",

    sonador,
    "Is anyone sure of anything?",

    casca,
    "um. . . I guess not.",

    sonador,
    "I like to think that assurance comes with routine.",

    sonador,
    "habit.",

    sonador,
    "it's pretty hard to know what to do when no one's done it right before.",

    casca,
    "but who's to say whats right or wrong?",

    sonador,
    "does that make a difference?",

    casca,
    "well, yeah, duh.",

    casca,
    "you can't just pretend like there aren't bad intentions out there.",

    sonador,
    ". . . even good intentions can hurt sometimes too.",

    casca,
    ". . .",

    casca,
    "yeah, well, they're still good.",

    sonador,
    "are they...?",

    casca,
    ". . .",

    sonador,
    "Here, take this.",

    n,
    "The Story of Scarlet, Vol. Two",

    casca,
    "What do I need this for?",

    sonador,
    "You're at the library. You might as well read something while you're here.",

    n,
    "Casca thought about the first book and had second thoughts.",

    casca,
    "I'm doing this for Casper.",

    sonador,
    "As am I.",

    ///SOS2

    // PAGE 12 ROOM THREE/////////////////////////////////////////////////////////////////////////////////////////

    label,
    "room3door",
    scene,
    "room3door.gif",

    casca,
    { image: `CASCA_fall.gif?A=${Date.now()}`, position: cascamarket1 },

    casca,
    "woah!!",

    casca,
    { image: `CASCA_fall2.gif?A=${Date.now()}`, position: cascamarket2 },

    casca,
    "oof!",

    n,
    "Somewhere Familiar.",

    // SOS 1 /////////////////////////////////////////////////////////////////////////////////////////

    // SOS 2 /////////////////////////////////////////////////////////////////////////////////////////

    // SOS 3 /////////////////////////////////////////////////////////////////////////////////////////
  ];
}
