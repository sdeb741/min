var btnTranslate = document.querySelector("#btn-Translate");
var txtInput = document.querySelector("#txt-Input");
var outputDiv= document.querySelector("#Output");

var serverURL="https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text)
{
    return serverURL + "?" + "text=" +text;
}

function errorHandler(error)
{
    console.log("Error occured", error);                                   
    alert("Something wrong with server");
}




function clickHandler()
{
    var inputText=txtInput.value;

    fetch(getTranslationURL(inputText))
        .then(response=>response.json())
        .then(json=> {
            var translatedText=json.contents.translated;
            outputDiv.innerText=translatedText;
        })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click",clickHandler);


