const buttonAcheter = document.querySelectorAll(".acheter");
const boxDivList = document.querySelectorAll(".box");

function createButtonBox() {
	const buttonMoins = document.createElement("button");
	const buttonPlus = document.createElement("button");
}

function createButton() {
	const divElement = document.createElement("div");
	const buttonMoins = document.createElement("button");
	const buttonPlus = document.createElement("button");
	const spanELement = document.createElement("span");

	let counter = 1;

	divElement.classList.add("nombre");
	buttonMoins.classList.add("choix");
	buttonPlus.classList.add("choix", "pading");

	spanELement.textContent = "1";
	buttonMoins.textContent = "-";
	buttonPlus.textContent = "+";

	divElement.appendChild(buttonMoins);
	divElement.appendChild(spanELement);
	divElement.appendChild(buttonPlus);

	buttonMoins.addEventListener("click", () => {
		counter--;

		if (counter <= 0) {
			divElement.replaceWith();
		}

		spanELement.textContent = counter;
	});

	buttonPlus.addEventListener("click", () => {
		counter++;

		spanELement.textContent = counter;
	});

	return divElement;
}

for (let i = 0; i < boxDivList.length; i++) {
	const boxDiv = boxDivList[i];
	const buttonBox = boxDiv.children[1];

	buttonBox.addEventListener("click", () => {
		const btn = createButton();

		boxDiv.replaceChild(btn, buttonBox);
	});
}
