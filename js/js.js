let son = 0;
function bars() {
    if (window.innerWidth < 1056) {
    var b = document.getElementById('bar');
    if (b.style.display == "none") {
        b.style.display = "block";
        son = 1;
    } else {
        b.style.display = "none"
        son = 0;
    }
}
}
var ca = window.innerWidth;
window.addEventListener('resize', function () {
    var b = document.getElementById('bar');
    var c = window.innerWidth;
    if (c >= 1000) {
        b.style.display = "block"
    } else {
        if (son != 1) {
            b.style.display = "none"
        }
    }
})
var inte = window.setInterval(slide , 4000);
let s = 0;
var d = document.getElementById('bosh');
var f = document.getElementById('center');
var btncenter = document.getElementById('btn-center');
var son1 = 0;
var btnchek = 0;
function slide() {
    animbtn()
    clearInterval(inte);
    inte = window.setInterval(slide, 4000);    
    switch (s) {
    case 0:
        d.style.backgroundImage = "url(\"/image/rasmlar/slider_02.jpg\")";
        s = s + 1;
        f.style.textAlign = "left";
        btnleft()
        break;
    case 1:
        d.style.backgroundImage = "url(\"/image/rasmlar/slider_03.jpg\")";
        s = s + 1;
        f.style.textAlign = "center";
        btncentr()
        break;
    case 2:
        d.style.backgroundImage = "url(\"/image/rasmlar/slider_01.jpg\")";
        s = 0;
        f.style.textAlign = "left";
        btnleft()
        break;
    }
    
}

function al() {
    clearInterval(inte);
    inte = window.setInterval(slide, 4000);
    animbtn()
    switch (s) {
        case 0:
            d.style.backgroundImage = "url(\"/image/rasmlar/slider_03.jpg\")";
            s = 2;
            f.style.textAlign = "center";
            btncentr()
            break;
        case 1:
            d.style.backgroundImage = "url(\"/image/rasmlar/slider_01.jpg\")";
            s = 0;
            f.style.textAlign = "left";
            btnleft()
            break;
        case 2:
            d.style.backgroundImage = "url(\"/image/rasmlar/slider_02.jpg\")";
            s = 1;
            f.style.textAlign = "left";
            btnleft()
            break;
        }
}
function animbtn() {
    var qw = document.getElementById('katta');
    var qwa = document.getElementById('kichik');
    if (son1 === 0) {
        qw.style.animation = "topa 1s ease-in-out forwards"
        qwa.style.animation = "pasta 1s ease-in-out forwards"
        son1 = 1;
    } else {
        qw.style.animation = "top 1s ease-in-out forwards"
        qwa.style.animation = "past 1s ease-in-out forwards"
        son1 = 0;
    }
}
function btncentr() {
    var c = window.innerWidth;
    
    if(c < 700) {
        btncenter.style.display = "flex"
        btncenter.style.justifyContent = "center"
    }
    btnchek = 1;
}
function btnleft() {
    if(btnchek === 1) {
        btncenter.style.justifyContent = "left"
    }
    btnchek = 0;
}
window.onload = function() {
    window.setTimeout(function () {
        var b = document.getElementsByClassName("loader");
        b[0].style.display = "none"
    },600);
    
}

var servi = 0
var serv = -25;
function servic(a) {
    var width = window.innerWidth;
    var servics = document.getElementById('servics1');
    if (width > 1056) {
        if (a === -1) {
                servics.style.transform = "translateX(-25%)";
        } else {
                servics.style.transform = "translateX(0%)";
        }
    } else if (width > 500) {
        if (a === -1) {
            if (servi === 0 || servi === 1) {
                servics.style.transform = "translateX(" + serv + "%)";
                serv = serv - 25;
                servi = servi + 1;
            }
            
        } else {
            if (servi === 2 || servi === 1) {
                serv = serv + 50;
                servics.style.transform = "translateX(" + serv + "%)";
                serv = serv - 25;
                servi = servi - 1;
            }
        }
    } else {
        if (a === -1) {
            if (servi === 0 || servi === 1 || servi === 2) {
                servics.style.transform = "translateX(" + serv + "%)";
                serv = serv - 25;
                servi = servi + 1;
            }
            
        } else {
            if (servi===3 || servi === 2 || servi === 1) {
                serv = serv + 50;
                servics.style.transform = "translateX(" + serv + "%)";
                serv = serv - 25;
                servi = servi - 1;
            }
        }
    }
}
var testimin = 0;
function testiminal (a) {
    if (testimin === 0 && a === 1) {
        a = 0
    } else if(testimin === -66 && a === -1) {
        a = 0
    }
    var testiminal = document.getElementById('testiminal');
    testimin = testimin + a * 22;
    testiminal.style.transform = "translateX(" + testimin + "%)"
}
window.onscroll = function () {scrolfunction()}
function scrolfunction() {
    var scrol = document.getElementById('scroltop');
    var scrol2 = document.getElementById('ul1');
    var top1 = document.getElementById('top');
    var bosh = document.getElementById('bosh');
    var about = document.getElementById('about2');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrol.style.bottom = '40px';
    } else {
        scrol.style.bottom = '-100px';
    }
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        scrol2.style.position = "fixed"
        scrol2.style.animation = "menyuanim 1s ease-in-out forwards"
    } else {
        scrol2.style.position = "absolute"
        scrol2.style.animation = "menyanim 1s ease-in-out forwards"
    }
    var a1 = top1.scrollHeight + bosh.scrollHeight + scrol2.scrollHeight - window.innerHeight;
    
    if (document.body.scrollTop > a1 || document.documentElement.scrollTop > a1) {
        about.style.animation = "fadeinleft 2s"
        console.log(a1)
    }
    
}
function fadein() {
    document.getElementById('about2').style.animation = "fadeinleft 2s"
}
function scroltop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
var loading = document.getElementById('loading');
var loading1 = document.getElementById('loading1');
var video1 = document.getElementById('video'); 
var imagezoom = document.getElementById('imagezoom');
function playvideo () {
    loading.style.display = "flex";
    loading1.style.display1 = "flex";
    window.setTimeout(
        function () {
            loading1.style.display = "none"
            video1.style.display = "flex"
        },600
    );
}
function closse () {
    loading.style.display = "none"
    loading1.style.display = "flex"
    video1.style.display = "none"
    imagezoom.style.display = "none"
}
function zoomimage (a) {
    loading.style.display = "flex";
    loading1.style.display1 = "flex";
    imagezoom.innerHTML = "<div class=\"close\" onclick=\"closse()\"><h6>CLOSE</h6> <h5>X</h5></div><img src=\"image/rasmlar/service_0" + a + ".jpg\" alt=\"serviceimage\">"
    window.setTimeout(
        function () {
            loading1.style.display = "none"
            imagezoom.style.display = "flex"
        },600
    );
}