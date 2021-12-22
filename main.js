const $arenas = document.querySelector('.arenas');
const $formFight = document.querySelector('.control');
const $chat = document.querySelector('.chat');

const HIT = {
  head: 50,
  body: 30,
  foot: 25,
};
const ATTACK = ['head', 'body', 'foot'];
// `${date.getHours() +:+ date.getMinites}`
const LOGS = {
  start:
    'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
  end: [
    'Результат удара [playerWins]: [playerLose] - труп',
    '[playerLose] погиб от удара бойца [playerWins]',
    'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
  ],
  hit: [
    '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
    '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.',
    '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.',
    '[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
    '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.',
    '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.',
    '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.',
    '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.',
    '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.',
    '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.',
    '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.',
    '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.',
    '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.',
    '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.',
    '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
    '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.',
    '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
    '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.',
  ],
  defence: [
    '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.',
    '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.',
    '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
    '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.',
    '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.',
    '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
    '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
    '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
  ],
  draw: 'Ничья - это тоже победа!',
};

const player1 = {
  player: 1,
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['hammer', 'sting', 'fist'],
  elHP,
  changeHP,
  renderHP,
  attack,
};

const player2 = {
  player: 2,
  name: 'Kitana',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  weapon: ['sword', 'fist', 'dirk'],
  elHP,
  changeHP,
  renderHP,
  attack,
};

function attack() {
  console.log(this.name + ' ' + 'Fight...');
}

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

function elHP() {
  return document.querySelector('.player' + this.player + ' .life');
}

function changeHP(randomNumber) {
  this.hp -= randomNumber;

  if (this.hp <= 0) {
    this.hp = 0;
  }
}

// const getRandomNumber = (min = 1, max = 20) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

function renderHP() {
  this.elHP().style.width = this.hp + '%';
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

function getRandom(num) {
  return Math.ceil(Math.random() * num);
}

function createReloadButton() {
  const $reloadButtonDiv = createElement('div', 'reloadWrap');
  const $reloadButton = createElement('button', 'button');
  $reloadButton.innerText = 'Reload';

  $reloadButton.addEventListener('click', function () {
    window.location.reload();
  });

  $reloadButtonDiv.appendChild($reloadButton);
  $arenas.appendChild($reloadButtonDiv);
}

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

function enemyAttack() {
  // const length = ATTACK.length - 1;
  const hit = ATTACK[getRandom(3) - 1];
  const defence = ATTACK[getRandom(3) - 1];

  return {
    value: getRandom(HIT[hit]),
    hit,
    defence,
  };
}

function playerAttack() {
  const attack = {};

  for (let item of $formFight) {
    if (item.checked && item.name === 'hit') {
      attack.value = getRandom(HIT[item.value]);
      attack.hit = item.value;
    }

    if (item.checked && item.name === 'defence') {
      attack.defence = item.value;
    }

    item.checked = false;
  }

  return attack;
}

function showResult() {
  if (player1.hp === 0 || player2.hp === 0) {
    createReloadButton();
  }

  if (player1.hp === 0 && player1.hp < player2.hp) {
    $arenas.appendChild(playerWin(player2.name));
  } else if (player2.hp === 0 && player2.hp < player1.hp) {
    $arenas.appendChild(playerWin(player1.name));
  } else if (player1.hp === 0 && player2.hp === 0) {
    $arenas.appendChild(playerWin());
  }
}

const generateTimeString = time => (time < 10 ? `0${time}` : time);

const getTime = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const formattedDate = `${generateTimeString(hours)}:${generateTimeString(
    minutes,
  )}:${generateTimeString(seconds)}`;

  return formattedDate;
};

const generateLogs = (type, player1, player2, damage = 0) => {
  const text = type.includes('start', 'draw')
    ? LOGS[type]
    : LOGS[type][getRandom(0, LOGS[type].length - 1)];

  const formattedDate = getTime();

  let logMessage = '';

  switch (type) {
    case 'start':
      logMessage = text
        .replace('[time]', formattedDate)
        .replace('[player1]', player1.name)
        .replace('[player2]', player2.name);
      break;
    case 'end':
      logMessage = `${formattedDate} - ${text}`
        .replace('[playerWins]', player1.name)
        .replace('[playerLose]', player2.name);
      break;
    case 'hit':
      logMessage = `${formattedDate} - ${text} - ${damage} [${player2.hp}/100]`
        .replace('[playerKick]', player1.name)
        .replace('[playerDefence]', player2.name);
      break;
    case 'defence':
      logMessage = `${formattedDate} - ${text}`
        .replace('[playerDefence]', player1.name)
        .replace('[playerKick]', player2.name);
      break;
    default:
      logMessage = text;
  }

  $chat.inserAdjacentHTML('afterbegin', `<p>${logMessage}</p>`);
};

// function generateLogs(type, player1, player2) {
//   switch (generateLogs) {
//     case 'type, player1, player2':
//       const text = logs[type][getRandom(20) - 1]
//         .replace('[playerKick]', player1.name)
//         .replace('[playerDefence]', player2.name)
//         .replace('[player1]', player1.name)
//         .replace('[player2]', player2.name)
//         .replace('[time],'`${date.getHours() + ':' + date.getMinites}`);
//       return;
//       const st = `<p>${logs.start}<p>`;
//       const el = `<p>${text}<p>`;
//       const en = `<p>${logs.end}<p>`;
//       $chat.insertAdjacentHTML('afterbegin', el);
//       $chat.insertAdjacentHTML('beforebegin', st);
//       $chat.insertAdjacentHTML('afterend', en);
//   }
// }
// function generateLogs(type, player1, player2) {
//   const text = logs[type][getRandom(20) - 1]
// .replace('[playerKick]', player1.name)
// .replace('[playerDefence]', player2.name)
// .replace('[player1]', player1.name)
// .replace('[player2]', player2.name);
// .replace('[time],'`${date.getHours() + ':' + date.getMinites}`);
//   console.log(text);

//   const st = `<p>${logs.start}<p>`;
//   const el = `<p>${text}<p>`;
//   const en = `<p>${logs.end}<p>`;
//   $chat.insertAdjacentHTML('afterbegin', el);
//   $chat.insertAdjacentHTML('beforebegin', st);
//   $chat.insertAdjacentHTML('afterend', en);
// }

// $formFight.addEventListener('submit', function (e) {
//   e.preventDefault();
// const enemy = enemyAttack();
// const player = playerAttack();

//   if (player.defence !== enemy.hit) {
//     player1.changeHP(enemy.value);
//     player1.renderHP();
//     generateLogs('hit', player2, player1);
//   }

//   if (enemy.defence !== player.hit) {
//     player2.changeHP(player.value);
//     player2.renderHP();
//     generateLogs('hit', player1, player2);
//   }

//   showResult();
// });

$formFight.addEventListener('submit', e => {
  e.preventDefault();
  const enemy = enemyAttack();
  const attack = playerAttack();

  let damagePlayer1 = 0;
  let damagePlayer2 = 0;

  if (enemy.hit === attack.defence) {
    generateLogs('defence', player2, player1, damagePlayer1);
  } else {
    damagePlayer1 = enemy.value;

    player1.changeHP(damagePlayer1);
    player1.renderHP();

    generateLogs('hit', player2, player1, damagePlayer1);
  }
  if (attack.hit === enemy.defence) {
    generateLogs('defence', player1, player2, damagePlayer1);
  } else {
    damagePlayer2 = attack.value;

    player2.changeHP(damagePlayer2);
    player2.renderHP();

    generateLogs('hit', player1, player2, damagePlayer2);
  }
  showResult();
});

createPlayer('player1', player1);
createPlayer('player2', player2);
generateLogs('start', player1, player2);
