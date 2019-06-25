<?php
header("Access-Control-Allow-Origin: *");
if($_POST['fname'] && $_POST['lname'] && $_POST['email'] && $_POST['phone']){
	$collect = array($_POST['fname'],$_POST['lname'],$_POST['email'],$_POST['phone'],);
	$ping = json_encode($collect);

	echo 'Welcome '.$collect[0].'!';


	return array('Thank you! Your info has been received.', $ping);	
	} 
	else {
	echo "Error: Denied";
	return "Error: Denied";
	}

?>