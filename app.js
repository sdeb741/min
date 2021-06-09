var btnTranslate = document.querySelector("#btn-Translate");
var txtInput = document.querySelector("#txt-Input");
var outputDiv= document.querySelector("#Output");



outputDiv.innerText="Sayan Deb";


console.log(outputDiv);




function clickHandler()
{
    console.log("clicked");
    console.log("input",txtInput.value);
};

btnTranslate.addEventListener("click",clickHandler);



