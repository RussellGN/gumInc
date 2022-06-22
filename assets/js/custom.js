function clickNext(obj) {
	obj.nextElementSibling.click();
}

function previewImg(obj) {
	img = obj.previousElementSibling.previousElementSibling;
	const [file] = obj.files;
	if (file) {
		img.src = URL.createObjectURL(file);
		img.classList.remove("d-none");
	}
}

// imgInp = document.querySelector("#imgInp");
// blah = document.querySelector("#blah");
// imgInp.onchange = (evt) => {
// 	const [file] = imgInp.files;
// 	if (file) {
// 		blah.src = URL.createObjectURL(file);
// 	}
// };

function addOne(quantityInput) {
	currentValue = Number(quantityInput.value);
	if (currentValue != 999) {
		quantityInput.value = currentValue + 1;
	}
}
function subtractOne(quantityInput) {
	currentValue = Number(quantityInput.value);
	if (currentValue != 0) {
		quantityInput.value = currentValue - 1;
	}
}

accountMenuLinks = document.querySelectorAll(".account-menu-link");
accountMenuClose = document.getElementById("account-menu-close");

accountMenuLinks.forEach((el) => {
	el.onclick = function () {
		accountMenuClose.click();
	};
});

var addToCartToastTrigger = document.getElementById("addToCartToastBtn");
var addToCartToast = document.getElementById("addToCartToast");
if (addToCartToastTrigger) {
	addToCartToastTrigger.addEventListener("click", function () {
		var toast = new bootstrap.Toast(addToCartToast);

		toast.show();
	});
}
