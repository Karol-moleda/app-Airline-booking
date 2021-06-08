const btnFinish= document.getElementById('personButton')

btnFinish.addEventListener('click',(e)=>{
alert("Sprawdziłeś wszystkie dane?")
e.preventDefault();
document.getElementById("other").style.display="none"
document.getElementById("lot").style.display="none"
document.getElementById("poradnik").style.display="none"
document.getElementById("planePekin").style.display="none"
document.getElementById("planeLondyn").style.display="none"
document.getElementById("planeAtlanta").style.display="none"
document.getElementById("mainAll").style.display='none'
document.getElementById('personButton').style.display="none";
document.getElementById('Personlist').style.display="block"

fetch("./src/personlist.json")
    .then((resp) => resp.json()) 
    .then((data) =>{

        for (let key in data) {
            let arr = data[key];
            for(let i = 0; i < arr.length; i++ ) {
                let obj = arr[ i ];
                
            document.getElementById("Personlist2").innerHTML =arr.map((obj)=>`${obj.Imie} ${obj.Nazwisko} <br>`).join('');

                    }
                }
    });
    document.getElementById("YourName").innerHTML += document.getElementById("usernameEnd").value;
})


export const Pesron = function () {Person}