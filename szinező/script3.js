let r=127;
let g=127;
let b=127;
 
 
document.getElementById("gomb").onclick=function() {
    console.log("megnyomtad a gombot");
 
    let bsz= document.getElementById("szin").value;
    document.getElementById("kocka").style.backgroundColor=bsz;
 
 
 
}
 
document.getElementById("paletta").onchange=function() {
 
    let psz= document.getElementById("paletta").value;
    document.getElementById("kocka").style.backgroundColor=psz;
 
 
}
 
document.getElementById("r").oninput=function(){
 
console.log("mozgatom a csuszkát");
 
r= document.getElementById("r").value;
console.log(r);
szinez();
}
 
document.getElementById("g").oninput=function(){
 
    console.log("mozgatom a csuszkát");
   
    g= document.getElementById("g").value;
    console.log(g);
    szinez();
    }
 
 
    document.getElementById("b").oninput=function(){
 
        console.log("mozgatom a csuszkát");
       
        b= document.getElementById("b").value;
        console.log(b);
        szinez();
        }
function szinez(){
 
 ujSzin=`rgb(${r}, ${g}, ${b})`;
 
 
 
 
 
 
    style.backgroundColor
 
 
}