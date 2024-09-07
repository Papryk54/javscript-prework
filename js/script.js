//Ruch komputera
function playgame(playerInput) {
	clearMessages();

	let randomNumber = Math.floor(Math.random() * 3 + 1);
	console.log("Wylosowana liczba to: " + randomNumber);

	let argComputerMove = getMoveName(randomNumber);

	//Ruch gracza

	// let playerInput = prompt(
	// 	"Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce."
	// );

	let argPlayerMove = getMoveName(playerInput);

	//Zmiana cyferek na słowa

	function getMoveName(argMoveId) {
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
	}

	//wyświetlenie wyniku

	displayResult(argComputerMove, argPlayerMove);

	function displayResult(argComputerMove, argPlayerMove) {
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
	}
}

function buttonClicked1() {
	playgame(1);
}

function buttonClicked2() {
	playgame(2);
}

function buttonClicked3() {
	playgame(3);
}

let rock = document.getElementById("play-rock");

rock.addEventListener("click", buttonClicked1);

let paper = document.getElementById("play-paper");

paper.addEventListener("click", buttonClicked2);

let scisspors = document.getElementById("play-scissors");

scisspors.addEventListener("click", buttonClicked3);
