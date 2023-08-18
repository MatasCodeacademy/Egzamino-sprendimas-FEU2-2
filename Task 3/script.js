/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const output = document.getElementById("output");

document.getElementById("btn").addEventListener("click", () => {
	fetch(ENDPOINT)
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error("Failed to fetch");
			}
		})
		.then((result) => {
			populateUsers(result);
		})
		.catch((error) => {
			alert(error);
		});
});

const populateUsers = (userData) => {
	output.innerHTML = "";

	userData.forEach((user) => {
		const userCard = document.createElement("div");

		userCard.classList.add("userCard");

		const loginName = document.createElement("p");
		const avatarImg = document.createElement("img");

		loginName.textContent = user.login;
		avatarImg.src = user.avatar_url;

		userCard.append(avatarImg, loginName);
		output.append(userCard);
	});
};
