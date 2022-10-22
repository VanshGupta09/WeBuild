function slider(int) {
    let a = document.querySelectorAll('.banner');

    for (i = 0; i < a.length; i++) {
        a[i].classList.remove('active');
    }
    a[int].classList.add('active');
}

function myFunc() {
    let b = document.getElementById('toggle');
    b.classList.toggle('show');
}

function total() {
    let d = document.getElementsByClassName('con');
    let e = document.getElementsByClassName('ren');

    for (i = 0; i < d.length; i++) {
        d[i].style.display = "block";
    }

    for (i = 0; i < e.length; i++) {
        e[i].style.display = "block";
    } 
}

function con() {
    let d = document.getElementsByClassName('con');
    let e = document.getElementsByClassName('ren');

    for (i = 0; i < d.length; i++) {
        d[i].style.display = "inline-block";
    }

    for (i = 0; i < e.length; i++) {
        e[i].style.display = "none";
    }
}

function ren() {
    let d = document.getElementsByClassName('con');
    let e = document.getElementsByClassName('ren');

    for (i = 0; i < d.length; i++) {
        d[i].style.display = "none";
    }

    for (i = 0; i < e.length; i++) {
        e[i].style.display = "inline-block";
    }
}

