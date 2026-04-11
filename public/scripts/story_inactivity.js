(function () {
  if (window.__labrintaStoryInactivity) return;
  window.__labrintaStoryInactivity = true;

  var INACTIVITY_MS = 5 * 60 * 1000; // 5 minutes
  var timerId;

  function redirect() {
    window.location.href = "/";
  }

  function resetTimer() {
    clearTimeout(timerId);
    timerId = setTimeout(redirect, INACTIVITY_MS);
  }

  var events = [
    "mousemove",
    "mousedown",
    "keydown",
    "scroll",
    "touchstart",
    "wheel",
    "click",
  ];
  for (var i = 0; i < events.length; i++) {
    document.addEventListener(events[i], resetTimer, { passive: true });
  }

  document.addEventListener("astro:page-load", resetTimer);
  resetTimer();
})();
