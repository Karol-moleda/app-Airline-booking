import style from "./index.scss"
import {currency} from "./currency";
import {clock} from "./clock";
import {dateout} from "./date";



console.log(document.getElementById("1").value)
document.getElementById('Wybierz').addEventListener("click",Fly);

function Fly(){
    if (document.getElementById("1").value===1){
        // document.getElementsByClassName("Linie").classList.add("disappear");
        document.getElementsByClassName("place").classList.add("disappear");
        document.getElementsByClassName("other").classList.add("disappear");
        document.getElementById("lot").classList.add("disappear");
        document.getElementById("poradnik").classList.add("disappear");
        document.getElementById("planeAtlanta").classList.add("active");
    } 
    else if(document.getElementById("2").value===2) {
        // document.getElementsByClassName("Linie").classList.add("disappear");
        document.getElementsByClassName("place").classList.add("disappear");
        document.getElementsByClassName("other").classList.add("disappear");
        document.getElementById("lot").classList.add("disappear");
        document.getElementById("poradnik").classList.add("disappear");
        document.getElementById("planePekin").classList.add("active");
    }
    else{
        // document.getElementsByClassName("Linie").classList.add("disappear");
        document.getElementsByClassName("place").classList.add("disappear");
        document.getElementsByClassName("other").classList.add("disappear");
        document.getElementById("lot").classList.add("disappear");
        document.getElementById("poradnik").classList.add("disappear");
        document.getElementById("planeLondyn").classList.add("active")
    }
};






