<?php

//build the url
//https://leads.quotestorm.co/new_api/api.php?Key=Vq3pEiHOEtAGu-s9m-dTVfe1VRNNmfAiufEGuRmqV_ENkP3pmP2lcPDo&API_Action=getLeadDetails&Lead_ID=513660693&Lead_Type=23
$key = 'Vq3pEiHOEtAGu-s9m-dTVfe1VRNNmfAiufEGuRmqV_ENkP3pmP2lcPDo';

$url = "https://leads.quotestorm.co/new_api/api.php?Key=Vq3pEiHOEtAGu-s9m-dTVfe1VRNNmfAiufEGuRmqV_ENkP3pmP2lcPDo&API_Action=requestRefundForLead&Format=JSON";

$leadid = $_POST['leadid'];
$partnerid = $_POST['partnerid'];
$infostring = $_POST['infostring'];
$url = $url.'&Lead_ID='.$leadid.'&Lead_Type=23&Partner_ID='.$partnerid.$infostring;

echo $url;

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
//test
//test2
