<?php
header("Access-Control-Allow-Origin: *");
	
	$collect = array();
	foreach($_POST as $key => $value){						
		$collect[$key] = htmlspecialchars($value);
	}

	if(!empty($collect))
	{
		$ping = json_encode($collect);
		echo 'Welcome '.$collect['fname'].'!';
		return array('Thank you! Your info has been received.', $ping);
	}
		else 
	{
		echo "Error: Denied";
		return "Error: Denied";
	}
?>

