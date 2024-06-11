<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Validate and process data (you can add more validation here)

    // Send email (you can customize this part)
    $to = 'ns.nishandangi@gmail.com';
    $subject = 'Contact Form Submission';
    $headers = "From: $name <$email>\r\n";
    $success = mail($to, $subject, $message, $headers);

    if ($success) {
        echo 'Thank you! Your message has been sent.';
    } else {
        echo 'Oops! Something went wrong. Please try again later.';
    }
} else {
    echo 'Invalid request.';
}
?>
