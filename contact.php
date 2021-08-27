<?php
//get data from form  
$name = $_POST['name'];
$email= $_POST['email'];
$message= $_POST['message'];
$to = "nishandangi450@gmail.com";
$subject = "Mail From ns";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $message;
$headers = "From: ns.nishandangi@gmai.com" . "\r\n" .
"CC: nslove45@gmail.com";
if($email!=NULL){
    mail("$to" , "$subject", "$txt" ,"$headers");
}
else {
    echo "please fill out all fileds";
}
//redirect
header("Location:thankyou.html");
?>
