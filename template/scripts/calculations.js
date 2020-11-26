

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

// Очистка input'a
function clearAll() {
    document.getElementById('a').value = "0";
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
