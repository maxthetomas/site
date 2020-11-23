<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">

        <title>TEMPLATE</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="scripts/calculations.js"></script>
        <link rel="stylesheet" href="../../styles/main.css">
        <link rel="stylesheet" href="../../styles/snow.css">
        <script src="../../scripts/snow.js"></script>

    </head>
    <body>
            <div id="snow"></div>

<!--            Length & Coords-->
            <h1>title</h1>
            <p>
                <label for="a"></label><input type="number" id="a">
            </p>
            <button onclick="calculate()" id="run1">Рассчитать</button>
            <p style="margin-top: 20px" id="res"> </p>


            <!--Clear functions-->
            <p style="margin-top: 20px" ><input id="autoClear" value="off" onclick="flipVal()" type="checkbox"><label for="autoClear">Автоматическая очистка </label></p>
            <p style="margin-top: 1px"><button onclick="clear()">Очистить</button></p>
            <!--Snow Function-->
    </body>
</html>