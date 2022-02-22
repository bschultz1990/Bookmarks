let counterDisplay = document.querySelector('.counter-display');
let counterMinus = document.querySelector('.counter-minus');
let counterPlus = document.querySelector('.counter-plus');
let counterText = document.querySelector('.counter-text');
let counter = document.querySelector('.counter');
let count = 0;


updateDisplay();

counter.addEventListener("submit", function(e){
    inputText();
    e.preventDefault();
})

counterPlus.addEventListener("click",()=>{
    count++;
    updateDisplay();
}) ;

counterMinus.addEventListener("click",()=>{
    count--;
    updateDisplay();
});

// counterDisplay.addEventListener("click",()=>{
    
// }

function updateDisplay(){
    count = parseInt(counterDisplay.innerHTML);
};

function inputText(){
    count = parseInt(counterText.value);
    counterDisplay.innerHTML = count;
    counterText.value = "";
};