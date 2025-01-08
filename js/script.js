// Funkce pro vytvoření nové karty
function createNewCard(container, title, content, className) {
	let newCard = document.createElement("li");
	newCard.classList.add(className, "animate__animated", "animate__flipInX");

	// Přidání obsahu na základě typu karty
	if (className === "datum") {
		const paragraph = document.createElement("p");
		paragraph.textContent = `${title} ${content}`;
		newCard.appendChild(paragraph);
	} else {
		const h3 = document.createElement("h3");
		h3.textContent = title;
		const pContent = document.createElement("p");
		pContent.textContent = content;
		newCard.appendChild(h3);
		newCard.appendChild(pContent);
	}

	const btnContainer = document.createElement("p");
	btnContainer.classList.add("btn");

	// Tlačítka pro editaci a smazání
	const editBtn = document.createElement("span");
	editBtn.classList.add("edit-btn");
	editBtn.textContent = "Upravit";
	const deleteBtn = document.createElement("span");
	deleteBtn.classList.add("delete-btn");
	deleteBtn.textContent = "Smazat";

	btnContainer.appendChild(editBtn);
	btnContainer.appendChild(document.createTextNode(" | "));
	btnContainer.appendChild(deleteBtn);
	newCard.appendChild(btnContainer);

	// Připojí novou kartu do kontejneru
	container.appendChild(newCard);

	// Připojení posluchačů pro editaci a mazání
	attachListeners(newCard);
}

// Funkce pro připojení posluchačů událostí pro editaci a mazání
function attachListeners(card) {
	const deletebtn = card.querySelector(".delete-btn");
	const editbtn = card.querySelector(".edit-btn");

	// Mazání položky
	deletebtn.addEventListener("click", () => {
		const isConfirmed = confirm("Jseš si jistej kámo?");
		if (isConfirmed) card.remove();
	});

	// Editace položky
	editbtn.addEventListener("click", () => {
		const h3 = card.querySelector("h3");
		const pContent = card.querySelector("p");

		// Pokud je card typu "datum" (tedy nemá <h3>), editujeme pouze <p>
		if (h3) {
			// Vytvoření vstupního pole pro titul (pro "day")
			const titleInput = document.createElement("input");
			titleInput.type = "text";
			titleInput.value = h3.textContent.trim();

			// Vytvoření vstupního pole pro obsah
			const contentInput = document.createElement("input");
			contentInput.type = "text";
			contentInput.value = pContent.textContent.trim();

			// Nahradí obsah karty vstupními poli
			card.innerHTML = "";
			card.appendChild(titleInput);
			card.appendChild(contentInput);
			titleInput.focus();

			// Uložení změn při stisknutí Enter
			contentInput.addEventListener("keydown", (e) => {
				if (e.key === "Enter") {
					const newTitle = titleInput.value;
					const newContent = contentInput.value;

					// Aktualizace karty s novým titulkem a obsahem
					card.innerHTML = `<h3>${newTitle}</h3><p>${newContent}</p><p class="btn"><span class="edit-btn">Upravit</span> | <span class="delete-btn">Smazat</span></p>`;
					attachListeners(card); // Znovu připojí posluchače
				}
			});
		} else {
			// Vytvoření vstupního pole pro obsah (pro "datum")
			const contentInput = document.createElement("input");
			contentInput.type = "text";
			contentInput.value = pContent.textContent.trim();

			// Nahradí obsah karty vstupním polem
			card.innerHTML = "";
			card.appendChild(contentInput);
			contentInput.focus();

			// Uložení změn při stisknutí Enter
			contentInput.addEventListener("keydown", (e) => {
				if (e.key === "Enter") {
					const newContent = contentInput.value;

					// Aktualizace karty s novým obsahem
					card.innerHTML = `<p>${newContent}</p><p class="btn"><span class="edit-btn">Upravit</span> | <span class="delete-btn">Smazat</span></p>`;
					attachListeners(card); // Znovu připojí posluchače
				}
			});
		}
	});
}

// Funkce pro zpracování formuláře
function handleFormSubmit(event, form, cardContainer, className) {
	event.preventDefault();
	const inputTitle = form.querySelector(
		"input[name=title], input[name=title2]"
	);
	const inputContent = form.querySelector(
		"input[name=content], input[name=content2]"
	);

	if (!inputTitle.value.trim() || !inputContent.value.trim()) return;

	// Vytvoření nové karty
	createNewCard(cardContainer, inputTitle.value, inputContent.value, className);

	// Vymazání inputů
	inputTitle.value = "";
	inputContent.value = "";
}

// První formulář
const form1 = document.querySelector("#day");
const cardContainer = document.querySelector("#allCards"); // Všechny karty v jednom seznamu
form1.addEventListener("submit", (event) =>
	handleFormSubmit(event, form1, cardContainer, "den")
);

// Druhý formulář
const form2 = document.querySelector("#date");
form2.addEventListener("submit", (event) =>
	handleFormSubmit(event, form2, cardContainer, "datum")
);
