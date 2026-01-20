const MIN_LOADING_TIME = 1000;
const start = Date.now()
window.addEventListener('load', e => {
    const delta = Date.now() - start
    setTimeout(() => {
        document.querySelector('.loader').remove()
        playNovel();
    }, Math.max(0, MIN_LOADING_TIME - delta))
}, { once: true })