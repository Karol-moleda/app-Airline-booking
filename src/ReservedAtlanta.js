const passengers=document.getElementById("passengersAtlanta");
const children=document.getElementById("childrenAtlatna");
const extraBaggage=document.getElementById("extraBaggageAtlanta");
const position=document.getElementById("positionAtlanta");
const fly=document.getElementById("seat");
function cena(){
  if(position.options[position.selectedIndex].value==="Busines"){
    console.log("ok")
  return (passengers.value *2000)+(children.value*1000);
}
  else if(position.options[position.selectedIndex].value==="Premium"){
    console.log("OK2")
    return (passengers.value *1000)+(children.value*500);

  }
  else if(position.options[position.selectedIndex].value==="Economy"){
    return (passengers.value *500)+(children.value*250);

  }
  else{
    console.log("Błąd")
  }
};


function dodatkowybagaż (){
  if(extraBaggage.options[extraBaggage.selectedIndex].value==="yes"){
    return 200;
  }
  else{
   return 0;
  }
}
function powrotAtlanta(){
  if(fly.options[fly.selectedIndex].value==="TwoTrip"){
    return 1000;
  }
  else{
    return 0;
  }
};
 

function Sum(){
  let wynik= cena()+dodatkowybagaż () + powrotAtlanta();
  document.getElementById("price").innerHTML =`Cena: ${wynik} zł</br>`
  return wynik;
}

function getCurrency(){
 
  fetch("https://api.nbp.pl/api/exchangerates/rates/a/usd/?format=json")
  .then((resp) => resp.json()) 
    .then( (data)=> {
      document.getElementById("priceUSD").innerHTML=`Cena w USD: ${(Sum()/data.rates[0].mid).toFixed(2)} $`;
      console.log(data.rates[0].mid.toFixed(2))
    }
    )
    };



function pogoda(){
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=84d23d36dd19e4c9bf57e108e560601a")
  
    .then((resp) => resp.json()) // Transform the data into json
    .then((data) => {
      console.log(data);
    
      document.getElementById("pogoda").innerText = `Temperatura w Atlancie ${((data.main.temp - 273.15).toFixed(1))}C`})};

function seatAtlantaTwo (){
  document.getElementById('Atlatnaseat2').innerHTML=`Miejsce: ${document.getElementById("Atlantaseat").innerHTML}`;
            }
const btn=document.getElementById("summationAtlanta");
 btn.addEventListener("click",(e)=>{
   e.preventDefault();
   document.getElementById("FieldsetAtlanta").style.display="none";
   document.getElementById("plane").style.display="none";

   document.getElementById("summary").style.display="block";
 document.getElementById("Reserved").innerHTML = ` 
Twoja rezerwacja:<br> 
Ilość osób:<br> 
${passengers.value}<br> 
dzieci:<br> 
${children.value}<br> 
Dodatkowy bagaż:<br> 
${extraBaggage.options[extraBaggage.selectedIndex].text}<br> 
Data wylotu:<br>
${document.getElementById('datepicker').value}<br>
Data przylotu:<br>
${document.getElementById('datepicker2').value}<br>
Klasa:<br> 
${position.options[position.selectedIndex].text}<br> 
Przelot:<br> 
${fly.options[fly.selectedIndex].text}<br>
Pogoda:<br>
`
pogoda();
Sum();
getCurrency();
seatAtlantaTwo();
});



