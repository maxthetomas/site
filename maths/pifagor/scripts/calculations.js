

document.addEventListener('DOMContentLoaded', function() {
     clear()
})


// Высчитывание уравнения
function calculate() {
    var a = document.getElementById('a').value
    var b = document.getElementById('b').value
    var c = document.getElementById('c').value

    if (a == 0) document.getElementById('a').value = Math.sqrt(c * c - b * b);
    if (b == 0) document.getElementById('b').value = Math.sqrt(c * c - a * a);
    if (c == 0) document.getElementById('c').value = Math.sqrt(a * a + b * b);


    if (document.getElementById('autoClear').value === "on")
        clear()
}

// Очистка input'a
function clearAll() {
    document.getElementById('a').value = "0";
    document.getElementById('b').value = "0";
    document.getElementById('c').value = "0";
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
