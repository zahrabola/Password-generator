
const SliderValue = document.getElementsByClassName(".SliderValue ");
const slider = document.getElementById("slider");
const rangeaInputs = document.querySelectorAll('input[type="range]')
const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");
const bar4 =document.getElementById("bar4");

///slider

SliderValue.innerHTML = slider.value;
bar1.classList.add("tooWeak")
/*bar2.classList.add("weak") */

slider.oninput = function() {
    SliderValue.innerHTML = this.value;
}
/*strength */
const leveltext = document.getElementById("leveltext");

if (slider.value < 7){
    leveltext.innerHTML = "too weak!";
    bar1.classList.remove("tooweak", "weak", "medium", "strong");
    bar2.classList.remove("tooweak", "weak", "medium", "strong");
    bar3.classList.remove("tooweak", "weak", "medium", "strong");
    bar4.classList.remove("tooweak", "weak", "medium", "strong");
    bar1.classList.remove("weak");
    bar1.classList.add("tooWeak");

}

if (slider.value < 10 && slider.value >= 7){
    leveltext.innerHTML = "weak";
    bar1.classList.remove("tooweak", "weak", "medium", "strong");
    bar2.classList.remove("tooweak", "weak", "medium", "strong");
    bar3.classList.remove("tooweak", "weak", "medium", "strong");
    bar4.classList.remove("tooweak", "weak", "medium", "strong");
    bar1.classList.add("weak");
    bar2.classList.add("weak");
}

if (slider.value < 15 && slider.value >= 10){
    leveltext.innerHTML = "medium";
    bar1.classList.remove("tooweak", "weak", "medium", "strong");
    bar2.classList.remove("tooweak", "weak", "medium", "strong");
    bar3.classList.remove("tooweak", "weak", "medium", "strong");
    bar4.classList.remove("tooweak", "weak", "medium", "strong");
    bar1.classList.add("medium");
    bar2.classList.add("medium");
    bar3.classList.add("medium");
}
if (slider.value < 15 && slider.value >= 10){
    leveltext.innerHTML = "strong";
    bar1.classList.remove("tooweak", "weak", "medium", "strong");
    bar2.classList.remove("tooweak", "weak", "medium", "strong");
    bar3.classList.remove("tooweak", "weak", "medium", "strong");
    bar4.classList.remove("tooweak", "weak", "medium", "strong");
    bar1.classList.add("strong");
    bar2.classList.add("strong");
    bar3.classList.add("strong");
    bar4.classList.add("strong");
}