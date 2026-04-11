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

function playVideo(path) {
  return {
    fcn: () => {
      const dialog = document.getElementById("dialogDiv");
      dialog.style.display = "none";
      const bg = document.getElementById("background0");
      bg.style.display = "none";
      const video = document.querySelector("#video");
      video.src = path;
      video.style.opacity = 1;
      video.style.display = "block";

      document.body.style.pointerEvents = "none";

      video.play();
      video.addEventListener("ended", () => {
        bg.style.display = "unset";
        dialog.style.display = "block";
        document.body.style.pointerEvents = "unset";
        video.style.display = "none";
        video.style.opacity = 0;
        playNovel();
      });
    },
  }
}