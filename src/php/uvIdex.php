<?php
    
    $url = "https://data.epa.gov.tw/api/v2/uv_s_01?api_key=80ed2f9a-4e6c-4b0c-8687-fce7dd5c72b3&limit=1000&sort=publishtime%20desc&format=json";

    function curl_get_file_contents($URL)
    {
        $c = curl_init();
        curl_setopt($c, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($c, CURLOPT_URL, $URL);
        $contents = curl_exec($c);
        curl_close($c);

        if ($contents) return $contents;
        else return FALSE;
    }
    // send request for uv data
    $res = curl_get_file_contents($url);
    // decode receive data and decode to substact "records" data
    $res1 = json_decode($res, true);

    // echo only records data or it will response entire info include api key
    echo json_encode($res1["records"]);
?>