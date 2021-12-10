// Task #0
const player1 = {
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['hammer', 'sting', 'fist'],
  attack: function () {
    console.log(player1.name + '' + 'Fight...')
  },
}

const player2 = {
  name: 'Kitana',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  weapon: ['sword', 'fist', 'dirk'],
  attack: function () {
    console.log(player2.name + '' + 'Fight...')
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
  $life.classList.add('life')
  $life.style.width = '100%'
  $life.innerText = playerHp + '%'

  const $name = document.createElement('div')
  $name.classList.add(name)
  $name.innerText = player.name

  const $img = document.createElement('img')
  $img.src = player.img

  $player.appendChild($progressbar)
  $player.appendChild($character)

  $progressbar.appendChild($life)
  $progressbar.appendChild($name)

  $character.appendChild($img)

  const $arenas = document.querySelector('div.arenas')
  $arenas.appendChild($player)

  console.log(playerClass)
}

createPlayer('player1', 'Scorpion', 100, player1)
createPlayer('player2', 'Kitana', 100, player1)
