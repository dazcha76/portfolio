<?php 

    require_once('email_config.php');

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'PHPMailer/src/Exception.php';
    require 'PHPMailer/src/PHPMailer.php';
    require 'PHPMailer/src/SMTP.php';

    $mail = new PHPMailer(true);  

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    try {

        $mail->SMTPDebug = 0;                                 
        $mail->isSMTP();                               
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;                              
        $mail->Username = EMAIL_USER;                
        $mail->Password = EMAIL_PASSWORD;     
        $mail->SMTPSecure = 'tls';                
        $mail->Port = 587;                                    

        $mail->setFrom(EMAIL_USER);              
        $mail->addReplyTo($email);

        $mail->isHTML(true);                              
        $mail->Subject = "Danika's Webpage";
        $mail->Body    = 'Name: '.$name.'</br>'
                        .'Email: '.$email.'<br>'
                        .'Message: '.$message;
        $mail->AltBody = htmlentities($message);

        if ($mail->send()) { 
            header('Location:index.html#contact');       
        } 
    } catch (Exception $e) {
        echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
    }

?>