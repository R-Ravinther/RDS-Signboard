<?php
if(isset($_POST['submit'])){
	$name = $_POST['name'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$msg = $_POST['msg'];
	
	$to = 'rdssigns@rdssignsindia.com';
	$subject = 'From Enquiry Form';
	$message = "Name: ".$name."\n"."Phone: ".$phone."\n\n". "Message: "."\n".$msg;
	$headers = "From: ".$email;
	
	if(mail($to, $subject, $message, $headers)){		
		echo "<h1>Sent Succesfully! Thank You"." ".$name.", We will Contact you shortly!</h1>";
		echo '<a href="product.html">Click here</a>';
		}
			else{
				echo "Went wrong!";				
			}	
}

?>