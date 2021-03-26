// // import A,{Sample,a} from './first.mjs'
// // console.log("In the Second Module");
// // A();
// // Sample();
// // console.log(a+a);




// function * Sample()
// {
//     console.log("start..");
//    // yield;
//     console.log("end");
// }
// let x=Sample();
// console.log(x);
// let re=x.next();

// console.log(x.next());
async function loadAPI()
{
    let city=document.getElementById("city").value;
    console.log(city);
    let result=await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=8e625013a4411828627848ede0d523cc&units=metric`);
    let finlres=await result.json();
    return finlres;
}
async function getInfo()
{
    console.log("hello");
    let y=await loadAPI();
    //console.log(list);
    if(y.cod=="404"){
    document.getElementById("res").innerHTML=`<h2>city name invalid</h2>`;
    document.getElementById("chart").innerHTML="";}
    else{
       
    //console.log(temp);
    document.getElementById("res").innerHTML=`<h1>country:${y.city.country}</h1><h2>city:${y.city.name}</h2><h2>temp:${y.list[2].main.temp}</h2>`;
    console.log(y);
    console.log(y.list[2].main.temp);
    //console.log()
    //console.log(y.name);
   // document.getElementById("temp").value=y.main.temp;
        let {main:{temp:d1}}=y.list[2];
        let {main:{temp:d2}}=y.list[10];
        let {main:{temp:d3}}=y.list[18];
        let {main:{temp:d4}}=y.list[26];
         let {main:{temp:d5}}=y.list[34];
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [y.list[2].dt_txt.substring(0,10), y.list[10].dt_txt.substring(0,10), y.list[18].dt_txt.substring(0,10), y.list[26].dt_txt.substring(0,10), y.list[34].dt_txt.substring(0,10)],
        datasets: [{
            label: 'temperature',
            data: [d1,d2, d3, d4, d5],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1

        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
    }
}