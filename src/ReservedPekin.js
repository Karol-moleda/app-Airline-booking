const passengersPekin=document.getElementById("passengersPekin");
const childrenPekin=document.getElementById("childrenPekin");
const extraBaggagePek=document.getElementById("extraBaggagePekin");
const rowPekin=document.getElementById("rowPekin");
const seatPekin=document.getElementById("seatPekin");
const flyPekin=document.getElementById("seatPekinFly");

function pricePekin(){

  return (passengersPekin.value *2500)+(childrenPekin.value*1000);
  };

function extraBaggagePekin(){
  if(extraBaggagePek.options[extraBaggagePek.selectedIndex].value==="yes"){
    return 130;
  }
  else{
   return 0;
  }
};

function powrotPekin(){
  if(flyPekin.options[flyPekin.selectedIndex].value==="TwoTrip"){
    return 850;
  }
  else{
    return 0;
  }
};
function SumPekin(){
  let wynikPekin= pricePekin()+extraBaggagePekin()+ powrotPekin();
  document.getElementById("pricePekin").innerHTML =`Cena: ${wynikPekin} zł</br>`
  return wynikPekin;
};

function getCurrencyPekin(){
 
  fetch("https://api.nbp.pl/api/exchangerates/rates/a/cny/?format=json")
  .then((respPekin) => respPekin.json()) 
    .then((data)=> {
      document.getElementById("WS").innerHTML=`Cena w CNY:${(SumPekin()/data.rates[0].mid).toFixed(2)}¥`;
      console.log(data.rates[0].mid.toFixed(2))
    })};


function weatherPekin(){
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Pekin&appid=84d23d36dd19e4c9bf57e108e560601a")
  
    .then((resp) => resp.json()) // Transform the data into json
    .then((data) => {
      console.log(data);
    
      document.getElementById("weatherPekin").innerText = `Temperatura w Pekinie ${((data.main.temp - 273.15).toFixed(1))}C`})};

const btnPekin=document.getElementById("summationPekin");
btnPekin.addEventListener("click",(e)=>{
e.preventDefault();
document.getElementById("FieldsetPekin").style.display="none";
document.getElementById("planePek").style.display="none";

document.getElementById("summaryPekin").style.display="block";

document.getElementById("ReservedPekin").innerHTML = ` 
Twoja rezerwacja:<br> 
Ilość osób:<br> 
${passengersPekin.value}<br> 
dzieci:<br> 
${childrenPekin.value}<br> 
Dodatkowy bagaż:<br> 
${extraBaggagePek.options[extraBaggagePek.selectedIndex].text}<br> 
Data wylotu:<br>
${document.getElementById('datepicker').value.onclick}<br>
Data wylotu:<br>
${document.getElementById('datepicker2').value.onclick}<br>
Miejsce:<br> 
rząd:${rowPekin.value}<br> 
miejsce:${seatPekin.text}<br> 
Przelot:<br> 
${flyPekin.options[flyPekin.selectedIndex].text}<br>
Pogoda:<br>

`
weatherPekin();
SumPekin();
getCurrencyPekin();
});

