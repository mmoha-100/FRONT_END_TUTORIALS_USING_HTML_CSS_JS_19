let container = document.querySelector(".serial");
let generateBtn = document.querySelector(".generate");

generateBtn.onclick = function () {
    container.innerHTML = generateRandomSerialNumber();
};

function randomNumber(max) {
    return Math.floor(Math.random() * max);
}
let arrChars = [];
for (let i = 0; i < 10; i++) {
    arrChars.push(i);
}
for (let i = 65; i <= 90; i++) {
    arrChars.push(String.fromCharCode(i));
}
function generateRandomSerialNumber() {
    let serialNumber = "";
    for (let i = 0; i < 10; i++) {
        serialNumber += arrChars[randomNumber(arrChars.length)];
    }
    return serialNumber;
}
