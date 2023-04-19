function func(){


let temp1=document.getElementById("inp1").value;



const apifetch = async ()=>{
    let myf= await fetch(`https://goweather.herokuapp.com/weather/${temp1}`)
    .then((response1)=>
    {
        return response1.json();
    })
    .then((val1)=>{
        console.log(val1)
        const temp=val1.temperature;
        const ws=val1.wind;
        const desc=val1.description;
        const day1temp=val1.forecast[0].temperature;
        const day1ws=val1.forecast[0].wind;

        const day2temp=val1.forecast[1].temperature;
        const day2ws=val1.forecast[1].wind;

        const day3temp=val1.forecast[2].temperature;
        const day3ws=val1.forecast[2].wind;
        // console.log(fc);
        document.getElementById("temp").innerHTML=temp;
        document.getElementById("ws").innerHTML=ws;
        document.getElementById("desc").innerHTML=desc;

        document.getElementById("fore12").innerHTML=day1temp;
        document.getElementById("fore13").innerHTML=day1ws;

        document.getElementById("fore22").innerHTML=day2temp;
        document.getElementById("fore23").innerHTML=day2ws;

        document.getElementById("fore32").innerHTML=day3temp;
        document.getElementById("fore33").innerHTML=day3ws;
    })
    .catch((error)=>{
        console.log(`Error : ${error}`)
    })
}
apifetch();
}