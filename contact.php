<!Doctype html>
<html lang="en">
<head>
<title>check damnu
</title>
</head>
<body>
<form >
    <label for="name">Your Name</label>
    <input type="text"  name="name" placeholder="Your name..">
    <label for="name">Email</label>
    <input type="email"  name="email" placeholder="Your email..">
   
    <label for="message">Message</label>
    <textarea  name="message" placeholder="Write something.." style="height:200px"></textarea>
    <input type="submit" value="Submit">
  </form>
  
<?php

//get data from form  
$name = $_POST['name'];
$email= $_POST['email'];
$message= $_POST['message'];
 
 echo {$name, 
       $email,
	   $message,
 }

?>
<body>
  </html> 