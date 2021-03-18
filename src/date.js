

const dateArr = ["0131","0228","0331","0430","0531","0630","0731","0831","0930","1031","1130","1231"]
var date = new Date();
d = date.getDate();
m = date.getMonth()+1;
y = date.getFullYear();

if(d<10){
    d1='0'+d
} 
if(m<10){
    m='0'+m
} 
today =y+"-"+m+"-"+d1;
document.getElementById("datepicker").setAttribute("min",today)
document.getElementById("datepicker").setAttribute("value",today)

var curdate = new Date(y, m, d)
console.log(curdate)
d1 = curdate.getDate()
m1 = curdate.getMonth();
y1 = curdate.getFullYear();

if(d1<10){
    d1='0'+d+1
} 
if(m1<10){
    m1='0'+m1
} 

tommorow =y1+"-"+m1+"-"+d1;
document.getElementById("datepicker2").setAttribute("min",tommorow)
document.getElementById("datepicker2").setAttribute("value",tommorow)

export const dateout = function () {dateout}