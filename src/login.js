const btnAtlanta=document.getElementById("buttonAll");

btnAtlanta.addEventListener('click',(e)=>{
  e.preventDefault();
  document.getElementById("other").style.display="none"
  document.getElementById("lot").style.display="none"
  document.getElementById("poradnik").style.display="none"
  document.getElementById("planePekin").style.display="none"
  document.getElementById("planeLondyn").style.display="none"
  document.getElementById("planeAtlanta").style.display="none"
  document.getElementById("mainAll").style.display='block';

});

const btnLondyn=document.getElementById("buttonLon");

btnLondyn.addEventListener('click',(e)=>{
  e.preventDefault();
  document.getElementById("other").style.display="none"
  document.getElementById("lot").style.display="none"
  document.getElementById("poradnik").style.display="none"
  document.getElementById("planePekin").style.display="none"
  document.getElementById("planeLondyn").style.display="none"
  document.getElementById("planeAtlanta").style.display="none"
  document.getElementById("mainAll").style.display='block';

});

const btnPekin=document.getElementById("buttonPek");

btnPekin.addEventListener('click',(e)=>{
  e.preventDefault();
  document.getElementById("other").style.display="none"
  document.getElementById("lot").style.display="none"
  document.getElementById("poradnik").style.display="none"
  document.getElementById("planePekin").style.display="none"
  document.getElementById("planeLondyn").style.display="none"
  document.getElementById("planeAtlanta").style.display="none"
  document.getElementById("mainAll").style.display='block';

});
export const Login = function () {Login}