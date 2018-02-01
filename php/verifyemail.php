<?php

//build the url

$key = '16d21db6-acea-40d5-af56-1f2b80be5fdb';

$url = "https://bpi.briteverify.com/emails.json?address=";

$email = $_GET['email'];

$url = $url.$email;
$url = $url."&apikey=".$key;

// Get cURL resource
$curl = curl_init();
// Set some options - we are passing in a useragent too here
curl_setopt_array($curl, array(
    CURLOPT_RETURNTRANSFER => 1,
    CURLOPT_URL => $url,
    CURLOPT_USERAGENT => 't'
));
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
// Send the request & save response to $resp
$resp = curl_exec($curl);
// Close request to clear up some resources
curl_close($curl);
echo json_encode($resp);
