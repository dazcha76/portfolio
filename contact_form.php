<?php

    require_once('email_config.php');

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'PHPMailer/src/Exception.php';
    require 'PHPMailer/src/PHPMailer.php';
    require 'PHPMailer/src/SMTP.php';

    $mail = new PHPMailer(true);   

    try {

        $mail->SMTPDebug = 0;                                 
        $mail->isSMTP();                               
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;                              
        $mail->Username = EMAIL_USER;                
        $mail->Password = EMAIL_PASSWORD;     
        $mail->SMTPSecure = 'tls';                
        $mail->Port = 587;                                    

        $mail->setFrom('dqswebpage@gmail.com');
        $mail->addAddress('dazcha@hotmail.com');
        $mail->addCC('danika.quinteros@gmail.com');               
        $mail->addReplyTo($_POST['email']);

        $mail->isHTML(true);                              
        $mail->Subject = "Danika's Webpage";
        $mail->Body    = "From: ".($_POST['name']."\n Email: ".$_POST['email']."\n Message: ".$_POST['message']);
        $mail->AltBody = htmlentities($_POST['message']);

        if ($mail->send()) { 
            header("Location:index.html");          
        } 
    } catch (Exception $e) {
        echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
    }

?>