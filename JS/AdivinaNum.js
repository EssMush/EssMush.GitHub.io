// alert("Hola soy Js");
//GUARDAMOS EL INPUT Y EL BUTTON EN CONSTANTES
const input = document.querySelector("#input");
const button = document.querySelector("#Adivina");
//cambiar color del body 
const Bo = document.getElementById("Bc");
//GENERA UN NUMERO ALETORIO
let aleatorio = Math.round(Math.random()*100);
//HACEMOS UN EVENTO AL PRECIONAR UN CLICK
//COMO AL IGUAL HACEMOS CONDICIONALES 
button.addEventListener("click", (e)=>{
        if(input.value < aleatorio)
    {
        alert("Mas Arriba");
    }
    else if(input.value > aleatorio)
    {
        alert("Mas abajo");
    }
    else
    {
        alert("Ganastee!!");
        Bo.style.backgroundColor = "green";
    }
});

//PARTES 2 REINIICIAR
const Reiniciar = document.querySelector("#Restart");
Reiniciar.addEventListener("click", (e)=>{
    location.reload();
});

//PARTE 3 IMPIME LOS DATOS INGRESADOS (SOLO EN CONSOLA)

function ViewAraayInput(){
    let NumEquivo = Array();
    let inputsValues = document.getElementsByClassName("ValueInputs")
    namesValues = [].map.call(inputsValues, function(dataIn){
    NumEquivo.push(dataIn.value);
    });

    let CrDiv = document.createElement("div");//CREAMOS EL DIV
    let CrTexDiv = document.createTextNode(NumEquivo);//HACEMOS UN VALOR PARA EL DIV
    CrDiv.appendChild(CrTexDiv);//AÑADE EL TEXTO AL DIV CREADO
    
    let div22 = document.querySelector("#div22") //EL DIV DONDE QUEREMOS QUE ENTRE

    //añade el elemento creado y su contenido en el dom
    div22.appendChild(CrDiv);
   // console.log(CrDiv);
}

