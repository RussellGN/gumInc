function clickNext(obj) {
	obj.nextElementSibling.click();
}

// image upload fields...join inc page as well as alamanacs & directories page

const imageFieldBtns = document.querySelectorAll(".image-upload-field button");
const imageInputs = document.querySelectorAll(".image-upload-field input");

if (imageFieldBtns) {
	imageFieldBtns.forEach((btn) => {
		btn.addEventListener("click", () => {
			if (!btn.previousElementSibling.classList.contains("d-none")) {
				btn.previousElementSibling.classList.add("d-none");
				btn.innerHTML = `<i class="bi bi-plus-circle"></i>`;
				return;
			} else {
				btn.nextElementSibling.click();
			}
		});
	});
}

if (imageInputs) {
	imageInputs.forEach((input) => {
		input.addEventListener("change", () => {
			const img = input.previousElementSibling.previousElementSibling;
			const [file] = input.files;
			if (file) {
				img.src = URL.createObjectURL(file);
				img.classList.remove("d-none");
				input.previousElementSibling.innerHTML = `<i class="bi bi-trash"></i>`;
			}
		});
	});
}
// ____________________________________________________________________________

// cart item quantity increment and decrement
let decreamentCopies = document.querySelector(".decreamentCopies");
let increamentCopies = document.querySelector(".increamentCopies");

if (increamentCopies) {
	increamentCopies.addEventListener("click", () => {
		document.querySelector(".copiesField").stepUp();
	});
}
if (decreamentCopies) {
	decreamentCopies.addEventListener("click", () => {
		document.querySelector(".copiesField").stepDown();
	});
}
// ______________________________________________________________________

// automatically close books affocanvas when a nav-link is clicked
let booksOffcanvasLinks = document.querySelectorAll(
	"#booksOffcanvas .nav-link"
);
let booksOffcanvasClose = document.querySelector("#booksOffcanvas .btn-close");

if (booksOffcanvasLinks) {
	booksOffcanvasLinks.forEach((linkItem) => {
		linkItem.addEventListener("click", () => booksOffcanvasClose.click());
	});
}

// saveinc btns and toasts
var saveIncToastTrigger = document.getElementById("saveIncToastBtn");
var saveIncToast = document.getElementById("saveIncToast");
var requestAudienceToastTrigger = document.getElementById(
	"requestAudienceToastBtn"
);
var requestAudienceToast = document.getElementById("requestAudienceToast");
let saveIncOptions = document.querySelectorAll(".saveIncOption");

saveIncOptions.forEach((btn) => {
	btn.addEventListener("click", () => {
		var toast = new bootstrap.Toast(saveIncToast);

		toast.show();
	});
});

if (saveIncToastTrigger) {
	saveIncToastTrigger.addEventListener("click", function () {
		var toast = new bootstrap.Toast(saveIncToast);

		toast.show();
	});
}
// ___________________________________________________________

// request audience toast and btn
if (requestAudienceToastTrigger) {
	requestAudienceToastTrigger.addEventListener("click", function () {
		var toast = new bootstrap.Toast(requestAudienceToast);

		toast.show();
	});
}
// ______________________________

// add book to cart...on store page
let addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
if (addToCartButtons) {
	addToCartButtons.forEach((btn) => {
		btn.addEventListener("click", () => {
			let addToCartToast = document.querySelector("#addToCartToast");
			let toast = new bootstrap.Toast(addToCartToast);
			toast.show();
		});
	});
}
