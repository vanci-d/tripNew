// const edit = document.querySelector(".edit-btn");
// const deletebtn = document.querySelector(".delete-btn");

// deletebtn.addEventListener("click", (event) => {
// 	const li = event.target.closest("li");
// 	li.remove();
// });

// edit.addEventListener("click", (event) => {
// 	console.log("funguje to");
// });

// const deletebtns = document.querySelectorAll(".delete-btn");
// deletebtns.forEach((deletebtn) => {
// 	deletebtn.addEventListener("click", (event) => {
// 		const li = event.target.closest("li");
// 		li.remove();
// 	});
// });

const headings = document.querySelectorAll("h1");
headings.forEach((heading) => {
	heading.addEventListener("click", () => {
		heading.classList.add("animate__animated", "animate__tada");
		//odebrani animace
		heading.addEventListener(
			"animationend",
			() => {
				heading.classList.remove("animate__animated", "animate__tada");
			},
			{ once: true }
		);
	});
});
