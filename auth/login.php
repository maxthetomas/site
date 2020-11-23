<?php

function generateCode($length=6) {
    $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHI JKLMNOPRQSTUVWXYZ0123456789";
    $code = "";
    $clen = strlen($chars) - 1;
    while (strlen($code) < $length) {
        $code .= $chars[mt_rand(0,$clen)];
    }
    return $code;
}

$link = mysqli_connect("sidedb-instance-1.chswzngjct40.eu-north-1.rds.amazonaws.com", "user", "DodoPizza");
mysqli_autocommit($link, true);

if(isset($_POST['submit']))
{
    // Вытаскиваем из БД запись, у которой логин равняеться введенному
    $login = mysqli_real_escape_string($link,$_POST['login']);
    $query = mysqli_query($link,"SELECT `user_id`, `user_password` FROM `main`.`users` WHERE `user_login`='$login' LIMIT 1");
    $data = mysqli_fetch_assoc($query);


    // Сравниваем пароли
    if($data['user_password'] === md5(md5($_POST['password'])))
    {
        // Генерируем случайное число и шифруем его
        $hash = md5(generateCode(10));
//        mysqli_query($link, "UPDATE `main`.`users` SET user_hash='".$hash."' WHERE user_id='".$data['user_id']."'");
        $id = $data["user_id"];
        mysqli_query($link, "UPDATE `main`.`users` SET `user_hash` = '$hash' WHERE `user_id`=$id");

        // Ставим куки
        setcookie('id', $data['user_id'], time()+60*60*24*30, "/");
        setcookie('hash', $hash, time()+60*60*24*30, "/", null, null, true); // httponly !!!
        setcookie('login', $login, time()+60*60*24*30, "/");

        // Переадресовываем браузер на страницу проверки нашего скрипта
        header("Location: check.php"); exit();
    }
    else
    {
        echo "Вы ввели неправильный логин/пароль";
    }
}
?>
<h1>Войти</h1>
<form method="POST">
     <label>Логин <input name="login" type="text" required></label><br>
     <label>Пароль <input name="password" type="password" required></label><br>
    <input name="submit" type="submit" value="Войти">
</form>
<a href="register.php">Зарегистрироваться</a>