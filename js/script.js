const form = document.querySelector("#day");
const inputTitle = form.querySelector("input[name=title]");
const inputContent = form.querySelector("input[name=content]");
const cardContainer = document.querySelector(".cards ul");

// const formDatum = document.querySelector("#datum");
// const jmenoDne = form.querySelector("input[name=jmenodne]");
// const datum = form.querySelector("input[name=datum]");
// const cardContainerDatum = document.querySelector(".cards ul");

function createNewCard(container, title, text) {
	let newCard = document.createElement("li");

	newCard.innerHTML = `
		<h3>${title}</h3>
		<p>${text}</p>
	`;

	container.appendChild(newCard);
	newCard.classList.add("den");
}

form.addEventListener("submit", (event) => {
	event.preventDefault();

	if (!inputTitle.value.trim() || !inputContent.value.trim()) return;

	// vytvor novy card element [ funkcia je v utilities.json ]
	createNewCard(cardContainer, inputTitle.value, inputContent.value);

	// premaz inputy
	inputTitle.value = "";
	inputContent.value = "";

	// nastav sa do title inputu
	inputTitle.focus();
});
