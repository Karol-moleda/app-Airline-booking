fetch("http://api.nbp.pl/api/exchangerates/rates/A/GBP/")
.then((resp) => resp.json()) 
.then(function (data) {
document.getElementById(
"BF").innerHTML += ` ${data.rates[0].mid} `;
});

fetch("http://api.nbp.pl/api/exchangerates/rates/A/USD/")
.then((resp) => resp.json()) 
.then(function (data) {
document.getElementById(
"DA").innerHTML += ` ${data.rates[0].mid} `;
});

fetch("http://api.nbp.pl/api/exchangerates/rates/A/CNY/")
.then((resp) => resp.json()) 
.then(function (data) {
document.getElementById(
"JC").innerHTML += ` ${data.rates[0].mid} `;
});

fetch("http://api.nbp.pl/api/exchangerates/rates/A/EUR/")
.then((resp) => resp.json()) 
.then(function (data) {
document.getElementById(
"E").innerHTML += ` ${data.rates[0].mid} `;
});

export const currency = function () {currency}