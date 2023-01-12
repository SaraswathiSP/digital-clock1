const hoursEl=document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl=document.getElementById("seconds");
const amPmEl=document.getElementById("amPm");


function updateTime() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let amPm = "AM";
    
    if (h>12){
        h=h-12;
        amPm="PM";
    }
   h= h<10 ? "0" + h : h
   m= m<10 ? "0" + m : m
   s= s<10 ? "0" + s : s


    hoursEl.innerText = h;
    minutesEl.textContent=m;
    secondsEl.textContent=s;
    amPmEl.textContent=amPm;
    setTimeout(()=>{
        updateTime();
    },1000);

}
updateTime();