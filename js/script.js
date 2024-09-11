{
	//Ruch komputera
	function playgame(playerInput) {
		clearMessages();

		const randomNumber = Math.floor(Math.random() * 3 + 1);
		console.log("Wylosowana liczba to: " + randomNumber);

		//Zmiana cyferek na słowa

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

		//wyświetlenie wyniku

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

	const buttonClicked1 = function () {
		playgame(1);
	};

	const buttonClicked2 = function () {
		playgame(2);
	};

	const buttonClicked3 = function () {
		playgame(3);
	};

	let rock = document.getElementById("play-rock");

	rock.addEventListener("click", buttonClicked1);

	let paper = document.getElementById("play-paper");

	paper.addEventListener("click", buttonClicked2);

	let scisspors = document.getElementById("play-scissors");

	scisspors.addEventListener("click", buttonClicked3);
}
