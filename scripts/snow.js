document.addEventListener('DOMContentLoaded', function(){
    if (Date.now() < Date.parse('Jan 20, 2021'))
        autoSnow()
    addFooter()
});

function switchSnow() {
    if (document.getElementById('snow').style.display === 'none')
    {
        document.getElementById('snow').style.display = 'block'
    }
    else {
        document.getElementById('snow').style.display = 'none'
    }

}

function autoSnow() {
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = function() {
        particlesJS("snow", {
            "particles": {
                "number": {
                    "value": innerWidth / 15,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#FFFFFF"
                },
                "opacity": {
                    "value": 0.7,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 0.07
                    }
                },
                "size": {
                    "value": 8,
                    "random": true,
                    "anim": {
                        "enable": false
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "enable": true,
                    "speed": 3,
                    "direction": "bottom",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": true,
                        "rotateX": 300,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": false
                    },
                    "onclick": {
                        "enable": false
                    },
                    "resize": false
                }
            },
            "retina_detect": true
        });
    }
    document.head.append(script);
}

function addFooter() {
    var footer = document.createElement('footer')

    footer.innerHTML = "<p>MaxTheTomas 2020г.</p> <p><a href=\"https://my.qiwi.com/form/Maksym-TNHv5M1nzM\" class=\"coolerA\">Донат</a></p>" +
        "<p><a onclick='switchSnow()'>Снег</a></p>" +
        "<p><a onclick='window.history.back()' >Назад</a></p>"

    document.body.append(footer)
}