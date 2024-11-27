<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';
$json = file_get_contents('php://input'); 
$data = json_decode($json, true);
$name = $data['name'];
$tel = $data['tel'];
$topic = $data['topic'];




$title = 'Заявка с сайта (короткая форма) - '.$topic.''; 
$body = '<p>Имя: <strong>'.$name.'</strong></p>'.
        '<p>Телефон: <strong>'.$tel.'</strong></p>';    

$mail = new PHPMailer(true); 
try {
  $mail->isSMTP();
  $mail->SMTPDebug = 2;
  $mail->CharSet = 'UTF-8';
  $mail->SMTPAuth   = true;
  $mail->Host       = '*********'; 
  $mail->Username   = '*********'; 
  $mail->Password   = '*********'; 
  $mail->SMTPSecure = 'ssl';
  $mail->Port       = 465;
  $mail->setFrom('*********', 'Заявка с сайта'); 
  $mail->addAddress('*********');
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;
  $mail->send(); 
  echo ('Сообщение отправлено успешно!');
} catch (Exception $e) {
    header('HTTP/1.1 400 Bad request');
    echo('Ошибка отправки {$mail->ErrorInfo}');
}
?>