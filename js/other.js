const edit = document.querySelector(".edit-btn");
const deletebtn = document.querySelector(".delete-btn");

deletebtn.addEventListener("click", (event) => {
	const li = event.target.closest("li");
	li.remove();
});

edit.addEventListener("click", (event) => {
	console.log("funguje to");
});

let hlavicka = document.querySelector("h1");
hlavicka.addEventListener("click", (event) => {
	hlavicka.classList.add("animate__animated", "animate__tada");
});
