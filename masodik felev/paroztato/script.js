const arrayOut = document.getElementById("arrayout");
const outButton = document.getElementById("outbutton");
const imgSources = [
    "img/even.svg",
    "img/odd.png"
];
let evenText = "none";
let numbers = [];
let template = ``;
let evenorodd = 3;

function getRandomIntInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function fillArray() {
    numbers = [];
    for (let i = 0; i < 10; i++) {
        let generatedNumber = getRandomIntInRange(20, 40);
        numbers.push(generatedNumber);
    }
}

outButton.addEventListener("click", () => {
    template = ``;
    fillArray();
    for (let i = 0; i < 10; i++) {
        if ((numbers[i] % 2) == 0) {
            evenorodd = 0;
            evenText = "Páros";
        }
        else {
            evenorodd = 1;
            evenText = "Páratlan";
        }
        template += `<li>
                        <p class="number">${numbers[i]}</p>
                        <p class="eventext">${evenText}</p>
                        <img src="${imgSources[evenorodd]}" alt="">
                    </li>`;
    }
    arrayOut.innerHTML = template;
})