<?php
$username="root";
$password="";
$host="localhost";

$connection=mysqli_connect($host,$username,$password);
if(!$connection){
    echo "error connecting to server!" .mysqli_connect_error();
}

else{
    echo "connect to server<br>";
}


?>