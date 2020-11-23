<?php

$link = mysqli_connect("sidedb-instance-1.chswzngjct40.eu-north-1.rds.amazonaws.com", "user", "DodoPizza");
mysqli_autocommit($link, true);

if(isset($_POST['submit']))
{
    $err = [];

    if(!preg_match("/^[a-zA-Z0-9]+$/", $_POST['login']))
    {
        $err[] = "Логин может состоять только из букв английского алфавита и цифр";
    }

    if(strlen($_POST['login']) < 3 or strlen($_POST['login']) > 30)
    {
        $err[] = "Логин должен быть не меньше 3-х символов и не больше 30";
    }

    // проверяем, не сущестует ли пользователя с таким именем
    $query = mysqli_query($link, "SELECT user_id FROM `main`.`users` WHERE user_login='".mysqli_real_escape_string($link, $_POST['login'])."'");
    if(mysqli_num_rows($query) > 0)
    {
        $err[] = "Пользователь с таким логином уже существует в базе данных";
    }

    // Если нет ошибок, то добавляем в БД нового пользователя
    if(count($err) == 0)
    {

        $login = $_POST['login'];
        $password = md5(md5(trim($_POST['password'])));

        mysqli_query($link, "INSERT INTO `main`.`users` (user_login, user_password) VALUES ('$login', '$password')");
        header("Location: login.php"); exit();
    }
    else
    {
        print "<b>При регистрации произошли следующие ошибки:</b><br>";
        foreach($err AS $error)
        {
            print $error."<br>";
        }
    }
}
?>
<style>
    input { width: 20%; margin-top: 4px; }
</style>
<h1>Регистрация</h1>
<form method="POST">
     <label>Логин <input style="width: 20%;" name="login" type="text" required></label><br>
     <label>Пароль <input name="password" type="password" required></label><br>
    <input name="submit" type="submit" value="Зарегистрироваться">
</form>
<a href="login.php">Войти</a>