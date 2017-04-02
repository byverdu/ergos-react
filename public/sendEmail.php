<?php

if(isset($_POST['email'])) {

  // EDIT THE 2 LINES BELOW AS REQUIRED

  // info@residenciaergos.com

  $email_to = "byverdu@gmail.com";

  $email_subject = "Missatge de la web";


  $first_name = $_POST['first_name']; // required

  $email_from = $_POST['email']; // required

  $telephone = $_POST['telephone']; // not required

  $comments = $_POST['comments']; // required



  $email_message = "Detalls del Contacte\n\n";


  function clean_string($string) {

    $bad = array("content-type","bcc:","to:","cc:","href");

    return str_replace($bad,"",$string);

  }


  $email_message .= "Nom: ".clean_string($first_name)."\n";

  $email_message .= "Email: ".clean_string($email_from)."\n";

  $email_message .= "Telèfon: ".clean_string($telephone)."\n";

  $email_message .= "Comentari: ".clean_string($comments)."\n";

  // create email headers

  $headers = 'From: '.$email_from."\r\n".

  'Reply-To: '.$email_from."\r\n" .

  'X-Mailer: PHP/' . phpversion();

  @mail($email_to, $email_subject, $email_message, $headers);

  header('Location: http://192.168.0.10/mensaje-enviado');
  die();
}
