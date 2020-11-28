

document.addEventListener('DOMContentLoaded', function() {
     clear()
})


// Высчитывание уравнения
function calculate() {
    var a = document.getElementById('a').value
    var b = document.getElementById('b').value
    var c = document.getElementById('c').value
    var d = (b * b) - (4 * a * c)
    var x1 = (-b + Math.sqrt(d)) / (2 * a)
    var x2 = (-b - Math.sqrt(d)) / (2 * a)
    document.getElementById('res').innerHTML = "X<sub>1</sub> = " + x1 + "; X<sub>2</sub> = " + x2 + "\n ( D = "  + d + " ) "

        if (document.getElementById('autoClear').value === "on")
            clear()
}

// Очистка координат (input)
function clear() {
    document.getElementById('a').value = 0
    document.getElementById('b').value = 0
    document.getElementById('c').value = 0
}

// Автоматическая очистка вкл/выкл
function flipVal() {
    if (document.getElementById('autoClear').value === "off")
        document.getElementById('autoClear').value = "on"
    else
        document.getElementById('autoClear').value = "off"
}

// Снег вкл/выкл
