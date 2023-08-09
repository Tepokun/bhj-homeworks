const modal = document.getElementById("subscribe-modal");
const allCookie = Object.fromEntries(
	document.cookie
		.split(";")
		.map(cookie => cookie.trim().split("="))
);

if (!allCookie.wasShown) {
	modal.classList.add("modal_active");
}

modal.getElementsByClassName("modal__close")[0]
	.addEventListener("click", () => {
		modal.classList.remove("modal_active");
		document.cookie = "wasShown=true";
	});