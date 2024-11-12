function handleClick(playerHands) {
  const computerHandsList = ['グー', 'チョキ', 'パー'];
  const playerHandsList = ['グー', 'チョキ', 'パー'];
  const randomNumForHand = Math.floor(Math.random() * 3);

  //勝ち負けの判定
  if (randomNumForHand === playerHands) {
    result = 'あいこで....';
  } else if (playerHands === 0 && randomNumForHand === 1) {
    result = `あなたの<span class="result-win">【勝ち】</span>`;
  } else if (playerHands === 1 && randomNumForHand === 2) {
    result = `あなたの<span class="result-win">【勝ち】</span>`;
  } else if (playerHands === 2 && randomNumForHand === 0) {
    result = `あなたの<span class="result-win">【勝ち】</span>`;
  } else {
    result = `あなたの<span class="result-lose">【負け】</span>`;
  }

  //結果を表示
  const firstText = document.querySelector('.firstText');
  firstText.style.display = 'none';
  document.getElementById('computer').src = './images/hand_' + randomNumForHand + '.png';
  document.getElementById('player').src = './images/hand_' + playerHands + '.png';
  document.getElementById('resultComputer').innerHTML =
    playerHandsList[playerHands] + 'を選択しました。ジャンケンの結果は・・・？';
  window.setTimeout(() => {
    document.getElementById('resultText').innerHTML = '相手は' + '【' + computerHandsList[randomNumForHand] + '】';
    window.setTimeout(() => {
      document.getElementById('resultPlayer').innerHTML = result;
    }, 500);
    document.getElementById('resultPlayer').innerHTML = '';
  }, 800);
}
