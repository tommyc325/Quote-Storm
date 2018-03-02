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
 $date = date('Y-m-d H:i:s');
$url = "https://leads.quotestorm.co/new_api/api.php?Key=";
$tcpatext="By clicking the Request a Quote button above, I understand that I may be contacted by Quote Storm, its affiliates, and captive and/or independent agents affiliated with one or more insurance companies, including, but not limited to State Farm and Allstate. I agree to receive calls about insurance products (which may be auto-dialed, use artificial or pre-recorded voice) from Quote Storm, its affiliates, captive and/or independent agents affiliated with one or more insurance companies, including, but not limited to State Farm and Allstate or their agents to the number I provided above. I understand that my consent to receive calls is not required as a condition to purchase any goods or services.";
$string = $_POST['string'];
$tc = $_POST['tc'];
$def = "&API_Action=submitLead&TYPE=21&Format=JSON&SRC=test&Landing_Page=landing&IP_Address=".$ip_address."&TCPAAgreed=".$tc."&Date_Time_Generated=".$date."&TCPAText=".$tcpatext;
//$def = "&API_Action=submitLead&Test_Lead=1&TYPE=21&Format=JSON&SRC=test&Landing_Page=landing&IP_Address=".$ip_address."&TCPAAgreed=".$tc."&Date_Time_Generated=".$date."&TCPAText=".$tcpatext;
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
