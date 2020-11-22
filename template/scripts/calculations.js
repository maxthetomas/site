

document.addEventListener('DOMContentLoaded', function() {
     clear()
})


// Высчитывание уравнения
function calculate() {
    var a = document.getElementById('a').value
    document.getElementById('res').innerHTML = a

        if (document.getElementById('autoClear').value === "on")
            clear()
}

// Очистка координат (input)
function clear() {
    document.getElementById('a').value = 0
}

// Автоматическая очистка вкл/выкл
function flipVal() {
    if (document.getElementById('autoClear').value === "off")
        document.getElementById('autoClear').value = "on"
    else
        document.getElementById('autoClear').value = "off"
}

// Снег вкл/выкл
