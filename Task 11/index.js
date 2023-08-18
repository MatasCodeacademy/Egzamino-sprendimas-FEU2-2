const BASE_URL = "https://melon-potent-period.glitch.me";

document.getElementById("btn-add-skill").addEventListener("click", () => {
	location.href = "./add.html";
});

fetch(BASE_URL + "/skills")
	.then((response) => {
		if (response.ok) {
			return response.json();
		} else {
			throw new Error("Failed to fetch data");
		}
	})
	.then((result) => {
		populateSkillsTable(result);
	})
	.catch((error) => alert(error));

const populateSkillsTable = (skillData) => {
	const table = document.getElementById("table-skills");
	const tbody = table.querySelector("tbody");

	skillData.forEach((skill) => {
		const skillRow = document.createElement("tr");

		const idTableData = document.createElement("td");
		idTableData.textContent = skill.id;

		const skillTableData = document.createElement("td");
		skillTableData.textContent = skill.skill;

		const deleteButton = document.createElement("td");

		deleteButton.addEventListener("click", () => {
			deleteSkill(skill.id);
		});

		deleteButton.textContent = "delete";

		skillRow.append(idTableData, skillTableData, deleteButton);
		tbody.append(skillRow);
	});
};

const deleteSkill = async (skillId) => {
	try {
		const response = await fetch(BASE_URL + `/skill/${skillId}`, {
			method: "DELETE",
		});

		if (response.ok) {
			alert("Successfully deleted");
			location.reload();
		} else {
			throw new Error("Delete failed");
		}
	} catch (error) {
		alert(error);
	}
};
