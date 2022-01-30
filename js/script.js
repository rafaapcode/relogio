let digitalElemtn = document.querySelector(".digital");
let sElement = document.querySelector(".p_s");
let mElement = document.querySelector(".p_m");
let hElement = document.querySelector(".p_h");

function updateClock() {
    let now = new Date();
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    digitalElemtn.innerHTML = `${fixedzero(hour)}:${fixedzero(min)}:${fixedzero(sec)}`;

    let sDeg = ((360 / 60) * sec) - 90;
    let mDeg = ((360 / 60) * min) - 90;
    let hDeg = ((360 / 12) * hour) - 90;

    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;
}


function fixedzero(time){
   
    return time < 10 ? `0${time}`:time;

}

setInterval(updateClock, 1000);
updateClock();