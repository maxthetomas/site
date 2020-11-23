

<!DOCTYPE HTML>
<html lang="HTML">
<head>
    <title>MTT.Математика</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="UTF-8">
    <link rel="stylesheet" href="../styles/main.css">
    <script src="../scripts/snow.js"></script>
    <link rel="stylesheet" href="../styles/snow.css">
</head>
    <header>
        <h1> Математика </h1>
    </header>
    <body>
        <div id="snow"></div>
        <p style="margin-top: 0;"><a href="vectors/online/" class="but"> Калькулятор векторов </a></p>
        <p style="margin-top: 0;"><a href="sqequation/" class="but"> Квадратное уравнение </a></p>
        <p style="margin-top: 0;"><a href="sqrt/" class="but"> Корень </a></p>
<!--        <p><a href="/site/vectorcalc/" class="but"> Калькулятор векторов </a></p>-->
        <footer style="margin-left: 50px">
            <?php

            if (isset($_COOKIE['id']) and isset($_COOKIE['hash'])) {
                $link = mysqli_connect("sidedb-instance-1.chswzngjct40.eu-north-1.rds.amazonaws.com", "user", "DodoPizza");
                $query = mysqli_query($link,"SELECT `user_login` FROM `main`.`users` WHERE `user_id`=".$_COOKIE['id']." LIMIT 1");
                $data = mysqli_fetch_assoc($query);
                echo ''.$data['user_login'];
            }
            ?>
        </footer>
    </body>
</html>
