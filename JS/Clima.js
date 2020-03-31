// let datos_json = '{ "product" : "civillight" , "init" : "2020031312" , "dataseries" : [ { "date" : 20200313, "weather" : "cloudy", "temp2m" : { "max" : 24, "min" : 21 }, "wind10m_max" : 2 }, { "date" : 20200314, "weather" : "pcloudy", "temp2m" : { "max" : 35, "min" : 21 }, "wind10m_max" : 2 }, { "date" : 20200315, "weather" : "cloudy", "temp2m" : { "max" : 35, "min" : 22 }, "wind10m_max" : 2 }, { "date" : 20200316, "weather" : "lightrain", "temp2m" : { "max" : 29, "min" : 22 }, "wind10m_max" : 2 }, { "date" : 20200317, "weather" : "cloudy", "temp2m" : { "max" : 31, "min" : 22 }, "wind10m_max" : 2 }, { "date" : 20200318, "weather" : "cloudy", "temp2m" : { "max" : 35, "min" : 22 }, "wind10m_max" : 2 }, { "date" : 20200319, "weather" : "cloudy", "temp2m" : { "max" : 30, "min" : 22 }, "wind10m_max" : 2 } ] }';



let Clima7 = document.querySelector("#Clima7");



let request = new XMLHttpRequest();
request.addEventListener("load", (e)=>{
    
    const datos = JSON.parse(request.responseText);
    console.log(datos);
    for(let i=0; i<datos.dataseries.length; i++){

        let weather = datos.dataseries[i].weather;
        let date = datos.dataseries[i].date;
        let TempMin = datos.dataseries[i].temp2m.min;
        let TempMax = datos.dataseries[i].temp2m.max;
        
        let promnostico = document.createElement("div");
        
        promnostico.innerHTML = "<span class = 'date Style'>" + date +" // "+"</span> <span class = 'weather Style'>" + weather +" // Max "+ "</span> <span class = 'Min Style'>" + TempMin +" --  Min"+ "</span> <span class = 'Max Style'>" + TempMax + "</span>";
        
        Clima7.appendChild(promnostico);
    }
});

request.open("GET", "http://www.7timer.info/bin/civillight.php?lon=22.233105&lat=-97.861099&unit=metric&output=json&tzshift=0");
request.send();