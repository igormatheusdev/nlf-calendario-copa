function createGame(player1, hour, player2) {
  return `
  <li>
              <img src="./assets/logo-${player1}.svg" alt="${player1}" />
              <strong>${hour}</strong>
              <img src="./assets/logo-${player2}.svg" alt="${player2}" />
            </li>
  
  `
}

function createCard(date, day, games) {
  return `
  <div class="card">
          <h2>${date}<span>${day}</span></h2>
          <ul>
          ${games}
          </ul>
        </div>
  `
}

document.querySelector("#cards").innerHTML =

  createCard("24/11", "quinta", createGame('brasil', '16:00', 'Serbia')) +
  createCard("28/11", "segunda", createGame('switzerland', '13:00', 'brasil')) +
  createCard("02/12", "sexta", createGame('brasil', '16:00', 'camerron'))


