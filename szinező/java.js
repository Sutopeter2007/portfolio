document.getElementById("gomb").onclick = function  () {
    console.log("dgrth")
    //melyik szint valasztotta a felhazn
let beirtSzin = document.getElementById("szin").value;

 // szinezzuk at arra
 
 document.getElementById("kocka").style.backgroundColor= beirtSzin;

   
}


document.getElementById("paletta").onchange = function () {
    console.log("paletta valtozas")
    //melyik szint valasztotta a felhazn
let valtozas = document.getElementById("paletta").value;

 // szinezzuk at arra
 
 document.getElementById("kocka").style.backgroundColor= valtozas;

   
}