const myInput = document.getElementById("myInput");
const myButton = document.getElementById("myButton");
const removeLatestIndex = document.getElementById("popIndex");
const headerDescription = document.querySelector("h4");

let myKarakterer = [];

const calculateGjenomsnitt = () => {
    const sum = myKarakterer.reduce((a, b) => a + b, 0);
    const average = sum / myKarakterer.length;
    return average;
};
const showTextHeader = () => {
    headerDescription.textContent = `Ditt karakter gjennomsnitt er: ${calculateGjenomsnitt()} og antall frekvenser er: ${myKarakterer} `;
}

myButton.addEventListener("click", () => {
    const inputValue = Number(myInput.value);
    if(inputValue >= 0 && inputValue <= 6) {
        myKarakterer.push(inputValue);
        showTextHeader();
    }
})

removeLatestIndex.addEventListener("click", () => {
    if(myKarakterer.length > 0) {
        myKarakterer.pop();
        showTextHeader();
    }
})

