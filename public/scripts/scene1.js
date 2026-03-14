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

for (const src of preload) {
  const image = new Image();
  image.src = "/s_one/" + src;
}

function prepareNovel() {
  novel.imagePath = "/s_one/"; // path to your image directory
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
  rightSideopen = new Position(1030, 560, 1, 1);
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
  sonadorlobby1 = new Position(902, 380, 1, 0);

  ///casca
  cascalobby1 = new Position(275, 295, 0, 0);

  ///casper
  casperlobby1 = new Position(245, 295, 0, 0);

  /* jsCall,
  {
    fcn: () => {
      document.querySelector(".window").style.display = "none";
    },
  },*/

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

      "rental",
      [jump, "rental"],
      "overpass",
      [jump, "highwayone"],
      "enter",
      [jump, "enter"],
      "front",
      [jump, "front"],
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
      "room2",
      [jump, "room2"],
      "market",
      [jump, "market"],
      "car one",
      [jump, "highwaytwo"],
      "car two",
      [jump, "highwaythree"],
      "car three",
      [jump, "highwayfour"],
    ],

    label,
    "beginning",
    n,
    "Poddertown, the industrious hive for the humble Podlet, wakes to the gentle embrace of a dwarf sun.<br> It is somewhat cold, wet, and not very bright.",

    n,
    "It was only unpleasant enough to ignore.",

    casper,
    { image: `casper_walks.gif?A=${Date.now()}`, position: rightSideopen },
    casper,
    "good morning! . . . the sun is up! so I am up!",

    casca,
    { image: `CASCAwalkmad.gif?A=${Date.now()}`, position: rightSideopen },
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
    { image: `casper_walksL.gif?A=${Date.now()}`, position: rightSideopen },

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
    { image: "CASPERsadbasic.gif", position: homecasper1 },

    casper,
    "um. . I. .",

    casca,
    { image: `casca_tiest.gif?A=${Date.now()}`, position: cascadrive7 },

    casca,
    "Here. Just... There. They're back on. Good as new.",

    casca,
    { image: "CASCA_talksadL.gif", position: cascadrive8 },

    n,
    "Casper wasn't a fan of when Casca spoke about good things with such a mad expression.",

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
    "I didn't say you can't play. There's probably toys.",

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
    { image: `CASCAwalkmad.gif?A=${Date.now()}`, position: rightSideopen },

    casca,
    "Mmm.",

    casper,
    "i bet we can see home from here!",

    casca,
    ". . .",

    casper,
    "Casca?",

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
    { image: "sonador_talkL.gif", position: sonadorlobby1 },

    casper,
    { image: `casper_walks.gif?A=${Date.now()}`, position: rightSideopen },

    sonador,
    "hello.",

    casca,
    { image: `CASCAwalkmad.gif?A=${Date.now()}`, position: rightSideopen },

    sonador,
    "can I help you two with anything. .?",

    casca,
    "I just need something to distract Casper for a few hours. Do you have anywhere for kids?",

    sonador,
    "If you--",

    casca,
    "Where?",

    sonador,
    ". . .",

    sonador,
    ". . If you'll follow me. . .",

    casca,
    ". . eh- okay-",

    casper,
    "HI! I'm Casper!",

    sonador,
    ". .Hello Casper.",

    n,
    "It was times like these that made Casca feel like they've completely forgotten how to talk to other adults.",

    // PAGE 9 - ANTEROOM (INITIAL SCENE) /////////////////////////////////////////////////////////////

    label,
    "room1door",
    scene,
    "room1door.gif",

    sonador,
    { image: `sonador_walk.gif?A=${Date.now()}`, position: rightSideopen },

    sonador,
    ". . here you are. . .",

    casper,
    { image: `casper_walksL.gif?A=${Date.now()}`, position: rightSideopen },

    casper,
    "wheee~!",

    casca,
    { image: `CASCAwalkmad_L.gif?A=${Date.now()}`, position: rightSideopen },

    casca,
    ". . thank you. . .",

    sonador,
    ". . anytime. ",

    sonador,
    { image: `sonador_walkL.gif?A=${Date.now()}`, position: rightSideopen },

    ///ROOM ONE (INITIAL SCENE)///////////////////////////////////////////////////////////

    label,
    "room1",
    scene,
    "roomone.gif",

    casca,
    { image: `CASCAWalkmad_L.gif?A=${Date.now()}`, position: rightSideopen },

    casca,
    "Here. . There should be plenty to do. .",

    label,
    "room1_2",
    scene,
    "roomone_dark1.gif",

    casca,
    "Here you are. . There should be plenty to do here. .",

    label,
    "room1_3",
    scene,
    "roomone_dark3.gif",

    casca,
    "Here. . There should be plenty to do. .",

    label,
    "room1_3",
    scene,
    "roomone_dark2.gif",

    casca,
    "Here. . There should be plenty to do. .",

    /// ANTEROOM //////////////////////////////////////////////////////////////////////////////////

    label,
    "room1doorante",
    scene,
    "room1door.gif",

    casca,
    { image: `CASCAwalkmad.gif?A=${Date.now()}`, position: rightSideopen },

    n,
    "The Kindergarten.",

    label,
    "room2door",
    scene,
    "room2door.gif",

    casca,
    { image: `CASCAwalkmad.gif?A=${Date.now()}`, position: rightSideopen },

    n,
    "The Office.",

    label,
    "room3door",
    scene,
    "room3door.gif",

    casca,
    { image: `CASCAwalkmad.gif?A=${Date.now()}`, position: rightSideopen },

    n,
    "Somewhere Familiar.",

    // PAGE 10 ROOM ONE/////////////////////////////////////////////////////////////////////////////////////////

    label,
    "room1",
    scene,
    "roomone.gif",

    casca,
    { image: `CASCAWalkmad_L.gif?A=${Date.now()}`, position: rightSideopen },

    sonador,
    "Here you are. . There should be plenty to do here. .",

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
    "room2closer",
    scene,
    "roomtwocloser.gif",

    n,
    "can I look at your buttons again? pretty please? I want to show mr. choco.",

    // SOS 1 /////////////////////////////////////////////////////////////////////////////////////////

    // SOS 2 /////////////////////////////////////////////////////////////////////////////////////////

    // SOS 3 /////////////////////////////////////////////////////////////////////////////////////////
  ];
}
