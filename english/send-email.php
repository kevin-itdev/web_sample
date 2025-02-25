<?php
if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $to = 'kevin.itdev@gmail.com';
    $subject = 'New message from ' . $name . ': ' . $subject;
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    if(mail($to, $subject, $body, $headers)){
        echo '<p>Your message has been sent!</p>';
    } else {
        echo '<p>There was a problem sending your message. Please try again.</p>';
    }
}
?>