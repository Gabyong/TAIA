<?php
header("Access-Control-Allow-Origin: *");
if($_POST['fname'] && $_POST['lname'] && $_POST['email'] && $_POST['phone']){
	$collect = array(
			'fname' => $_POST['fname'],
			'lname' => $_POST['lname'],
			'email' => $_POST['email'],
			'phone' => $_POST['phone'],
	);

	$ping = json_encode($collect);

	echo json_encode(array('Thank you! Your info has been received.', $collect));
	return array('Thank you! Your info has been received.', $ping);
} else {
	echo "Error: Denied";
	return "Error: Denied";
