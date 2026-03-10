<?php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

$data = json_decode(file_get_contents("php://input"), true);

$name = $data['name'];
$email = $data['email'];
$message = $data['message'];

$to = "pujadhital77@gmail.com";
$subject = "New Portfolio Contact";

$body = "Name: $name\nEmail: $email\nMessage: $message";

$headers = "From: $email";

if(mail($to, $subject, $body, $headers)){
    echo json_encode(["success" => true]);
}else{
    echo json_encode(["success" => false]);
}

?>