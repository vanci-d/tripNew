const form = document.querySelector("form");
const inputTitle = form.querySelector("input[name=title]");
const inputContent = form.querySelector("input[name=content]");
const cardContainer = document.querySelector(".cards ul");

function createNewCard(container, title, text) {
	let newCard = document.createElement("li");

	newCard.innerHTML = `
		<h3>${title}</h3>
		<p>${text}</p>
	`;

	container.appendChild(newCard);
}

form.addEventListener("submit", (event) => {
	// pointa formularu je odoslat jeho udaje na dalsie spracovanie
	// cize podobne ako link, za normalnych okolnosti po odoslani formularu
	// prehliadac skoci na inu web adresu... ak tomu chces zabranit:
	event.preventDefault();

	// ak nemame title alebo content, koncime
	if (!inputTitle.value.trim() || !inputContent.value.trim()) return;

	// vytvor novy card element [ funkcia je v utilities.json ]
	createNewCard(cardContainer, inputTitle.value, inputContent.value);

	// premaz inputy
	inputTitle.value = "";
	inputContent.value = "";

	// nastav sa do title inputu
	inputTitle.focus();
});
