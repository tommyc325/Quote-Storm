<?php



//build the url

$key = 'BF71787D-4C5D-459C-8155-50D25BBC8AB1';

$url = "https://api.realvalidation.com/rpvWebService/RealPhoneValidationTurbo.php?output=json&phone=";

$phone = $_GET['phone'];

$url = $url.$phone;
$url = $url."&token=".$key;
// Get cURL resource
$curl = curl_init();
// Set some options - we are passing in a useragent too here
curl_setopt_array($curl, array(
    CURLOPT_RETURNTRANSFER => 1,
    CURLOPT_URL => $url,
    CURLOPT_USERAGENT => ''
));
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
// Send the request & save response to $resp
$resp = curl_exec($curl);
// Close request to clear up some resources
curl_close($curl);
echo json_encode($resp);
