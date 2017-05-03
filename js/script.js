// 1. Game board consists of 3x3 square grid.
// 2. There are 2 players.
// 3. Players take consecutive turns.
// 4. Each player uses his own symbol. Player1 = "X", Player2 = "O".
// 5. The current player must choose an empty square and mark it with his symbol.
// 6. A marked square becomes locked (cannot be chosen again by either player).
// 7. Skipping turns is not allowed.
// 8. The player off-turn must not interfere.
// 9. Game ends in Victory if player gets 3 of his symbols in a row, a column, or a diagonal.
// 10. Game ends in Draw if all squares are filled and no player has 3 of his symbols in a row, column, or diagonal.

var a1 = document.getElementById("a1"),
    a2 = document.getElementById("a2"),
    a3 = document.getElementById("a3"),
    b1 = document.getElementById("b1"),
    b2 = document.getElementById("b2"),
    b3 = document.getElementById("b3"),
    c1 = document.getElementById("c1"),
    c2 = document.getElementById("c2"),
    c3 = document.getElementById("c3"),
    squares = [a1, a2, a3, b1, b2, b3, c1, c2, c3],
    winStates = [
        ["a1", "a2", "a3"], ["a1", "b1", "c1"], ["a1", "b2", "c3"],
        ["b1", "b2", "b3"], ["a2", "b2", "c2"], ["a3", "b2", "c1"],
        ["c1", "c2", "c3"], ["a3", "b3", "c3"]
    ],
    squaresFilled = [];

function checkWinState() {
    for (var i = 0; i < winStates.length; i++) {
        if (squaresFilled === winStates[i]) {
            alert("You win!");
        }
    }
}

function mark() {
    var square = document.getElementById(event.srcElement.id);
    squaresFilled.push(square.id);
    square.textContent = "X";
    console.log(squaresFilled);
    checkWinState();
}