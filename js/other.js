const edit = document.querySelector(".edit-btn");
const deletebtn = document.querySelector(".delete-btn");

deletebtn.addEventListener("click", (event) => {
	const li = event.target.closest("li");
	li.remove();
});

edit.addEventListener("click", (event) => {
	console.log("funguje to");
});
