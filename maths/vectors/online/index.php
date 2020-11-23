<!DOCTYPE html>
<html lang="en">
    <head>
        <link rel="stylesheet" href="styles/styles.css">
        <meta charset="UTF-8">
        <title>Calc online</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="scripts/calculations.js"></script>
        <link rel="stylesheet" href="../../../styles/main.css">
        <link rel="stylesheet" href="../../../styles/snow.css">
        <script src="../../../scripts/snow.js"></script>
    </head>
    <body>
            <div id="snow"></div>

<!--            Length & Coords-->
            <h1>Длина и координаты</h1>
            <p><label for="x1">X<sub>1</sub> </label><input type="number" id="x1" > <label for="y1">Y<sub>1</sub> </label><input type="number" id="y1"></p>
            <p><label for="x2">X<sub>2</sub> </label><input type="number" id="x2"> <label for="y2">Y<sub>2</sub> </label><input type="number" id="y2"></p>
            <button onclick="calculateFirst()" id="run1">Рассчитать</button>
            <p style="margin-top: 20px" id="result1"> </p>
<!--            Length-->
            <h1> Длина </h1>
            <p><label for="x3">X </label><input type="number" id="x3"> <label for="y3">Y </label><input type="number" id="y3"></p>
            <button onclick="calculateSecond()" id="run2">Рассчитать</button>
            <p style="margin-top: 20px" id="result2"> </p>
<!--            Clear functions-->
            <p style="margin-top: 20px" ><input id="autoClear" value="off" onclick="flipVal()" type="checkbox"><label for="autoClear">Автоматическая очистка </label></p>
            <p style="margin-top: 1px"><button onclick="clearSecond(); clearFirst()">Очистить</button></p>
<!--            Snow Function-->
<?php include '../../../scripts/footer.php'?>