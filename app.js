
const slidervalue = document.getElementById("slidervalue");
const slider = document.getElementById("slider");
const rangeInputs = document.querySelectorAll('input[type="range"]');
const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");
const bar4 = document.getElementById("bar4");

/* slider */
slidervalue.innerHTML = slider.value;
bar1.classList.add("weak");
bar2.classList.add("weak");

slider.oninput = function () {
    slidervalue.innerHTML = this.value;

  /* Strength */

  const leveltext = document.getElementById("leveltext");

  if (slider.value < 5) {
    leveltext.innerHTML = "too weak!";
    bar1.classList.remove("tooWeak", "weak", "medium", "strong");
    bar2.classList.remove("tooWeak", "weak", "medium", "strong");
    bar3.classList.remove("tooWeak", "weak", "medium", "strong");
    bar4.classList.remove("tooWeak", "weak", "medium", "strong");
    bar1.classList.remove("weak");
    bar1.classList.add("tooWeak");
  }

  if (slider.value < 10 && slider.value >= 5) {
    leveltext.innerHTML = "weak";
    bar1.classList.remove("tooWeak", "weak", "medium", "strong");
    bar2.classList.remove("tooWeak", "weak", "medium", "strong");
    bar3.classList.remove("tooWeak", "weak", "medium", "strong");
    bar4.classList.remove("tooWeak", "weak", "medium", "strong");
    bar1.classList.add("weak");
    bar2.classList.add("weak");
  }

  if (slider.value < 15 && slider.value >= 10) {
    leveltext.innerHTML = "medium";
    bar1.classList.remove("tooWeak", "weak", "medium", "strong");
    bar2.classList.remove("tooWeak", "weak", "medium", "strong");
    bar3.classList.remove("tooWeak", "weak", "medium", "strong");
    bar4.classList.remove("tooWeak", "weak", "medium", "strong");
    bar1.classList.add("medium");
    bar2.classList.add("medium");
    bar3.classList.add("medium");
  }

  if (slider.value >= 15) {
    leveltext.innerHTML = "strong";
    bar1.classList.remove("tooWeak", "weak", "medium", "strong");
    bar2.classList.remove("tooWeak", "weak", "medium", "strong");
    bar3.classList.remove("tooWeak", "weak", "medium", "strong");
    bar4.classList.remove("tooWeak", "weak", "medium", "strong");
    bar1.classList.add("strong");
    bar2.classList.add("strong");
    bar3.classList.add("strong");
    bar4.classList.add("strong");
  }
};

function handleInputChange(e) {
  let target = e.target;

  const min = target.min;
  const max = target.max;
  const val = target.value;

  target.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
}

rangeInputs.forEach((input) => {
  input.addEventListener("input", handleInputChange);
});

///copy
const copyicon = document.getElementById("copyicon");
const msgcopy = document.getElementById("msgcopy");

copyicon.addEventListener("click", copyField );

function copyField() {
    var copyText = document.getElementById("fieldtext").innerHTML;
      ///// Copy the text inside the text field
    navigator.clipboard.writeText(copyText);
    msgcopy.style.display ="initial"
}

///Generate pasword

const generatebtn = document.getElementById("generatebtn")
generatebtn.addEventListener("click", generate);
const fieldtext = document.getElementById("fieldtext");

function generate(length) {
   const uppercase = document.getElementById("UppercaseIncl");
   const lowercase = document.getElementById("LowercaseIncl");
   const numbers = document.getElementById("NumerIncl");
   const symbols = document.getElementById("SymbolIncl");
   const alert = document.getElementById("alert");

   if (
   uppercase.checked === false &&
   lowercase.checked === false &&
   numbers.checked === false &&
   symbols.checked === false
) {
    alert.style.display = "block";
} else {
const uppercaseC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseC = "abcdefghijklmnopqrstuvwxyz";
const numbersC = "0123456789";
const symbolsC =  "@#&(§!-)^$*%+=/?";

let characters = "";
var length = slider.value;
if (uppercase.checked === true){
    characters += uppercaseC;
}
if (lowercase.checked === true){
    characters += lowercaseC;
}
if (numbers.checked === true){
    characters += numbersC;
}
if(symbols.checked === true){
    characters += symbolsC;
}
let password = "";
let passwordLength = length;
const array = new Uint32Array(length);
window.crypto.getRandomValues(array);
for (let i = 0; i < passwordLength; i++){
    password += characters[array[i] % characters.length];
}

fieldtext.innerHTML = password;
fieldtext.style.color = "white";
msgcopy.style.display="none";
alert.style.display="none"

return password

 }
}
