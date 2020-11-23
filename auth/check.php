<?php
// Скрипт проверки

// Соединямся с БД
$link = mysqli_connect("sidedb-instance-1.chswzngjct40.eu-north-1.rds.amazonaws.com", "user", "DodoPizza");

if (isset($_COOKIE['id']) and isset($_COOKIE['hash']))
{
    $id_ = $_COOKIE['id'];
    $query = mysqli_query($link, "SELECT * , INET_NTOA(user_id) AS `user_ip` FROM `main`.`users` WHERE `user_id` = $id_ LIMIT 1");
    $userdata = mysqli_fetch_assoc($query);

    if(($userdata['user_hash'] !== $_COOKIE['hash']) or ($userdata['user_id'] !== $_COOKIE['id']))
    {
        $infoToSend = 'WRONG_CACHE_'.time().'_'.$_COOKIE['hash'].'_'.$userdata['user_id'];

        setcookie("id", "", time() - 3600*24*30*12, "/");
        setcookie("hash", "", time() - 3600*24*30*12, "/", null, null, true); // httponly !!!
        setcookie('login', "", time() - 3600*24*30*12, "/");


        print "Не совпали хэши. Возможно, придется перерегистрироваться! \n $infoToSend";
    }
    else
    {
        header('Location: /site/maths/');
    }
}
else
{
    print "Зайдите заново!";
}
?>