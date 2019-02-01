<?php

$recepient = "43reter@gmail.com";
$sitename = "Consul";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$text = trim($_POST["text"]);
$answer = "Имя: $name \nEmail: $email \nТекст: $text";

$pagetitle = "Новое сообщение с сайта \"$sitename\"";
mail($recepient, $pagetitle, $answer, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");