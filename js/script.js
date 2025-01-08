// Funkce pro vytvoření nové karty
function createNewCard(container, title, content, className) {
	let newCard = document.createElement("li");
	newCard.classList.add(className); // Přiřadí třídu pro odlišení formuláře
	newCard.classList.add("animate__animated", "animate__flipInX");

	if (className === "datum") {
		// Pro druhý formulář pouze <p> obsahující title a content spojeno mezerou
		newCard.innerHTML = `<p>${title} ${content}</p><p class="btn"><span class="edit-btn">Upravit</span> | <span class="delete-btn">Smazat</span></p>

		`;
	} else {
		// Pro první formulář <h3> pro title a <p> pro content
		newCard.innerHTML = `<h3>${title}</h3>
                    <p>${content}</p>
										<p class="btn"><span class="edit-btn">Upravit</span> | <span class="delete-btn">Smazat</span></p>
                `;
	}

	container.appendChild(newCard);

	//delete btn
	const deletebtns = document.querySelectorAll(".delete-btn");
	deletebtns.forEach((deletebtn) => {
		deletebtn.addEventListener("click", (event) => {
			const li = event.target.closest("li");
			li.remove();
		});
	});

	//edit btn
	const edits = document.querySelectorAll(".edit-btn");
	edits.forEach((edit) => {
		edit.addEventListener("click", (event) => {
			alert("Zatim to nefaka");
		});
	});
}

// První formulář
const form1 = document.querySelector("#day");
const inputTitle1 = form1.querySelector("input[name=title]");
const inputContent1 = form1.querySelector("input[name=content]");
const cardContainer = document.querySelector("#allCards"); // Všechny karty v jednom seznamu

form1.addEventListener("submit", (event) => {
	event.preventDefault();

	if (!inputTitle1.value.trim() || !inputContent1.value.trim()) return;

	// Vytvoření nové karty pro první formulář
	createNewCard(cardContainer, inputTitle1.value, inputContent1.value, "den");

	// Vymazání inputů
	inputTitle1.value = "";
	inputContent1.value = "";
});

// Druhý formulář
const form2 = document.querySelector("#date");
const inputTitle2 = form2.querySelector("input[name=title2]");
const inputContent2 = form2.querySelector("input[name=content2]");

form2.addEventListener("submit", (event) => {
	event.preventDefault();

	if (!inputTitle2.value.trim() || !inputContent2.value.trim()) return;

	// Vytvoření nové karty pro druhý formulář

	createNewCard(cardContainer, inputTitle2.value, inputContent2.value, "datum");

	// Vymazání inputů
	inputTitle2.value = "";
	inputContent2.value = "";
});
