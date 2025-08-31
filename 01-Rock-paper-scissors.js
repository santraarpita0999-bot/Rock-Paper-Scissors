const emojiMap = {
  Rock: "🪨",
  Paper: "📄",
  Scissors: "✂️"
};

//stroe data in storage
    let score = JSON.parse(localStorage.getItem
    ('score')) ||{
      wins:0,
      losses:0,
      ties:0
    };
    updateScore();

  function playgame(playerMove) {
  const computerMove = pickComputerMove(); // randomize computer move
  let result = '';

  if (playerMove === computerMove) {
    result = 'Tie.';
    score.ties++;
    document.querySelector('.result-emoji-display').textContent = '😐';
  } else if (
    (playerMove === 'Rock' && computerMove === 'Scissors') ||
    (playerMove === 'Paper' && computerMove === 'Rock') ||
    (playerMove === 'Scissors' && computerMove === 'Paper')
  ) {
    result = 'You win!';
    score.wins++;
    document.querySelector('.result-emoji-display').textContent = '😊';
  } else {
    result = 'You lose.';
    score.losses++;
    document.querySelector('.result-emoji-display').textContent = '😞';
  }

  document.querySelector('.result').textContent = result;

  document.querySelector('.move').innerHTML = 
  `You chose ${emojiMap[playerMove]}, computer chose ${emojiMap[computerMove]}`;
  updateScore();

    localStorage.setItem('score', JSON.stringify(score));
}

    function updateScore()
    {
      document.querySelector('.score').innerHTML = 
      `Wins: ${score.wins}, Losses: ${score.losses},Ties: ${score.ties}`;

    }

    function pickComputerMove()
    {
      const randomNumber = Math.random();
      
      let computerMove = ''; 

      if(randomNumber >= 0 && randomNumber < 1/3)
        {
          computerMove = 'Rock';
        }
      else if(randomNumber>1/3 && randomNumber<2/3)
        {
          computerMove = 'Paper';
        }
      else if(randomNumber>2/3 && randomNumber<1)
        {
          computerMove = 'Scissors';
        }
      return computerMove; 
    }