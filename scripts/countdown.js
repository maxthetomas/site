const maybePluralize = (count, noun, suffix = 's') =>
    `${count}${noun}${count !== 1 ? suffix : ''}`;

// Set the date we're counting down to
// var countDownDate = new Date("Mar 26, 2021 16:00:00").getTime();
var countDownDate = new Date("Jan 1, 2021 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("countdowntext").innerHTML = "До нового года: " + maybePluralize(days, 'д', '') + " : " + maybePluralize(hours, 'ч', '') + " : " + maybePluralize(minutes, 'м', '') + " : " + maybePluralize(seconds, 'с', '');

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdowntext").innerHTML = "С 2К21!";
    }
}, 1000);