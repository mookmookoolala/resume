<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Change the email address to yours
    $to = 'mkk1994@hotmail.com';
    $subject = 'Contact Form Submission';
    $body = "Name: $name\nEmail: $email\n\n$message";

    // Send email
    mail($to, $subject, $body);

    // Redirect to a thank you page
    header('Location: Thanks.html');
    exit;
}
?>
