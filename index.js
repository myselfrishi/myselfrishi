var codeBtn = document.getElementById('code');
var twitterBtn = document.getElementById('twitter');
var spotifyBtn = document.getElementById('playlist');

function replaceCodeText(e) {
    codeBtn.innerHTML="Python, JS";
}
function resetCodeText(e) {
    codeBtn.innerHTML="CODE";
}

codeBtn.addEventListener("mouseover",replaceCodeText);
codeBtn.addEventListener("mouseout",resetCodeText);

function replaceTweetText(e) {
    twitterBtn.innerHTML="@shreydanmusic";
}
function resetTweetText(e) {
    twitterBtn.innerHTML="TWITTER";
}

twitterBtn.addEventListener("mouseover",replaceTweetText);
twitterBtn.addEventListener("mouseout",resetTweetText);

function replaceSpotifyText(e) {
    spotifyBtn.innerHTML="ULP";
}
function resetSpotifyText(e) {
    spotifyBtn.innerHTML="SPOTIFY";
}

spotifyBtn.addEventListener("mouseover",replaceSpotifyText);
spotifyBtn.addEventListener("mouseout",resetSpotifyText);

