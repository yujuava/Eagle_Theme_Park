<?php
    
    $url = "https://data.epa.gov.tw/api/v2/uv_s_01?api_key=80ed2f9a-4e6c-4b0c-8687-fce7dd5c72b3&limit=1000&sort=publishtime%20desc&format=json";

    $res = file_get_contents($url);

    echo $res;
?>