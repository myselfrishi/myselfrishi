var codeBtn = document.getElementById('code');
var twitterBtn = document.getElementById('twitter');
var SpotifyBtn = document.getElementById('spotify');

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
    twitterBtn.innerHTML="ULP";
}
function resetSpotifyText(e) {
    twitterBtn.innerHTML="SPOTIFY";
}

spotifyBtn.addEventListener("mouseover",replaceSpotifyText);
spotifyBtn.addEventListener("mouseout",resetSpotifyText);

