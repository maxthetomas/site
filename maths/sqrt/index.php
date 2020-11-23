<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Корни</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="scripts/calculations.js"></script>
        <link rel="stylesheet" href="../../styles/snow.css">
        <link rel="stylesheet" href="../../styles/main.css">
        <script src="../../scripts/snow.js"></script>
    </head>
    <body>
            <div id="snow"></div>

            <h1>Вынести из корня</h1>
            <p><label for="a">√</label><input type="number" id="a"></p>
            <button onclick="calculate()" id="run1">Рассчитать</button>
            <p style="margin-top: 20px; font-size: 30px" id="res"> </p>

            <h1>Внести под корень</h1>
            <p><input type="number" id="b"><label for="b">√</label><label for="c"></label><input type="number" id="c"></p>
            <button onclick="calculate2()" id="run2">Рассчитать</button>
            <p style="margin-top: 20px; font-size: 30px" id="res2"> </p>

            <!--Clear functions-->
            <p style="margin-top: 20px" ><input id="autoClear" value="off" onclick="flipVal()" type="checkbox"><label for="autoClear">Автоматическая очистка </label></p>
            <p style="margin-top: 1px"><button onclick="clear()">Очистить</button></p>

    </body>
</html>