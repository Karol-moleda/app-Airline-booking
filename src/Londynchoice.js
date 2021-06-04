$(".greenLondyn").click(function() {
    let seatAtlantachoice=$(this).attr('d').slice(0,4)
    let seatAtlantaEnd=$("#Atlatnaseat").append(seatAtlantachoice); 
    return seatAtlantaEnd
  })
  
  document.getElementById('datepicker').addEventListener('change', ()=>{
    if(document.getElementById('datepicker').value){
      return document.getElementById("dataAtlanta").innerText="Data wylotu:"+ document.getElementById('datepicker').value;
    }
    else{
      return document.getElementById("dataAtlanta").style="none";
    }
  })
  
  document.getElementById('datepicker2').addEventListener('change', ()=>{
    if(document.getElementById('datepicker2').value){
      return document.getElementById("dataInAtlatna").innerText="Data przylotu:"+ document.getElementById('datepicker2').value;
    }
    else{
      return document.getElementById("dataInAtlatna").style="none";
    }
  })
  