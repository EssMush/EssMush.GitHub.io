// $("#Go").on("click" ,(e)=>{
//     $.ajax({
//         url: "https://coronavirus-19-api.herokuapp.com/all",
//         success: function(result){
//             console.log(result)
//             $(".main").html("Casos" + result.cases + "Muertes" + result.deaths + "Recuperadors" + result.recovered);
//         }
//     });
// });

let main = document.querySelector("#main");


$("#Go").on("click" ,(e)=>{
    $.ajax({
        url: "http://www.7timer.info/bin/civillight.php?lon=22.233105&lat=-97.861099&unit=metric&output=json&tzshift=0",
        success: function(result){
        const datos = JSON.parse(result);
        console.log(datos)
        $(".main").html("Dia: " + datos.dataseries[0].date + "<br>" + "Tiempo: " + datos.dataseries[0].weather + "<br>" + "TempMin: " + datos.dataseries[0].temp2m.min + "<br>" + "TempMax: " + datos.dataseries[0].temp2m.max);
        }
    });
});
