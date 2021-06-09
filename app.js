var btnTranslate = document.querySelector("#btn-Translate");
var txtInput = document.querySelector("#txt-Input");

console.log(txtInput);



function clickHandler()
{
    console.log("clicked");
    console.log("input",txtInput.value);
};

btnTranslate.addEventListener("click",clickHandler);



