const $arenas = document.querySelector('div.arenas');
const $randomButton = document.querySelector('.button');

const player1 = {
  player: 1,
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['hammer', 'sting', 'fist'],
  attack: function () {
    console.log(player1.name + '' + 'Fight...');
  },
};

const player2 = {
  player: 2,
  name: 'Kitana',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  weapon: ['sword', 'fist', 'dirk'],
  attack: function () {
    console.log(player2.name + '' + 'Fight...');
  },
};

function createElement(tag, className) {
  const $tag = document.createElement(tag);
  if (className) {
    $tag.classList.add(className);
  }

  return $tag;
}

function createPlayer(playerObj) {
  const $player = createElement('div', 'player' + playerObj.player);
  const $progressbar = createElement('div', 'progressbar');
  const $character = createElement('div', 'character');
  const $life = createElement('div', 'life');
  const $name = createElement('div', 'name');
  const $img = createElement('img');

  $life.style.width = '100%';
  $life.innerText = playerObj.hp + '%';
  $name.innerText = playerObj.name;

  $img.src = playerObj.img;

  $player.appendChild($progressbar);
  $player.appendChild($character);

  $progressbar.appendChild($life);
  $progressbar.appendChild($name);

  $character.appendChild($img);

  return $player;
}

function createReloadButton() {
  const $reloadWrap = createElement('div', 'reloadWrap');
  const $button = createElement('button', 'button');

  $button.innerText = 'Restart';

  $reloadWrap.appendChild($button); // это задание походу я правильно сделал?
}

function changeHP(player) {
  // const $playerLife = document.querySelector(
  //   '.player' + player.player + ' .life',
  // );
  player.hp -= randomHp();

  if (player.hp <= 0) {
    player.hp = 0;
  }

  $playerLife.style.width = player.hp + '%'; // 'это надо удалить?
}

function elHP(player) {
  const $playerLife = document.querySelector(
    '.player' + this.player + ' .life',
  );
  return $playerLife;
}

function renderHP() {
  $playerLife.style.width = this.hp + '%'; // сомневаюсь что это правильно :-)
}

function playerWin(name) {
  const $loseTitle = createElement('div', 'loseTitle');
  if (name) {
    $loseTitle.innerText = name + ' wins';
  } else {
    $loseTitle.innerText = 'draw';
  }

  return $loseTitle;
}

function randomHp() {
  return Math.ceil(Math.random() * 20);
}

$randomButton.addEventListener('click', function () {
  console.log('####: Click');
  changeHP(player1);
  changeHP(player2);

  if (player1.hp === 0 || player2.hp === 0) {
    $randomButton.disabled = true;
  }
  if (player1.hp === 0 && player1.hp < player2.hp) {
    $arenas.appendChild(playerWin(player2.name));
  } else if (player2.hp === 0 && player2.hp < player1.hp) {
    $arenas.appendChild(playerWin(player1.name));
  } else if (player1.hp === 0 && player2.hp === 0) {
    $arenas.appendChild(playerWin());
  }
});

// $button.addEventListener('click', function () {
//   return window.location.reload();
// });    // это повесить клик я так понял вот так вот ?

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
