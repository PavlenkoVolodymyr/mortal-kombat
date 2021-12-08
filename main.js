// Task #0
const player1 = {
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['hammer', 'sting', 'fist'],
  attack: function getMessage() {
    console.log(player1.name + 'Fight...')
  },
}

const player2 = {
  name: 'Kitana',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  weapon: ['sword', 'fist', 'dirk'],
  attack: function getMessage() {
    console.log(player2.name + 'Fight...')
  },
}

function createPlayer(playerClass, name, playerHp, player) {
  const $player = document.createElement('div')
  $player.classList.add(playerClass)

  const $progressbar = document.createElement('div')
  $progressbar.classList.add('progressbar')

  const $character = document.createElement('div')
  $character.classList.add('character')

  const $life = document.createElement('div')
  $life.classList.add('life ')
  $life.innerText = player.hp

  const $name = document.createElement('div')
  $name.classList.add('$name')

  const $img = document.createElement('img')
  $img.src = player.img

  $progressbar.appendChild($player)
  $character.appendChild($player)

  $life.appendChild($progressbar)
  $name.appendChild($progressbar)

  $img.appendChild($character)

  const $arenas = document.querySelector('div.arenas')
  $div.arenas.appendChild($player)

  document.querySelector('div.arenas').appendChild($player)
}

createPlayer('player1', 'Scorpion', 100)
createPlayer('player2', 'Kitana', 100)
