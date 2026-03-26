<?php

    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'master@john-seo.com';
    $email_subject = "Message from: ".$name;
    $email_body = "Name: $name.\n" . "Email: $visitor_email.\n\n" . "Message: $message.\n";

    $to = "master@john-seo.com";

    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: about.html");
    
    // if (isset($_POST['submit'])) {
    //     $name = $_POST['name'];
    //     $mailFrom = $_POST['mail'];
    //     $message = $_POST['message'];

    //     $mailTo = "master@john-seo.com";
    //     $headers = "From: ".$mailFrom;
    //     $txt = "You have received an e-mail from ".$name.".\n\n".$message;

    //     mail($mailTo, $txt, $headers);
    //     header("Location: about.html");
    // }


    ?>