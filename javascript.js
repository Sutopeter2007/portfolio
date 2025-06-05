/*
1. doboz:
2 másodpercenként változzon meg a színe (fekete háttér/fehér betűszín, majd fehér háttér/fekete betűszín!)
*/
let doboz = document.getElementById("element-one");
let szin = "feher";

setInterval(function() {                           
  if (szin == "feher") {
    doboz.style.backgroundColor = "black";
    doboz.style.color = "white";
    szin = "fekete";
  } else {
    doboz.style.backgroundColor = "white";
    doboz.style.color = "black";
    szin = "feher";
  }
}, 2000);









/*
2. doboz:
Kattintásra váltson pirosra, majd következő kattintásra fehérre, aztán még egy kattintásra  zöldre és ezt ismételgesse!
*/
 
let masodik = document.getElementById("element-two");
let szine = 0;
let szinek = ["#ef0808", "white", "#2fdd1a"];

masodik.onclick = function () {
  masodik.style.backgroundColor = szinek[szine];
  szine = (szine + 1) % szinek.length; //maradekos ozstas %
};







/*
3. doboz:
A dobozban számolja a leütött billentyűk számát
*/
 

let leutesSzama = 0;
let Doboz3 = document.getElementById("element-three");

document.onkeydown = function() { 
    console.log("mukodik a lenyil") //gpt segített
  leutesSzama = leutesSzama + 1;
  Doboz3.firstElementChild.innerHTML = leutesSzama;
}





/*
4. doboz:
Kattintásra tűnjön el egy random másik doboz, majd egy 1 másodperces várakozás után ismét jelenjen meg.
*/
 

let negyes = document.getElementById("element-four");
let dobozok = document.querySelectorAll(".shape"); //gpt segítség ,listaba kigyujti a shape nevueket 

negyes.onclick = function() {
    console.log("mukodik")
  let szam = Math.floor(Math.random() * dobozok.length);
  let doboz = dobozok[szam];

  if (doboz != negyes) {
    doboz.style.display = "none";//gpt segítség

    setTimeout(function() {
      doboz.style.display = "block";
    }, 1000);
  }
}







/*
5. doboz:
Fölé vitelre minden doboz kapja meg a "blur" stílust, lehúzásra váltsanak ismét élesre!!
*/
 
document.getElementById("element-five").onmouseover = function(){
    console.log(" az otos gombot");
    document.querySelector(".container").classList.add("blur");// w3schhools
}

document.getElementById("element-five").onmouseleave = function(){
    console.log(" otos  gombot");
    document.querySelector(".container").classList.remove("blur");
}
    

 









/*
6. doboz:
Form submit eseményre változtassuk meg a doboz méretét az input mezőbe írt értékkel.
*/
 









/*
7. doboz:
ha valaki leüti a "m" billentyűt, a doboz váljon mozgathatóvá "draggable", "f" betűre pedig veszítse el ezt a tulajdonságát.
*/
 









/*
8. doboz:
Tetszőleges művelet*/

document.getElementById("element-eight").onclick=function(){
    console.log("el fogok tűnni");
    document.getElementById("element-eight").style.display="none";
   setTimeout(() => {
    document.getElementById("element-eight").style.display="block";
   }, 1000);
}






9./* doboz:
Submit eseményre végezzünk tetszőleges izgalmas műveletet a dobozzal!
*/