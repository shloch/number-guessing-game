import gameFactory from './game';
import messageModule from './messageModule';
import smileyModule from './smileyModule';

const submitBtn = document.querySelector('button');
const flashDiv = document.querySelector('div[id="flash-infos"]');
const smileyBlk = document.querySelector('div[id="smiley-img"]');


const game = gameFactory();

function beginsGame() {
  const inputNum = document.querySelector('input[type="number"]').value;
  if (game.isNumberCorrect(+inputNum)) {
    flashDiv.innerHTML = messageModule.success();
    smileyBlk.innerHTML = smileyModule.success();
  } else if (+inputNum > game.getMagicNumber() + 100) {
    flashDiv.innerHTML = messageModule.poor_above();
    smileyBlk.innerHTML = smileyModule.poor_above();
  } else if (+inputNum < game.getMagicNumber() - 100) {
    flashDiv.innerHTML = messageModule.poor_below();
    smileyBlk.innerHTML = smileyModule.poor_below();
  } else if (+inputNum > game.getMagicNumber()) {
    flashDiv.innerHTML = messageModule.fail_above();
    smileyBlk.innerHTML = smileyModule.fail();
  } else if (+inputNum < game.getMagicNumber()) {
    flashDiv.innerHTML = messageModule.fail_below();
    smileyBlk.innerHTML = smileyModule.fail();
  }
}

submitBtn.addEventListener('click', beginsGame, false);
