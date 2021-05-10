

const firstRandomNmber=
Math.floor(Math.random()*6)+1

const firstDiceimage='images/d'+firstRandomNmber+'.png';
document.querySelectorAll
('img')[0].setAttribute ('src',firstDiceimage);


const secondRandomNmber=
Math.floor(Math.random()*6)+1

const secondDiceimage='images/d'+secondRandomNmber+'.png';
document.querySelectorAll
('img')[1].setAttribute ('src',secondDiceimage);


if (firstRandomNmber>secondRandomNmber)
{
  document.querySelector
  ('h1').innerHTML='Player 1 Won';
}

else if (firstRandomNmber<secondRandomNmber)
{
  document.querySelector
  ('h1').innerHTML='Player 2 Won';
}

else
{
  document.querySelector
  ('h1').innerHTML='It is a tie';
}
