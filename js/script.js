{
	function playgame(playerInput) {
		clearMessages();

		//const randomNumber = Math.floor(Math.random() * 3 + 1);
		const roundingRange = 3
		const roundingOffset = 1
		const rounding = Math.random() * roundingRange + roundingOffset;
		const randomNumber = Math.floor(rounding);

		console.log("Wylosowana liczba to: " + randomNumber);

		//Changing numbers to moves

		const getMoveName = function (argMoveId) {
			if (argMoveId == 1) {
				return "kamień";
			}
			if (argMoveId == 2) {
				return "papier";
			}
			if (argMoveId == 3) {
				return "nożyce";
			} else {
				printMessage("Nie znam ruchu o id " + argMoveId + ".");
				return "nieznany ruch";
			}
		};

		const argComputerMove = getMoveName(randomNumber);

		const argPlayerMove = getMoveName(playerInput);

		//displying results

		const displayResult = function (argComputerMove, argPlayerMove) {
			printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove);

			if (argComputerMove == "kamień" && argPlayerMove == "papier") {
				printMessage("Ty wygrywasz!");
			} else if (argComputerMove == "kamień" && argPlayerMove == "kamień") {
				printMessage("Remis!");
			} else if (argComputerMove == "papier" && argPlayerMove == "nożyce") {
				printMessage("Ty wygrywasz!");
			} else if (argComputerMove == "papier" && argPlayerMove == "papier") {
				printMessage("Remis!");
			} else if (argComputerMove == "nożyce" && argPlayerMove == "kamień") {
				printMessage("Ty wygrywasz!");
			} else if (argComputerMove == "nożyce" && argPlayerMove == "nożyce") {
				printMessage("Remis!");
			} else {
				printMessage("Tym razem przegrywasz :(");
			}
		};
		displayResult(argComputerMove, argPlayerMove);
	}

	const rockButton = function () {
		playgame(1);
	};

	const paperButton = function () {
		playgame(2);
	};

	const scissorsButton = function () {
		playgame(3);
	};

	let rock = document.getElementById("play-rock");

	rock.addEventListener("click", rockButton);

	let paper = document.getElementById("play-paper");

	paper.addEventListener("click", paperButton);

	let scissors = document.getElementById("play-scissors");

	scissors.addEventListener("click", scissorsButton);
}
