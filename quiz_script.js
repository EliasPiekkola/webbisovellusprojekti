document.addEventListener("DOMContentLoaded", function() {
    // Get references to the Yes and No buttons
    var yesButton = document.querySelector(".yes");
    var noButton = document.querySelector(".no");
    
    // Get reference to the response paragraph and the beaver image
    var response = document.getElementById("response");
    var beaverImage = document.getElementById("beaver-image");

    // Add click event listeners to the buttons
    yesButton.addEventListener("click", function() {
        response.textContent = "Don't we all";
        beaverImage.src = "assets/pictures/happy_beaver.jpg"; 
        beaverImage.alt = "Happy Beaver";
    });

    noButton.addEventListener("click", function() {
        response.textContent = ">:(";
        beaverImage.src = "assets/pictures/angry_beaver.jpg";
        beaverImage.alt = "Angry Beaver";
    });
});