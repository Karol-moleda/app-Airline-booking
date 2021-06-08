var data = new Date()

function getTime() 
{
    return (new Date()).toLocaleTimeString();
}
 

document.getElementById('czas').innerHTML = getTime();
 
setInterval(function() {
 
    document.getElementById('czas').innerHTML = getTime();
     
}, 1000);

export const clock = function () {clock}