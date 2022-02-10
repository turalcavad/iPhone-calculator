const inputValue = document.querySelector(".input-screen-text-value");

//buttons
const equalButton = document.querySelector("#equal-button");
const numberButtons = document.querySelectorAll(".button-numbers");
const deleteButton = document.querySelector("#delete-button");

//operation buttons
const sumButton = document.querySelector("#sum-button");
const operationButton = document.querySelectorAll(".operation-button");
const remainderButton = document.querySelector("#remainder-button");
const negativeButton = document.querySelector("#negative-button");

const currentInput = document.querySelector(".current-input");
//variables
let inputs = [];
let currentInputArr = [];
let operationValue = "";
let operationCounter = 0;
let operationCounter2 = 0;

// equalButton.forEach((button) => {
// 	button.addEventListener("click", function (e) {
// 		inputs.push(parseFloat(inputValue.textContent));

// 		console.log("clicked");
// 		if (inputs.length > 1) {
// 			switch (operationValue) {
// 				case "+":
// 					inputValue.textContent = inputs[0] + inputs[1];
// 					inputs = [];
// 					break;
// 				case "-":
// 					inputValue.textContent = inputs[0] - inputs[1];
// 					inputs = [];

// 					break;
// 				case "X":
// 					inputValue.textContent = inputs[0] * inputs[1];
// 					inputs = [];

// 					break;
// 				case "÷":
// 					inputValue.textContent = inputs[0] / inputs[1];
// 					inputs = [];

// 				default:
// 					break;
// 			}
// 		}
// 	});
// });

//functions
const equalFunc = function () {
	inputs.push(parseFloat(inputValue.textContent));

	if (inputs.length > 1) {
		operationCounter2++;
		switch (operationValue) {
			case "+":
				inputValue.textContent = inputs[0] + inputs[1];
				inputs = [];
				operationCounter = 0;

				break;
			case "-":
				inputValue.textContent = inputs[0] - inputs[1];
				inputs = [];
				operationCounter = 0;

				break;
			case "X":
				inputValue.textContent = inputs[0] * inputs[1];
				inputs = [];
				operationCounter = 0;

				break;
			case "÷":
				inputValue.textContent = inputs[0] / inputs[1];
				inputs = [];
				operationCounter = 0;

			default:
				break;
		}
	}
};

const resetCalc = function () {
	currentInput.style.display = "none";

	inputValue.textContent = "0";
	inputs = [];
	operationCounter = 0;
	operationCounter2 = 0;
};

const negativeNumber = function () {
	inputValue.textContent = -1 * inputValue.textContent;
};

numberButtons.forEach((button) =>
	button.addEventListener("click", function (e) {
		currentInput.style.display = "none";

		if (inputValue.textContent.length >= 1 && inputValue.textContent === "0") {
			inputValue.textContent = "";
		}
		if (operationCounter2 >= 2 && inputs.length == 0) {
			resetCalc();
			inputValue.textContent = "";

			return (inputValue.textContent += e.target.textContent);
		}

		inputValue.textContent += e.target.textContent;
		console.log(parseFloat(inputValue.textContent));
	})
);

//operation functions
operationButton.forEach((button) =>
	button.addEventListener("click", function (e) {
		currentInput.style.display = "none";

		operationCounter2++;

		if (operationCounter == 1) {
			inputs.push(parseFloat(inputValue.textContent));
			operationValue = e.target.textContent;

			equalFunc();
			operationCounter = 0;
			return;
		}
		if (inputs.length > 2) {
			inputs[0] = inputs[inputs.length - 1];
			inputs.pop();
			inputs.pop();
		}

		inputs.push(parseFloat(inputValue.textContent));
		currentInputArr = [...inputs];

		inputValue.textContent = "";
		if (operationCounter == 0) {
			currentInput.style.display = "inline";
			currentInput.textContent = currentInputArr[0];
		}
		operationValue = e.target.textContent;
		operationCounter++;
	})
);

remainderButton.addEventListener("click", function () {
	inputs.push(parseFloat(inputValue.textContent));

	if ((inputs.length = 1)) {
		inputValue.textContent = inputs[0] / 100;
		inputs[0] = inputValue.textContent;
	}
});

//button events

deleteButton.addEventListener("click", resetCalc);
equalButton.addEventListener("click", equalFunc);
negativeButton.addEventListener("click", negativeNumber);
