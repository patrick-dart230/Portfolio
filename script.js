let numButtonClicks = 0;
function buttonClicked() {
    numButtonClicks = numButtonClicks + 1;
    document.getElementById("mainDiv").textContent =
        "Button Clicked times: " + numButtonClicks;
}

 document.getElementById('clickableImage').addEventListener('click', function() {
        window.open('sandy-jawn-landing.html', '_blank');
    });