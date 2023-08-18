/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const output = document.getElementById("output");

import carDataJson from "./cars.json" assert { type: "json" };

// document.addEventListener("DOMContentLoaded", () => {
// 	fetch("./cars.json")
// 		.then((response) => {
// 			if (response.ok) {
// 				return response.json();
// 			} else {
// 				throw new Error("Failed to fetch");
// 			}
// 		})
// 		.then((result) => {
// 			populateCars(result);
// 		})
// 		.catch((error) => {
// 			alert(error);
// 		});
// });

const populateCars = (carData) => {
	carData.forEach((car) => {
		const carCard = document.createElement("div");

		carCard.classList.add("carCard");

		const carBrand = document.createElement("h2");
		const carModelList = document.createElement("ul");

		carBrand.textContent = car.brand;

		car.models.forEach((model) => {
			const modelListItem = document.createElement("li");
			modelListItem.textContent = model;
			carModelList.append(modelListItem);
		});

		carCard.append(carBrand, carModelList);
		output.append(carCard);
	});
};

populateCars(carDataJson);
