$(".greenLondyn").click(function() {
    let seatLondynchoice=$(this).attr('d').slice(0,4)
    let seatLondynEnd=$("#Londynseat").append(seatLondynchoice); 
    return seatLondynEnd
  })
  
  document.getElementById('datepicker').addEventListener('change', ()=>{
    if(document.getElementById('datepicker').value){
      return document.getElementById("dataLondyn").innerText="Data wylotu:"+ document.getElementById('datepicker').value;
    }
    else{
      return document.getElementById("dataLondyn").style="none";
    }
  })
  
  document.getElementById('datepicker2').addEventListener('change', ()=>{
    if(document.getElementById('datepicker2').value){
      return document.getElementById("dataInLondyn").innerText="Data przylotu:"+ document.getElementById('datepicker2').value;
    }
    else{
      return document.getElementById("dataInLondyn").style="none";
    }
  })
  