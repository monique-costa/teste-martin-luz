import _ from 'lodash';
import * as bootstrap from 'bootstrap';
import './style.scss';
import { tns } from "../node_modules/tiny-slider/src/tiny-slider";

console.log(bootstrap);

const valueMarker = document.querySelector('.js-slider-value');
const inputSlider = document.querySelector('.js-range-input');
const inputText = document.getElementById('section4-calculator__input');
const calcButton = document.querySelector('.section4-calculator__button');
const modal = document.querySelector('.section4-modal-result');
const closeModal = document.querySelector('.section4-modal__close');

inputSlider.oninput = (()=> {
    var slideValue = inputSlider.value;
    valueMarker.textContent = slideValue;

    valueMarker.classList.add("show-value");
    valueMarker.style.left = slideValue/10 + "%";

    if (slideValue < 750){
        valueMarker.style.left = "calc(" + slideValue/10 + "% + 5px)";
    }
    if (slideValue < 550){
        valueMarker.style.left = "calc(" + slideValue/10 + "% + 10px)";
    }
    if (slideValue < 350){
        valueMarker.style.left = "calc(" + slideValue/10 + "% + 15px)";
    }
    if (slideValue < 150){
        valueMarker.style.left = "calc(" + slideValue/10 + "% + 20px)";
    }
});

calcButton.addEventListener("click", function() {
    var numeroTed = inputSlider.value;
    var valorTed = inputText.value;

    var gastoTotal = numeroTed * valorTed;
    var comDesconto = gastoTotal - (gastoTotal*0.53);
    var economia = gastoTotal - comDesconto;

    var stringEconomia = economia.toString().replace('.',',');
    if (!stringEconomia.includes(",")){
        stringEconomia = stringEconomia + ",00"
    }

    var resultado = document.querySelector('.js-modal-result');
    resultado.textContent = stringEconomia;

    modal.classList.add('show-modal');
    
}); 

closeModal.addEventListener("click", function() {
    modal.classList.remove('show-modal');
});
