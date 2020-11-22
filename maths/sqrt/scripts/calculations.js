

document.addEventListener('DOMContentLoaded', function() {
     clear()
})


// Высчитывание уравнения
function calculate() {
    var a = document.getElementById('a').value
    var result = 0

    for (b = 1; b < 100; b++)
    {
        if (b > a)
        {
            result = -1
            break;
        }

        if (a % (b * b) === 0)
        {
            if (Math.sqrt(a / b) % 1 === 0)
            {
                result = b
                break;
            }
        }
    }
    if (result <= 0)
        document.getElementById('res').innerHTML = "Ошибка!"
    else
        document.getElementById('res').innerHTML = result + "√" + a / (result * result)

        if (document.getElementById('autoClear').value === "on")
            clear()
}

function calculate2() {
    var b = document.getElementById('b').value
    var c = document.getElementById('c').value
    var result = b * b * c

    document.getElementById('res2').innerHTML = '√' + result
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
