const nextBtns = document.querySelectorAll(".office-form-next");
const prevBtns = document.querySelectorAll(".office-form-prev");
const optionsType = document.querySelector(".options-type");
const optionsList = document.querySelector(".options-list");
const optionsPrice = document.querySelector(".options-price");
const numberOfTabs = 6;

nextBtns.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		const nextTab =
			Number(
				e.target.parentElement.parentElement.id.charAt(
					e.target.parentElement.parentElement.id.length - 1
				)
			) + 1;
		document.querySelector(`#office-tabs #toggle${nextTab}`).click();
	});
});

prevBtns.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		const prevTab =
			Number(
				e.target.parentElement.parentElement.id.charAt(
					e.target.parentElement.parentElement.id.length - 1
				)
			) - 1;
		document.querySelector(`#office-tabs #toggle${prevTab}`).click();
	});
});

document.addEventListener("DOMContentLoaded", (e) => {
	officeDetails = JSON.parse(localStorage.getItem("officeDetails"));

	let items = "";

	officeDetails.selectedItems.forEach((item) => {
		let container = `
		<mark class="mr-1 mb-1 c-rounded-1 px-2 d-inline-block">
			${item}
		</mark>
		`;

		items += container;
	});

	("Business Research Bureau");
	("Business Consultancy");
	optionsList.innerHTML = items;
	optionsType.innerHTML = officeDetails.DD
		? `You selected Due Dilligence(All) under <br/> ${officeDetails.block.replace("iNc", "")}`
		: `You selected the following under <br/> ${officeDetails.block.replace("iNc", "")} :`;
	optionsPrice.textContent = officeDetails.DD ? "$50" : "$29.99";

	console.log(officeDetails, optionsList, optionsType);
});
