

document.addEventListener('DOMContentLoaded', function() {
     clear()
})


// Высчитывание уравнения
function calculate() {
    var x = document.getElementById('x').value
    var y = document.getElementById('y').value
    var r = document.getElementById('r').value
    var result = '';
    var xpart = '';
    var ypart = '';
    if (x === "0") { xpart = 'x<sup>2</sup>' } else {
        if (x > 0) xpart = '(x - ' + x + ')<sup>2</sup>'
        else xpart = '(x + ' + (Number.parseFloat(x) * -1) + ')<sup>2</sup>'
    }
    if (y === "0") { ypart = 'y<sup>2</sup>' } else {
        if (y > 0) ypart = '(y - ' + y + ')<sup>2</sup>'
        else ypart = '(y + ' + (Number.parseFloat(y) * -1) + ')<sup>2</sup>'
    }


    result = xpart + " + " + ypart + " = " + (r * r)
    document.getElementById('res').innerHTML = result;
    if (document.getElementById('autoClear').value === "on")
        clear()
}

// Очистка input'a
function clearAll() {
    document.getElementById('x').value = "0";
    document.getElementById('y').value = "0";
    document.getElementById('r').value = "0";
}

// Если вы сочтёте эту функцию ненужной,
// вы будете неправы, так как без этой функции
// кнопка очистить не работает
function clear() {
    clearAll()
}

// Автоматическая очистка вкл/выкл
function flipVal() {
    if (document.getElementById('autoClear').value === "off")
        document.getElementById('autoClear').value = "on"
    else
        document.getElementById('autoClear').value = "off"
}
