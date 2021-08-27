<?php
//variable setting
$name =$_request['name'];
$email =$_request['email'];
$message =$_request['message'];


//check input fields
if (empty($name) || empty($email) || empty($message)     )
{
	echo "please complete the process";

}
else{
	mail("ns.nishandangi@gmail.com" ,"request from web" , "$message" ,"From:$name <$email>"  );
	echo "<script type='text/javascript' >alert(' your request sent successfully, you will be guided soon through mail');
	window.history.log(-1);
	</script>"
}
?>
