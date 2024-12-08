let numButtonClicks = 0;
function buttonClicked() {
    numButtonClicks = numButtonClicks + 1;
    document.getElementById("mainDiv").textContent =
        "Button Clicked times: " + numButtonClicks;
}

 document.getElementById('clickableImage').addEventListener('click', function() {
        window.open('sandy-jawn-landing.html', '_blank');
    });

// Open the lightbox with the clicked image
function openLightbox(src) {
  var modal = document.getElementById("lightboxModal");
  var modalImg = document.getElementById("lightboxImage");
  
  modal.style.display = "flex"; // Show the modal (lightbox)
  modalImg.src = src; // Set the source of the modal image to the clicked image
}

// Close the lightbox when the user clicks anywhere on the modal
function closeLightbox() {
  var modal = document.getElementById("lightboxModal");
  modal.style.display = "none"; // Hide the modal
}
