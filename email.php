<?php
//variable setting
$name =$_request['name'];
$email =$_request['email'];
$message =$_request['message'];
$file =$_request['file'];

//check input fields
if (empty($name) || empty($email) || empty(message) || empty(file)     )
{
	echo "please complete the process";

}
else{
	mail("ns.nishandangi@gmail.com" ,"request from web" , "$message" ,"$file" );
	echo "<script type='text/javascript' >alert(' your request sent successfully, you will be guided soon through mail');
	window.history.log(-1);
	</script>"
}
?>