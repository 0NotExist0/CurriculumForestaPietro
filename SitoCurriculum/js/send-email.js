// Get form element
const form = document.querySelector("#contact-form");

// Add submit event listener to form
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get form data
    const name = form.elements["name"].value;
    const email = form.elements["email"].value;
    const message = form.elements["message"].value;

    // Create AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "send-email.php");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    // Handle response
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Success
                console.log("Thank you for your message!");
            } else {
                // Error
                console.log("Sorry, there was a problem sending your message.");
            }
        }
    };

    // Send AJAX request with form data
    const data = "name=" + encodeURIComponent(name) + "&email=" + encodeURIComponent(email) + "&message=" + encodeURIComponent(message);
    xhr.send(data);
});
