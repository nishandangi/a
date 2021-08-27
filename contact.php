<?php
$to = "ns.nishandangi@gmail.com";
$subject = "Mail From ns";
$message= "oh my god i received";
$headers= "From: nishandangi450@gmail.com";

if  (mail ($to, $subject, $message, $headers)){
    echo "mail send successfully"
    }
else  {
    echo " can not send mail because your hosting provider .github doesnot allows you to receive a mail" ;
}
?>
