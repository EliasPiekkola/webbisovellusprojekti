const options = document.querySelectorAll('.answer button');

options.forEach(option => {
    option.addEventListener('click', () => {
        if (option.classList.contains('yes')) {
            displayResponse("Don't we all");
        } else if (option.classList.contains('no')) {
            displayResponse("> :(");
        }
    });
});

function displayResponse(message) {
    const responseContainer = document.getElementById('response');
    responseContainer.textContent = message;
}