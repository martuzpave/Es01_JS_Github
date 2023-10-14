"use strict"
let _imgUtente;
let _imgComputer;
let _txtUtente;
let _txtRisultato;
let _mins;
let _btnGioca;

window.onload  =function (){
    _imgUtente = document.getElementById("imgUtente");
    _imgComputer = document.getElementById("imgComputer");
    _txtUtente = document.getElementById("txtUtente");
    _txtRisultato = document.getElementById("txtRisultato");
    _mins  = document.getElementsByClassName("min");
    _btnGioca = document.getElementById("btnGioca");

    _imgUtente.style.backgroundImage = "url(img/vuota.png)";
    _imgComputer.style.backgroundImage = "url(img/vuota.png)";

    _mins[0].style.backgroundImage = "url(img/forbice.png)";
    _mins[1].style.backgroundImage = "url(img/mano.png)";
    _mins[2].style.backgroundImage = "url(img/sasso.png)";

    for(let i = 0;i<_mins.length;i++){
        _mins[i].onclick = function (){
            visualizza(i);
        }
    }
    _btnGioca.addEventListener("click",gioca);
}
function gioca(){
    if(_txtUtente.value == ""){
        alert("inserire il nome");
    }
    else if(_imgUtente.style.backgroundImage == 'url("img/vuota.png")'){
        alert("scegli una carta");
    }
    else{

        let pathImage;

        do
        {
            pathImage = _mins[generaNumero(0,2)].style.backgroundImage;
        }while(_imgUtente.style.backgroundImage == pathImage);

        _imgComputer.style.backgroundImage = pathImage;


        if(_imgUtente.style.backgroundImage == 'url("img/mano.png")'){
            if(_imgComputer.style.backgroundImage == 'url("img/forbice.png")'){
                _txtRisultato.innerText = "HA VINTO IL COMPUTER";
            }
            else{
                _txtRisultato.innerText = "HA VINTO " + _txtUtente.value;
            }
        }
        if(_imgUtente.style.backgroundImage == 'url("img/sasso.png")'){
            if(_imgComputer.style.backgroundImage == 'url("img/mano.png")'){
                _txtRisultato.innerText = "HA VINTO IL COMPUTER";
            }
            else{
                _txtRisultato.innerText = "HA VINTO " + _txtUtente.value;
            }
        }
        if(_imgUtente.style.backgroundImage == 'url("img/forbice.png")'){
            if(_imgComputer.style.backgroundImage == 'url("img/sasso.png")'){
                _txtRisultato.innerText = "HA VINTO IL COMPUTER";
            }
            else{
                _txtRisultato.innerText = "HA VINTO " + _txtUtente.value;
            }
        }
    }

}
function visualizza(n){
    _imgUtente.style.backgroundImage = _mins[n].style.backgroundImage;
}

function generaNumero(a, b){
    return(Math.floor((b-a+1)*Math.random())+a);
}