window.onload = () => {
    bgVideo.volume = 0.1;
    document.oncontextmenu = () => false;
}
//const isVideoPlaying = video => !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2);

// if (isVideoPlaying) {
// 	console.log("video is playing");
// 	document.getElementById("button").className='button fas fa-pause';
// }

function toggle(el){
    if (el.className=="button fas fa-play")
    {
        el.className="button fas fa-pause";
        bgVideo.play();
    }
    else
    {
        bgVideo.pause();
        el.className="button fas fa-play";
    }
    return false;
}
window.changeSpeed = function(val)
{
    bgVideo.playbackRate = val / 100;
}