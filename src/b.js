console.log('I am b.js!');

// B.1 - Wyświetl na stronie sumę goli strzelonych przez graczy
b1 = () => {
    const goals = document.querySelectorAll('tr > td:last-child');
    const body = document.querySelector('body')
    const counter = document.createElement('div');
    counter.setAttribute('id','goals-count');
    counter.innerText='licznik goli';
    body.appendChild(counter);

    // let count = 0;
    // goals.forEach((goalNumber) => {
    //   count += parseInt(goalNumber.innerText);
    // });
    const arr = Array.from(goals);
    const count = arr.reduce((result, goal) => {
      return result += parseInt(goal.innerText);
    }, 0);
  
    document.querySelector('#goals-count').innerText = 'Sum of goals = ' + count;
  }
// B.2 - Zaznacz gracza z największą ilością goli ustawiając tło na zielone

b2 = () => {
    const players = document.querySelectorAll('tr');
  
    let max = 0;
    let bestPlayer = players[0];
  
    players.forEach((player) => {
      const goalNumber = parseInt(player.lastElementChild.innerText);
      if (goalNumber > max) {
        max = goalNumber;
        bestPlayer = player;
      }
    });
  
    bestPlayer.style.backgroundColor = 'green';
  }
// B.3 - Zaznacz gracza z najmniejszą ilością goli ustawiając tło na czerwone
b3 = () => {
    const players = document.querySelectorAll('tr');
  
    let min = parseInt(document.querySelectorAll('tr')[1].lastElementChild.innerText);
    let worstPlayer = players[0];
  
    players.forEach((player) => {
      const goalNumber = parseInt(player.lastElementChild.innerText);
      if (goalNumber <= min) {
        min = goalNumber;
        worstPlayer = player;
      }
    });
  
    worstPlayer.style.backgroundColor = 'red';
  }
// B.4 - Posortuj i wyświetl graczy po id

b4 = () => {
    const players = Array.from(document.querySelectorAll('tr'));
    const playersSorted = players.sort((playerA, playerB) => {
      const aId = parseInt(playerA.dataset.id);
      const bId = parseInt(playerB.dataset.id);
      return aId > bId ? 1 : -1;
    });
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    playersSorted.forEach((player) => {
        tbody.appendChild(player);
      });
  }
// B.5 - Posortuj i wyświetl graczy po cenie z data-atrybutu
b5 = () => {
    const players = Array.from(document.querySelectorAll('tr'));
    const playersSorted = players.sort((playerA, playerB) => {
      const aId = parseInt(playerA.dataset.price);
      const bId = parseInt(playerB.dataset.price);
      return aId > bId ? 1 : -1;
    });
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    playersSorted.forEach((player) => {
        tbody.appendChild(player);
      });
  }
// B.6 - Usuń graczy z ceną wyższą nić 60 m USD

b6 = () => {
   const tableBody = document.querySelector('tbody');
   const players = document.querySelectorAll('tr');

   players.forEach((player) => {

   if (parseInt(player.dataset.price) > 60) {
       tableBody.removeChild (player)
   }
   });
}

// B.7 - Dodaj kolumnę zawierającą cenę gracza

b7 = () => {
  
    const tr = document.querySelectorAll('tbody > tr');
    const header = document.querySelectorAll('tr')[0]

    tr.forEach((row) => { 

        const priceColumn = document.createElement('td');
        priceColumn.innerText = row.dataset.price;
    
        row.appendChild(priceColumn);
    }) 

    const headerColumn = document.createElement('th');
        headerColumn.innerText = 'price';
        header.appendChild(headerColumn);
  }

// B.8 - Zostaw tylko graczy z PSG na liście

b8 = () => {
    const tableBody = document.querySelector('tbody');
    const players = document.querySelectorAll('tbody > tr');
    
 
   players.forEach((player) => {
    const team = player.querySelectorAll('td')[2];
 
    if (team.innerText !== 'PSG') {
        tableBody.removeChild(player)
    }
   });
 }
// B.9 - Dodaj do nazwy klubu ikonkę klubu
// B.10 - wyświetl na stronie nazwę najlepszego gracza
// B.11 - wyświetl na stronie nazwę gracza najdroższego
// B.12 - wyświetl na stronie gracza z najlepszym stosunkiem ceny do strzelonych bramek
