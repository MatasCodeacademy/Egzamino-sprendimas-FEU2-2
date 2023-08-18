/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const outputDiv = document.getElementById("output");
const inputKilos = document.getElementById("search");

document.querySelector("form").addEventListener("submit", (event) => {
	event.preventDefault();

	outputDiv.innerHTML = "";

	const kilograms = inputKilos.value;

	if (Number(kilograms)) {
		const pounds = document.createElement("p");
		const grams = document.createElement("p");
		const ounces = document.createElement("p");

		pounds.textContent = "Pounds: " + (kilograms * 2.2046).toFixed(4) + "lb";
		grams.textContent = "Grams: " + kilograms * 1000 + "g";
		ounces.textContent = "Ounces: " + (kilograms * 35.274).toFixed(4) + "oz";

		outputDiv.append(pounds, grams, ounces);
	} else {
		const errorMessage = document.createElement("p");
		errorMessage.textContent = "Please enter a number";
		outputDiv.append(errorMessage);
	}
});
