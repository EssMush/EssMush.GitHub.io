//CREAMO LA VARIABLE TURNO CON UN BOLEAN = TRUE
let Turno = true;
let Ingame = true;
//HACEMOS LA VARIABLE DONDE CONTENDRA LOS BOTONES
const Butts = document.querySelectorAll(".GatoIn");
//HACEMOS UN CICLO DONDE PASARA POR TODOS LOS BOTONES CON LA
//CLASE IGUALTA PARA INTRODUCIR EL EVENTO
let h;
const Body = document.getElementById("BoxAll");
for(let i =0; i<Butts.length; i++){
    Butts[i].addEventListener("click", (e)=>{
            if(Turno && e.target.innerHTML === "" && Ingame){
                e.target.innerHTML = "O";
                Turno = !Turno;
                if(Winer() === 0){
                    contadorO++;
                    document.querySelector("#SprondaswinO").textContent =contadorO;
                    document.querySelector("#SpWin").textContent = "Gano: O";
                    Body.style.backgroundColor = "rgb(0, 255, 85)";

                }
            }
            else if(e.target.innerHTML === "" && Ingame){
                e.target.innerHTML = "X";
                Turno = !Turno;
                if(Winer() === 1){
                    contadorX++;
                    document.querySelector("#SprondaswinX").textContent =contadorX;
                    document.querySelector("#SpWin").textContent = "Gano: X";
                    Body.style.backgroundColor = "#21618C";
                }
            }
            h = e.target.innerHTML;
            console.log(h);
        });
}
const ButtRein2 = document.querySelector("#Rein1");
ButtRein2.addEventListener("click", (e)=>{
    location.reload();
});
//CREAMO UNA VARIABLE PARA los botones y selectores
const ButtRein = document.querySelector("#Rein");
const SpmWin = document.querySelector("#SltcWin");
const SpRound = document.querySelector("#SltcRound");
//CREAMOS EL EVENTO
ButtRein.addEventListener("click", (e)=>{
    Ingame = true;
    for(let i=0; i<Butts.length; i++){
    Butts[i].textContent = "";
    Body.style.backgroundColor = "rgb(163, 136, 163)";
    contador = 0;
    }
});

let contador = 0;
let contadorX = 0;
let contadorO = 0;

const List = [[0,1,2],
              [3,4,5],
              [6,7,8],
              [0,4,8],
              [2,4,6],
              [0,3,6],
              [1,4,7],
              [2,5,8]];

function Winer(){
    contador++;
    for (let i =0; i<List.length; i++){
        if(Butts[List[i][0]].innerHTML === "X" && Butts[List[i][1]].innerHTML === "X" && Butts[List[i][2]].innerHTML === "X"){
            Ingame = false;
            return 1;
        }
        else if(Butts[List[i][0]].innerHTML === "O" && Butts[List[i][1]].innerHTML === "O" && Butts[List[i][2]].innerHTML === "O"){
            //alert("Ganaste");
            Ingame = false;
            return 0;
        }
    }
    if (contador === 9){
        alert("Empate");
        Ingame=false;
        return -1;
    }
};
     