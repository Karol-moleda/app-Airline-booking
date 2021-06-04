 $(".greenPekin").click(function() {
  let seatPekinchoice=$(this).attr('d').slice(0,4)
  let seatPekinEnd=$("#Pekinseat").append(seatPekinchoice); 
  return seatPekinEnd
})

document.getElementById('datepicker').addEventListener('change', ()=>{
  if(document.getElementById('datepicker').value){
    return document.getElementById("dataOutPekin").innerText="Data wylotu:"+ document.getElementById('datepicker').value;
  }
  else{
    return document.getElementById("dataOutPekin").style="none";
  }
})

document.getElementById('datepicker2').addEventListener('change', ()=>{
  if(document.getElementById('datepicker2').value){
    return document.getElementById("dataInPekin").innerText="Data przylotu:"+ document.getElementById('datepicker2').value;
  }
  else{
    return document.getElementById("dataInPekin").style="none";
  }
})

