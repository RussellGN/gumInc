const optionsType = document.querySelector(".options-type");
const optionsList = document.querySelector(".options-list");
const optionsPrice = document.querySelector(".options-price");

document.addEventListener("DOMContentLoaded", (e) => {
  officeDetails = JSON.parse(localStorage.getItem("officeDetails"));
  console.log(officeDetails);

  let items = "";

  officeDetails.selectedItems.forEach((item) => {
    let container = `
		<mark class="mr-1 mb-1 c-rounded-1 px-2 d-inline-block">
			${item}
		</mark>
		`;

    items += container;
  });

  optionsList.innerHTML = items;
  optionsType.innerHTML = officeDetails.DD
    ? "You selected Due Dilligence(All)"
    : "You selected the following under";
  optionsPrice.textContent = officeDetails.DD ? "£80" : "£35";
});
