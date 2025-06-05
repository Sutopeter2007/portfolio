console.log("elindult a program");
 
 
/*
1. doboz:
Kattintásra adjunk hozzá egy "blur" nevű class attribútumot, majd újabb kattintásra vegyük
le róla azt.
*/
 
document.getElementById("element-one").onclick = function(){
    console.log("megnyomtad az egyes gombot");
    document.getElementById("element-one").classList.add("blur");
}
 
 
document.getElementById("element-two").onclick = function(){
    console.log("megnyomtad a kettes gombot");
    document.getElementById("element-one").classList.remove("blur");
}
 
 
/*
2. doboz:
Ha az egérrel fölé megyünk változzon meg a háttérszíne pirosra, ha levesszük róla az egeret
változzon vissza az eredeti színére.
*/
document.getElementById("element-two").onmouseenter=function(){
  document.getElementById("element-two").style.backgroundColor="blue";
}
 
document.getElementById("element-two").onmouseleave=function(){
  document.getElementById("element-two").style.backgroundColor="";
}
 
/*
3. doboz:
Dupla kattintással sorsoljon egy számot 1 és 20 között és módosítsa a kapott számmal a doboz tartalmát.
*/
 
document.getElementById("element-three").ondblclick=function(){
  console.log("duplakatt a hármason");
  let sorsol=Math.floor(Math.random()*21)+1;
  document.getElementById("element-three").firstElementChild.innerHTML=sorsol;
}
 
/*
4. doboz:
Kattintásra tűnjön el, majd egy 1 másodperces várakozás után ismét jelenjen meg.
*/
 
document.getElementById("element-four").onclick=function(){
  console.log("el fogok tűnni");
  document.getElementById("element-four").style.display="none";
 setTimeout(() => {
  document.getElementById("element-four").style.display="block";
 }, 1000);
}
/*
5. doboz:
Kattintásra alakítsa kör alakúra az összes dobozt.
*/
 document.getElementById("element-five").onclick=function(){
  console.log("körözés indul");
 dobozok = document.querySelectorAll(".shape");
 console.log (dobozok);
 for (doboz of dobozok){
  doboz.style.borderRadius="50%";
 }
 
 setTimeout(() => {
  for (doboz of dobozok){
    doboz.style.borderRadius="0";
   }  
 }, 1000);
 
 }
 
/*
6. doboz:
Form submit eseményre módosítsuk a doboz tartalmát az input mezőbe írt értékkel
*/

document.getElementById("box-6").onsubmit=function(event){
  event.preventDefault();
  console.log(event.target.elements.boxNumber.value);
  document.getElementById("element-six").firstElementChild.innerHTML=event.target.elements.boxNumber.value;
}

 document.onkeypress=function(event){
console.log(event.key)
document.getElementById("element-seven").firstElementChild.innerHTML=event.elements.event.value;
 }
 
/*
7. doboz:
Keypress eseményre írjuk be a dobozba az adott karaktert, amit leütöttek
*/
 
document.onkeydown=function(event){
  console.log(event.key)
  document.getElementById("element-seven").firstElementChild.innerHTML=event.key
 }
/*
8. doboz:
Egérmozdítás eseményre írjuk be az egér pozíciójának x és y koordinátáját,
a következő séma szerint: "X: {x-koordináta}, Y: {y-koordináta}"
*/
document.onmousemove=function(event){
  console.log(event.clientX);
  let x= event.clientX;
  let y=event.clientY;
  template=`X: ${x}, Y: ${y}`;
  document.getElementById("element-eight").firstElementChild.innerHTML=template;
 }
 
/*
9. doboz:
Submit eseményre módosítsuk a doboz tartalmát azzal az értékkel ami úgy áll elő,
hogy végrehajtjuk a select inputban kiválasztott operációt,
a state-en és number inputba beírt értéken.
 
Az előállt végeredményt tároljuk el új state-ként!
 
Pl:
  Number input mezőbe írt érték: 5
  Select inputban kiválasztott érték: "mult"
  Aktuális state: 9
 
  Operáció: 9 * 5
  Dobozba és state-be beírandó érték: 45
*/
 

document.getElementById("element-nine").onclick=function(){
  console.log(document.getElementById);
};
console.log