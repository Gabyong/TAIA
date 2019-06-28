<?php
header("Access-Control-Allow-Origin: *");

	$sanitized_fname = htmlspecialchars($_POST['id[0]']);
	$sanitized_lname = htmlspecialchars($_POST['lname']);
	$sanitized_email = htmlspecialchars($_POST['email']);
	$sanitized_phone = htmlspecialchars($_POST['phone']);
	$collect = array($sanitized_fname, $sanitized_lname, $sanitized_email, $sanitized_phone);

	if(!empty($collect))
	{
		$ping = json_encode($collect);
		echo 'Welcome '.$collect[0].'!';
		return array('Thank you! Your info has been received.', $ping);	
	} 
		else 
	{
		echo "Error: Denied";
		return "Error: Denied";
	}
?>