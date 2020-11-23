document.addEventListener('DOMContentLoaded', function(){
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = function(){
        particlesJS("snow", {
            "particles": {
                "number": {
                    "value": window.innerWidth / 20,
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
                        "enable": false
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
    addFooter()
});

function switchSnow() {
    if (document.getElementById('snow').style.display === 'none')
        document.getElementById('snow').style.display = 'block'
    else
        document.getElementById('snow').style.display = 'none'
}

// function addFooter() {
//     var footer = document.createElement('footer')
//     footer.innerHTML = "<p>MaxTheTomas 2020г.</p> <p><a href=\"https://my.qiwi.com/form/Maksym-TNHv5M1nzM\" onclick='' class=\"coolerA\">Донат</a></p><p><a onclick='switchSnow()'>Снег</a></p><p><a href='/site/maths/'>Назад</a></p>"
//
//     document.body.append(footer)
// }