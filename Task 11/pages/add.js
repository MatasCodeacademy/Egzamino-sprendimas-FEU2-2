const BASE_URL = "https://melon-potent-period.glitch.me";

document.getElementById("bnt-view-skills").addEventListener("click", () => {
	location.href = "../index.html";
});

document.querySelector("form").addEventListener("submit", (event) => {
	event.preventDefault();

	document.getElementById("btn-add-skill").setAttribute("disabled", true);

	const inputValue = document.getElementById("skill-input").value;

	fetch(BASE_URL + "/skills", {
		method: "POST",
		body: JSON.stringify({ skill: inputValue }),
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((response) => {
			if (response.ok) {
				alert("Successfully added a skill");
				location.href = "../index.html";
			} else {
				throw new Error("Failed to send skill");
			}
		})
		.catch((error) => {
			alert(error);
		});
});
