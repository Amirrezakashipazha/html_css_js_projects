function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show");
}

function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
}

function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show");
}

function myFunction4() {
    document.getElementById("myDropdown4").classList.toggle("show");
}

function myFunction5() {
    document.getElementById("myDropdown5").classList.toggle("show");
}

function myFunction6() {
    document.getElementById("myDropdown6").classList.toggle("show");
}

function myFunction7() {
    document.getElementById("myDropdown7").classList.toggle("show");
}

function myFunction8() {
    document.getElementById("myDropdown8").classList.toggle("show");
}

window.onclick = function (e) {
    if (!e.target.matches('.dropbtn8')) {
        var myDropdown = document.getElementById("myDropdown8");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
    if (!e.target.matches('.dropbtn7')) {
        var myDropdown = document.getElementById("myDropdown7");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
    if (!e.target.matches('.dropbtn6')) {
        var myDropdown = document.getElementById("myDropdown6");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
    if (!e.target.matches('.dropbtn5')) {
        var myDropdown = document.getElementById("myDropdown5");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
    if (!e.target.matches('.dropbtn4')) {
        var myDropdown = document.getElementById("myDropdown4");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
    if (!e.target.matches('.dropbtn3')) {
        var myDropdown = document.getElementById("myDropdown3");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
    if (!e.target.matches('.dropbtn2')) {
        var myDropdown = document.getElementById("myDropdown2");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
    if (!e.target.matches('.dropbtn1')) {
        var myDropdown = document.getElementById("myDropdown1");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}


function burgermenu() {
    var x = document.getElementById("burger-item");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
