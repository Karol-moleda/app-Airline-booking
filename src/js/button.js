
const select=document.getElementById("cityIn")

const button=document.getElementById("Wybierz");
button.addEventListener("click",()=>{
    if (select.options[select.selectedIndex].value==="Atlanta"){
      console.log("ma")
       document.getElementById("other").style.display="none"
        document.getElementById("lot").style.display="none"
        document.getElementById("poradnik").style.display="none"
        document.getElementById("planeAtlanta").style.display="flex"
        document.getElementById("planePekin").style.display="none"
        document.getElementById("planeLondyn").style.display="none"
        }
    else if(select.options[select.selectedIndex].value==="Pekin") {
      console.log("ma również")
        document.getElementById("other").style.display="none"
        document.getElementById("lot").style.display="none"
        document.getElementById("poradnik").style.display="none"
        document.getElementById("planePekin").style.display="flex"
        document.getElementById("planeLondyn").style.display="none"
        document.getElementById("planeAtlanta").style.display="none"
    }
    else if(select.options[select.selectedIndex].value==="Londyn"){
        document.getElementById("other").style.display="none"
        document.getElementById("lot").style.display="none"
        document.getElementById("poradnik").style.display="none"
        document.getElementById("planeLondyn").style.display="flex"
        document.getElementById("planeAtlanta").style.display="none"
        document.getElementById("planePekin").style.display="none"
        console.log("nosz ty ")
    }
    else{
        document.getElementById("other").style.display="flex"
        document.getElementById("lot").style.display="flex"
        document.getElementById("poradnik").style.display="flex"
        document.getElementById("planeLondyn").style.display="none"
        document.getElementById("planeAtlanta").style.display="none"
        document.getElementById("planePekin").style.display="none"
    }
}
)

export const choice = function () {choice}
