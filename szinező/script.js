
let balra = document.getElementById("balra");
let jobbra = document.getElementById("jobbra");
let sorkizart = document.getElementById("sorkizart");
let kozep = document.getElementById("kozep");
let szoveg = document.getElementById("szoveg");
let  magyar = document.getElementById("magyar");
let angol = document.getElementById("angol");
let francia = document.getElementById("francia");
let meret = document.getElementById("meret");
let kep = document.getElementById("kep");
let  design1 = document.getElementById("design1");
let design2 = document.getElementById("design2");
let szinvalto = document.getElementById("szinvalto");


balra.onclick = function() {
    document.getElementById("szoveg").style.textAlign = "left";
}

jobbra.onclick = function() {
    document.getElementById("szoveg").style.textAlign = "right";
}
sorkizart.onclick = function() {
    szoveg.style.textAlign = "justify";
}

kozep.onclick = function() {
   szoveg.style.textAlign = "center";
}


magyar.onclick = function() {
    szoveg.innerText = "	Isten, áldd meg a magyart Jó kedvvel, bőséggel, Nyújts feléje védő kart, Ha küzd ellenséggel; Bal sors akit régen tép, Hozz rá víg esztendőt, Megbünhödte már e nép A multat s jövendőt!";
}

angol.onclick = function() {
   szoveg.innerText = "O Lord, bless the nation of Hungary With your grace and bount  Extend over it your guarding arm During strife with its enemies; Long torn by ill fate Bring upon it a time of relief This people has already punished The past and the future!";
}

francia.onclick = function() {
  szoveg.innerText = "Dieu, bénis le Hongrois de bonne joie et d’abondance, étends-lui un bras protecteur, s’il combat avec l’ennemi ; Mauvais destin qui a été déchiré depuis longtemps, Apporte-lui une année heureuse, Ce peuple a déjà puni Le passé et l’avenir !";
}


meret.oninput = function() {
    let newSize = this.value;
   szoveg.style.fontSize = newSize + "px";
}


design2.onclick = function() {
    document.body.style.backgroundColor = "red";
   cim.style.color = "blue";
}

design1.onclick = function() {
    document.body.style.backgroundColor = "white";
    cim.style.color = "black";
}


function kepMegjelenit() {
    let fileInput = document.getElementById("kepFeltoltes");
    let imageName = document.getElementById("kepNeve");
    let imageWidth = document.getElementById("kepSzelesseg").value;
    let imageHeight = document.getElementById("kepMagassag").value;
    let preview = document.getElementById("eloNezet");

    if (fileInput.files.length > 0) {
        let file = fileInput.files[0];
        imageName.value = file.name;
        let reader = new FileReader();

        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = "block";
            if (imageWidth) preview.width = imageWidth;
            if (imageHeight) preview.height = imageHeight;
        };
        reader.readAsDataURL(file);
    }
}
let szinGombok = document.querySelectorAll(".szinvalto");
szinGombok.forEach(gomb => {
    gomb.onclick = function() {
        let szin = this.getAttribute("data-color");
        document.getElementById("szoveg").style.color = szin;
    }
});


