<!DOCTYPE html> 
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/css?family=Comfortaa" rel="stylesheet">
        <link rel="stylesheet" href="styles.css">
        
        <style type="text/css">
            body {
                background-color: #3598db;
                padding: 8vh 0 25vh 0;
            }

            .success-message,
            .failure-message {
                color: white;
                padding-top: 25vh;
            }

            .success-message h1,
            .failure-message h1 {
                color: white;
                font-size: 2.2em;
            }

            .success-message a,
            .failure-message a {
                text-decoration: none;
            }

            .success-message button,
            .failure-message button {
                color: #3598db;
                background-color: white;
                border: 2px solid #3598db;
                display: block;
                width: 200px;
                padding: 15px 10px;
                margin: 20px auto;
                border-radius: 5px;
            }

            .success-message button:hover,
            .failure-message button:hover {
                color: white;
                background-color: #3598db;
                border: 2px solid white;
            }
        </style>
    </head>
    <body>
        <nav>
            <h1 class="navbar_title">danika quinteros</h1>
            <ul class="desktop">
                <a href="https://danikaquinteros.com/#welcome"><li>Home</li></a>
                <a href="https://danikaquinteros.com/#about"><li>About</li></a>
                <a href="https://danikaquinteros.com/#skills"><li>Skills</li></a>
                <a href="https://danikaquinteros.com/#portfolio"><li>Portfolio</li></a>
                <a href="https://danikaquinteros.com/#contact"><li>Contact</li></a>
            </ul>

            <div class="mobile">
                <i class="fas fa-bars"></i>
            </div>
        </nav>
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
                $mail->addAddress(EMAIL_USER);              
                $mail->addReplyTo($email);

                $mail->isHTML(true);                              
                $mail->Subject = "Danika's Webpage";
                $mail->Body    = 'Name: '.$name.'</br>'
                                .'Email: '.$email.'<br>'
                                .'Message: '.$message;
                $mail->AltBody = htmlentities($message);

                if($mail->send()){
                    echo "<div class='success-message'>
                        <h1>You're message was sent!</h1>
                        <h1>Thanks!</h1>
                        <a href='https://danikaquinteros.com/#welcome'><button>Back to Portfolio</button></a>
                    </div>";
                } else {
                    echo "<div class='failure-message'>
                        <h1>'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;</h1>
                        <a href='https://danikaquinteros.com/#contact'><button>try again</button></a>
                    </div>";
                }
                
          
            } catch (Exception $e) {
                echo "<div class='failure-message'>
                        <h1>'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;</h1>
                        <a href='https://danikaquinteros.com/#contact'><button>try again</button></a>
                    </div>";
            } 
        ?>
    </body>
</html>