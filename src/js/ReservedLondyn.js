const passengersLondyn=document.getElementById("passengersLondyn");
const childrenLondyn=document.getElementById("childrenLondyn");
const extraBaggageLon=document.getElementById("extraBaggageLondyn");
const flyLondyn=document.getElementById("seatLondynFly");

function priceLondyn(){
  return (passengersLondyn.value *500)+(childrenLondyn.value*100);
  };

function extraBaggageLondyn(){
  if(extraBaggageLon.options[extraBaggageLon.selectedIndex].value==="yes"){
    return 50;
  }
  else{
   return 0;
  }
};
function powrotLondyn(){
  if(flyLondyn.options[flyLondyn.selectedIndex].value==="TwoTrip"){
    return 700;
  }
  else{
    return 0;
  }
};

function SumLondyn(){
  let wynikLondyn= priceLondyn()+extraBaggageLondyn()+powrotLondyn();
  document.getElementById("priceLondyn").innerHTML =`Cena: ${wynikLondyn} zł</br>`
  return wynikLondyn;
};

function getCurrencyLondyn(){
  fetch("https://api.nbp.pl/api/exchangerates/rates/a/EUR/?format=json")
  .then((resp) => resp.json()) 
    .then((data) =>{
      document.getElementById("EUR").innerHTML=`Cena w EUR: ${(SumLondyn()/data.rates[0].mid).toFixed(2)} €`;
      console.log(data.rates[0].mid.toFixed(2))
    })}


function weatherLondyn(){
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Londyn&appid=84d23d36dd19e4c9bf57e108e560601a")
  
    .then((resp) => resp.json()) // Transform the data into json
    .then((dataLondyn) => {
      console.log(dataLondyn);
    
      document.getElementById("weatherLondyn").innerText = `Temperatura w Londynie ${((dataLondyn.main.temp - 273.15).toFixed(1))}C`})};

      function seatLondynTwo (){
        document.getElementById('Londynseat2').innerHTML=`Miejsce: ${document.getElementById("Londynseat").innerHTML}`;
            }


      const btnLondyn=document.getElementById("summationLondyn");
btnLondyn.addEventListener("click",(e)=>{
e.preventDefault();
document.getElementById("FieldseLondyn").style.display="none";
document.getElementById("planeLon").style.display="none";

document.getElementById("summaryLondyn").style.display="block";

document.getElementById("ReservedLondyn").innerHTML = ` 
Twoja rezerwacja:<br> 
Ilość osób:<br> 
${passengersLondyn.value}<br> 
dzieci:<br> 
${childrenLondyn.value}<br> 
Dodatkowy bagaż:<br> 
${extraBaggageLon.options[extraBaggageLon.selectedIndex].text}<br> 
Data wylotu:<br>
${document.getElementById('dataLondyn').innerText}<br>
Data przylotu:<br>
${document.getElementById('dataInLondyn').innerText}<br>
Przelot:<br> 
${flyLondyn.options[flyLondyn.selectedIndex].text}<br>
Pogoda:<br>
`
weatherLondyn();
SumLondyn();
getCurrencyLondyn();
seatLondynTwo ();

});

export const Londyn = function () {Londyn}