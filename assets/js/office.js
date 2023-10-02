const selectables = document.querySelectorAll(".selectable");
const selectAlls = document.querySelectorAll(".select-all");
const officeProceed = document.querySelector(".office-proceed");
let selectedItems = [];
let details = {
  // block: null,
  DD: false,
};
// let currentBlock = null;

if (selectables) {
  selectables.forEach((selectable) => {
    selectable.addEventListener("click", (e) => {
      if (e.target.classList.contains("selected")) {
        // then deselect it
        e.target.classList.remove("selected");
        selectedItems = selectedItems.filter(
          (item) => item !== e.target.innerText.trim().toLowerCase()
        );
      } else {
        // then select it
        e.target.classList.add("selected");
        selectedItems.push(e.target.innerText.trim().toLowerCase());
      }
      // let otherBlock = e.target.parentElement.id === "block1" ? "block2" : "block1";
      // disableOtherBlock(otherBlock);
      console.log(selectedItems);
      toggleProceed();
      // checkLimit();
    });
  });
}

if (selectAlls) {
  selectAlls.forEach((selectAll) => {
    selectAll.addEventListener("mouseover", (e) => {
      //   let parentElemId = selectAll.classList.contains("select-all-1")
      //     ? "parent-elem-1"
      //     : "parent-elem-2";
      //   let parentElem = document.querySelector(`#${parentElemId}`);
      const preCursorIcon = document.querySelector(
        ".bi-cursor-fill:first-of-type"
      );
      const cursorIcon = document.querySelector(".bi-cursor-fill:last-of-type");
      cursorIcon.classList.remove("text-dark");
      cursorIcon.classList.add("text-success");
      [cursorIcon, preCursorIcon].forEach(
        (icon) => (icon.style.transform = "rotate(-90deg) scale(1.1)")
      );
    });

    selectAll.addEventListener("mouseout", (e) => {
      //   let parentElemId = selectAll.classList.contains("select-all-1")
      //     ? "parent-elem-1"
      //     : "parent-elem-2";
      //   let parentElem = document.querySelector(`#${parentElemId}`);
      const preCursorIcon = document.querySelector(
        ".bi-cursor-fill:first-of-type"
      );
      const cursorIcon = document.querySelector(".bi-cursor-fill:last-of-type");
      cursorIcon.classList.remove("text-success");
      cursorIcon.classList.add("text-dark");
      [cursorIcon, preCursorIcon].forEach(
        (icon) => (icon.style.transform = "rotate(-90deg) scale(1)")
      );
    });

    selectAll.addEventListener("click", (e) => {
      //   let block = selectAll.classList.contains("select-all-1")
      //     ? "block1"
      //     : "block2";

      //   const targetSelectables = document.querySelectorAll(
      //     ` #${block} .selectable`
      //   );
      // const targetSelectables =
      // 	selectAll.parentElement.parentElement.nextElementSibling.querySelectorAll(
      // 		".selectable"
      // 	);

      let allSelected = true;
      //  for (let s of targetSelectables) {
      for (let s of selectables) {
        if (!s.classList.contains("selected")) {
          allSelected = false;
          break;
        }
      }

      if (!allSelected) {
        selectables.forEach((selectable) => {
          if (!selectable.classList.contains("selected")) {
            // then select it
            selectable.classList.add("selected");
            selectedItems.push(selectable.innerText.trim().toLowerCase());
          }
        });
      } else {
        selectables.forEach((selectable) => {
          selectable.classList.remove("selected");
          selectedItems = selectedItems.filter(
            (item) => item !== selectable.innerText.trim().toLowerCase()
          );
        });
      }
      //   let otherBlock =
      //     targetSelectables[0].parentElement.id === "block1"
      //       ? "block2"
      //       : "block1";
      //   disableOtherBlock(otherBlock);

      console.log(selectedItems);
      toggleProceed();
    });
  });
}

if (officeProceed) {
  officeProceed.addEventListener("click", (e) => {
    // e.preventDefault();
    localStorage.setItem(
      "officeDetails",
      JSON.stringify({ ...details, selectedItems })
    );

    // open(window.location.origin + "./office-form.html", "_self");
  });
}

function toggleProceed() {
  if (selectedItems.length > 0) {
    officeProceed.classList.remove("d-none");

    // let enabledBlock = document.querySelector(".block-screen.d-none");
    // let enabledBlockName =
    // 	enabledBlock.parentElement.id === "block1"
    // 		? "Business Research Bureau iNc"
    // 		: "Business Consultancy iNc";

    // details.block = enabledBlockName;
    details.DD = false;

    // let items = enabledBlock.parentElement.querySelectorAll(".selectable");
    if (selectedItems.length > 5 && selectedItems.length < selectables.length) {
      officeProceed.innerHTML =
        "<i class='bi bi-exclamation-triangle-fill me-2'></i>maximum is 5";
      officeProceed.classList.add("disabled");
    } else if (selectedItems.length === selectables.length) {
      details.DD = true;
      officeProceed.innerHTML =
        'Proceed With All<i class="bi bi-star ms-2"></i>';
      officeProceed.classList.remove("disabled");
    } else {
      officeProceed.innerHTML =
        'Proceed<i class="bi bi-arrow-right-short ms-2"></i>';
      officeProceed.classList.remove("disabled");
    }
  } else {
    // details.block = null;
    details.DD = false;
    officeProceed.classList.add("d-none");
    // enableAllBlocks();
  }
  console.log(details);
}
// function disableOtherBlock(blockID) {
// 	let parentElemId = blockID === "block1" ? "parent-elem-1" : "parent-elem-2";
// 	let parentElem = document.querySelector(`#${parentElemId}`);

// 	blockScreen = parentElem.querySelector(".block-screen");
// 	blockScreen.classList.remove("d-none");

// 	parentElem.querySelectorAll(".select-all").forEach((elem) => elem.classList.add("disabled"));
// }
// function enableAllBlocks() {
// 	blockScreens = document.querySelectorAll(`.block-screen`);

// 	blockScreens.forEach((screen) => {
// 		screen.classList.add("d-none");
// 		selectAlls.forEach((elem) => {
// 			if (elem.classList.contains("disabled")) {
// 				elem.classList.remove("disabled");
// 			}
// 		});
// 	});
// }

// function checkLimit() {
// 	if (selectedItems.length === 3) {
// 		selectables.forEach((selectable) => {
// 			if (!selectable.classList.contains("selected")) {
// 				selectable.classList.add("disabled");
// 			}
// 		});
// 	}
// }
