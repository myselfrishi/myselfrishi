var codeBtn = document.getElementById('code');
var twitterBtn = document.getElementById('twitter');

function replaceCodeText(e) {
    codeBtn.innerHTML="Python, JS";
}
function resetCodeText(e) {
    codeBtn.innerHTML="CODE";
}

codeBtn.addEventListener("mouseover",replaceCodeText);
codeBtn.addEventListener("mouseout",resetCodeText);

function replaceTweetText(e) {
    twitterBtn.innerHTML="@shreydan";
}
function resetTweetText(e) {
    twitterBtn.innerHTML="TWITTER";
}

twitterBtn.addEventListener("mouseover",replaceTweetText);
twitterBtn.addEventListener("mouseout",resetTweetText);