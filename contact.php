<?php
//get data from form  
$name = $_POST['name'];
$email= $_POST['email'];
$message= $_POST['message'];
$file= $_POST['file'];

$to = "nishandangi450@gmail.com";
$subject = "Mail From website";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $message. "\r\ file =" . $file ;
            
$headers = "From: noreply@nishandangi.com.np" . "\r\n" .
"CC: ns.nishandangi@gmail.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>