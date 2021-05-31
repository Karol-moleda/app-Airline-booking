

function dzień (){
    let dzisiaj = new Date();
  
    let dzien = dzisiaj.getDate();
    if(dzien<10){
      dzien='0'+dzien;
    }
    let miesiac=dzisiaj.getMonth();
    if(miesiac<10){
      miesiac= '0' + miesiac;
    }
    let rok = dzisiaj.getFullYear();
    return  rok +'-'+miesiac+'-'+dzien
    }
  document.getElementById("datepicker").setAttribute("min",dzień())
  document.getElementById("datepicker").setAttribute("value",dzień())
  
  function outDay(){
  
  let dzisiaj2 = new Date();
  
    let dzien2 = dzisiaj2.getDate() +1;
    if(dzien2<10){
      dzien2='0'+dzien2;
    }
    let miesiac2=dzisiaj2.getMonth();
    if(miesiac2<10){
      miesiac2= '0' + miesiac2;
    }
    let rok2 = dzisiaj2.getFullYear();
    return  rok2 +'-'+miesiac2+'-'+dzien2
    }
  document.getElementById("datepicker2").setAttribute("min",outDay())
  document.getElementById("datepicker2").setAttribute("value",outDay())

export const dateout = function () {dateout}