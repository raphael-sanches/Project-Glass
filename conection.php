<?php

 $dbhost = "localhost";
 $dbuser = "root";
 $dbpass = "291100";
 $db = "projectglass";
 
 $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
 
