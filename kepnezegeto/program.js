let kepek=['https://3x3.hellodevs.dev/wp-content/uploads/2022/11/photo-1567306226416-28f0efdc88ce.jpeg','https://chefmarket.hu/public/upload/product_image/13267/13267322/22030/9474-apple-pink-ladypg-1858348119.jpg','https://www.mindmegette.hu/images/265/O/alma.jpg','https://gyogyszernelkul.com/wp-content/uploads/2017/11/tapanyagot-es-egeszseget-ad-zold-alma.jpg','https://plantae.hu/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGcGxhbnRhZS5odSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA4JTJGYWxtYWZhLW1ldHN6ZXNlLTIuanBnJmNhY2hlTWFya2VyPTE2NTk1MTQ1ODEtMTc1MjI4JnRva2VuPTAyOThmMTdhOGVlODM4MDg.q.jpg']
let kepSzam=0;
let kepMax=kepek.length;

document.getElementById("vissza").onclick=function(){
    if (kepSzam>0){
        kepSzam=kepSzam-1;
        
    }
    else{
        kepSzam=kepMax-1
    }

    
    document.getElementById("kep").src=kepek[kepSzam];
    console.log('megnyomtad a vissza gombot');

}

document.getElementById("tovabb").onclick=function(){
    if (kepSzam==kepMax-1){
        kepSzam=0;
    }
    else{
        kepSzam=kepSzam+1;
    }
    
    document.getElementById("kep").src=kepek[kepSzam];
    console.log('megnyomtad a tovább gombot');

}


document.getElementById("random").onclick=function(){
    kepSzam=Math.floor(Math.random() * kepMax);
    console.log('megnyomtad a random gombot',kepSzam+1, ". képet tetted ki");
    document.getElementById("kep").src=kepek[kepSzam];

}