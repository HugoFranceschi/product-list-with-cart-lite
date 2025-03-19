const buttonAcheter = document.querySelectorAll(".acheter");
const boxDivList = document.querySelectorAll(".box");

function createButtonBox() {
	const buttonAcheter = document.createElement("button");
	const imgAcheter = document.createElement("img");
	const pAjouter = document.createElement("p");

	buttonAcheter.classList.add("acheter");
	pAjouter.classList.add("ajouter");

	imgAcheter.src = "./Img/acheter.svg";
	imgAcheter.alt = "acheter";

	buttonAcheter.appendChild(imgAcheter);
	buttonAcheter.appendChild(pAjouter);

	return buttonAcheter;
}

function createButton() {
	const divElement = document.createElement("div");
	const buttonMoins = document.createElement("button");
	const buttonPlus = document.createElement("button");
	const spanELement = document.createElement("span");

	let counter = 1;

	divElement.classList.add("nombre");
	buttonMoins.classList.add("choix", "pading");
	buttonPlus.classList.add("choix");

	spanELement.textContent = "1";
	buttonMoins.textContent = "-";
	buttonPlus.textContent = "+";

	divElement.appendChild(buttonMoins);
	divElement.appendChild(spanELement);
	divElement.appendChild(buttonPlus);

	buttonMoins.addEventListener("click", () => {
		counter--;

		if (counter <= 0) {
			const btn = createButton();
			const btnBox = createButtonBox();

			divElement.replaceWith(btnBox, btn);
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
