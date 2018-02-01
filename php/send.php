<?php
//build the url
$ip_address = "75.2.92.149";
if (!empty($_SERVER['HTTP_CLIENT_IP']))
  {
    $ip_address = $_SERVER['HTTP_CLIENT_IP'];
  }
//whether ip is from proxy
elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))
  {
    $ip_address = $_SERVER['HTTP_X_FORWARDED_FOR'];
  }
//whether ip is from remote address
else
  {
    $ip_address = $_SERVER['REMOTE_ADDR'];
  }
$key = 'VqwpVRSGu-dImRE9VPubV-GbE_LGm-abm-2iV_N9VtHIufmpmP2lcPDo';

$url = "https://leads.quotestorm.co/new_api/api.php?Key=";

$string = $_POST['string'];
$def = "&API_Action=submitLead&TYPE=21&Test_Lead=1&Format=JSON&SRC=test&Landing_Page=landing&IP_Address=".$ip_address."&Sub_ID=12&Pub_ID=12345&TCPAAgreed=Yes&Date_Time_Generated=1980-12-23_08:12:11&TCPAText=TCPAText";
$url = $url.$key;


$url = $url.$def;

$url = $url.$string;

$url = str_replace(' ', '%20', $url);

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
