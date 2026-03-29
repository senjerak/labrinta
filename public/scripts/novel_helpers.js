var script;
var prepareNovel;

function preloadImages(prefix, images) {
  if (typeof prefix !== "string") {
    images = prefix ?? [];
    prefix = "/s_one/";
  }
  for (const src of images) {
    const image = new Image();
    image.src = prefix + src;
  }
}

function waitForNovel(setupScript) {
  if (!document.getElementById("novelDiv")) return;
  if (typeof initNovel === "function") {
    prepareNovel = setupScript;
    initNovel(1024, 600);
  } else {
    requestAnimationFrame(() => waitForNovel(setupScript));
  }
}

function changeScene(scene) {
  return () => {
    window.location.href = `/scenes/${scene}`;
  };
}
