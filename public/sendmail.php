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
$weight = $data['weight'];
$to = $data['to'];
$from = $data['from'];
$company = $data['company'];
$email = $data['email'];
$custom = $data['custom'];
$forwarding = $data['forwarding'];
$type = $data['type'];
$comment = $data['comment'];
$title = 'Заявка с сайта - Вывоз контейнеров'; 
$body = '<p>Тип контейнера: <strong>'.$type.'</strong></p>'.
        '<p>Вес груза: <strong>'.$weight.'</strong></p>'.
        '<p>Откуда: <strong>'.$from.'</strong></p>'.
        '<p>Куда: <strong>'.$to.'</strong></p>'.
        '<p>Имя: <strong>'.$name.'</strong></p>'.
        '<p>Компания: <strong>'.$company.'</strong></p>'.
        '<p>Телефон: <strong>'.$tel.'</strong></p>'.
        '<p>Email: <strong>'.$email.'</strong></p>'.
        '<p>Таможенный режим: <strong>'.$custom.'</strong></p>'.
        '<p>Раскредитация/внутрипортовое экспедирование: <strong>'.$forwarding.'</strong></p>'.
        '<p>Комментарий: <strong>'.$comment.'</strong></p>';    

$mail = new PHPMailer(true); 
try {
  $mail->isSMTP();
  $mail->SMTPDebug = 2;
  $mail->CharSet = 'UTF-8';
  $mail->SMTPAuth   = true;
  $mail->Host       = '*********'; 
  $mail->Username   = '**********'; 
  $mail->Password   = '**********';  
  $mail->SMTPSecure = 'ssl';
  $mail->Port       = 465;
  $mail->setFrom('**********', 'Заявка с сайта'); 
  $mail->addAddress('**********'); 
  $mail->addAddress('**********');
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