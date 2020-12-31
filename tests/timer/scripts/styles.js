var countDownTime = new Date("Jan 1, 2021 00:00:00").getTime();

var r_ = 0;
var g_ = 0;
var b_ = 0;
var doSwitch = false;

var b = setInterval(function() {
        if (!doSwitch) return

        if (r_ < 255 && g_ === 0 && b_ === 0) r_++;
        if (r_ >= 255 && g_ < 255 && b_ === 0) g_++;
        if (r_ > 0 && g_ >= 255 && b_ === 0) r_--;
        if (r_ === 0 && g_ >= 255 && b_ < 255) b_++;
        if (r_ === 0 && g_ > 0 && b_ >= 255) g_--;
        if (r_ === 0 && g_ === 0 && b_ > 0) b_--;
        document.body.style.background = rgbToHex(r_,g_,b_)
        console.log(rgbToHex(r_,g_,b_))
}, 100)

function onSwitch() {doSwitch = !doSwitch}

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}