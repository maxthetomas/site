document.addEventListener('DOMContentLoaded', function() {
 clearFirst()
 clearSecond()
})


// Высчитывание координат
function calculateFirst() {
    var x = parseInt(document.getElementById('x2').value) - parseInt(document.getElementById('x1').value)
    var y = (parseInt(document.getElementById('y2').value) - parseInt(document.getElementById('y1').value))
    var sqrtOf = (x * x) + (y * y)
    var sqrt = Math.sqrt(sqrtOf)
    document.getElementById('result1').innerHTML = "Координаты: {" + x + "; " + y + "}, Длина: " + sqrt + " (√" + sqrtOf + ")"
    if (document.getElementById('autoClear').value === "on")
        clearFirst()
}

// Высчитывание длины
function calculateSecond() {
    var x = parseInt(document.getElementById('x3').value)
    var y = parseInt(document.getElementById('y3').value)
    var sqrtOf = (x * x) + (y * y)
    var sqrt = Math.sqrt(sqrtOf)
    document.getElementById('result2').innerHTML = "Длина: " + sqrt + " (√" + sqrtOf + ")"
    if (document.getElementById('autoClear').value === "on")
        clearSecond()
}

// Очистка координат (input)
function clearFirst() {
    document.getElementById('x1').value = 0
    document.getElementById('x2').value = 0
    document.getElementById('y1').value = 0
    document.getElementById('y2').value = 0
}

// Очистка длин (input)
function clearSecond() {
    document.getElementById('x3').value = 0
    document.getElementById('y3').value = 0
}

// Автоматическая очистка вкл/выкл
function flipVal() {
    if (document.getElementById('autoClear').value === "off")
        document.getElementById('autoClear').value = "on"
    else
        document.getElementById('autoClear').value = "off"
}

// Снег вкл/выкл
function switchSnow() {
    document.getElementById('snow').hidden = !document.getElementById('snow').hidden
}