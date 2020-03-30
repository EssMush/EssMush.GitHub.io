//USUARIO
//Tomamos los elementos del text
const TxtCorreo = document.querySelector("#Correo");
const TxtPassword = document.querySelector("#Contraseña");

//Tomamos los botones
const ButtSent = document.querySelector(".BtoUs");
const ButtBack = document.querySelector(".BtoSv");

ButtSent.addEventListener("click", (e)=>{
    //Hacemos una variable para Json
    let Myobj ={Correo: TxtCorreo.value, Password: TxtPassword.value};
    let MyJson =JSON.stringify(Myobj);
    //Hacemos que se mande al div de impresion
    document.querySelector("#DtRecibidos").textContent = MyJson;
});

ButtBack.addEventListener("click", (e)=>{
    const TxtArea = document.querySelector("#DtRecibidos").value;
    console.log(TxtArea);

    let Myobjb =TxtArea;
    let MyJsonb =JSON.parse(Myobjb);

    console.log(MyJsonb);

    TxtCorreo.value = MyJsonb.Correo;
    TxtPassword.value =MyJsonb.Password;
    //NO ME JALA HACER LA LIMPIEZA
    TxtArea.value = "";
});

