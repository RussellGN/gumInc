const dropArea = document.querySelector(".drop-area");
const label = document.querySelector(".file-label");
const fileElem = document.querySelector(".file-elem");
const reSelectFiles = document.querySelector(".reselect-files");

// file elem event listener
if (fileElem) {
	fileElem.addEventListener("change", (e) => handleFiles(e.target.files));
}

// label event listener
if (label) {
	label.addEventListener(
		"click",
		(e) => {
			fileElem.click();
		},
		false
	);
}

if (dropArea) {
	// prevent defaults
	const events = ["dragenter", "dragover", "dragleave", "drop"];

	events.forEach((eventName) => {
		document.body.addEventListener(eventName, (e) => {
			e.preventDefault();
			e.stopPropagation();
		});
		dropArea.addEventListener(
			eventName,
			(e) => {
				e.preventDefault();
				e.stopPropagation();
			},
			false
		);
	});

	// highlight drop area
	["dragenter", "dragover"].forEach((eventName) => {
		dropArea.addEventListener(
			eventName,
			() => {
				dropArea.classList.add("highlight");
			},
			false
		);
	});

	// un-highlight drop area
	["dragleave", "drop"].forEach((eventName) => {
		dropArea.addEventListener(
			eventName,
			() => {
				dropArea.classList.remove("highlight");
			},
			false
		);
	});

	// drop event listener
	dropArea.addEventListener(
		"drop",
		(e) => {
			let data = e.dataTransfer;
			let files = data.files;

			handleFiles(files);
		},
		false
	);
}

if (reSelectFiles) {
	reSelectFiles.addEventListener("click", (e) => {
		fileElem.value = "";
		fileElem.type = "file";
		dropArea.querySelector(".div1").classList.add("d-none");
		dropArea.querySelector(".div2").classList.remove("d-none");
	});
}

// file handler
function handleFiles(files) {
	dropArea.querySelector(".div2").classList.add("d-none");
	const div1 = dropArea.querySelector(".div1");

	div1.classList.remove("d-none");
	div1.querySelector("p").textContent = `${files.length} file${
		files.length > 1 ? "s" : ""
	} ready for upload`;

	console.log(files);
}
