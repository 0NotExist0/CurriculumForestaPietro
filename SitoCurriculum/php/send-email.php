<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Set recipient email address
    $to = "pietro.foresta15@gmail.com";

    // Set email subject and message
    $subject = "New message from $name";
    $email_message = "Name: $name\nEmail: $email\n\n$message";

    // Set email headers
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send email
    if (mail($to, $subject, $email_message, $headers)) {
        echo "Thank you for your message!";
    } else {
        echo "Sorry, there was a problem sending your message.";
    }
}
?>
