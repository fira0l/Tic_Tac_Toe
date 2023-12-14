function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Please enter a custom name for each player.");
    return;
  }

  gameAreaElement.style.display = "block";
}
