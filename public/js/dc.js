const hou = document.getElementById("hou");
const min = document.getElementById("min");
const sec = document.getElementById("sec")

function getTime(){
    let time = new Date();
    hours = time.getHours();
    minits = time.getMinutes();
    secends = time.getSeconds();
    hou.innerHTML = hours;
    min.innerHTML = minits;
    sec.innerHTML = secends;
}

setInterval(getTime, 10);