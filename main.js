const roll1 = document.querySelector('.roll1');
const roll2 = document.querySelector('.roll2');
const score1 = document.querySelector('.score1');
const score2 = document.querySelector('.score2');
const dice1 = document.querySelector('.dice1');
const dice2 = document.querySelector('.dice2');
const reset = document.querySelector('.reset');
const win = document.querySelector('h1');
let res = 0;
let scorex=0;

const prep = () => {
    score1.innerHTML = '0';
    score2.innerHTML = '0';
    reset.classList.add('h');
    win.classList.add('h');
    roll1.classList.remove('op');
    roll2.classList.remove('op');
    res = 0;
}

const check = () =>{
    if (res === 2){
        win.classList.remove('h');
        reset.classList.remove('h');
        if (parseInt(score1.innerHTML, 10) > parseInt(score2.innerHTML, 10)){
            win.innerHTML = '1. Oyuncu Kazandı';
        }else if(parseInt(score1.innerHTML, 10) < parseInt(score2.innerHTML, 10)){
            win.innerHTML = '2. Oyuncu Kazandı';
        }else {
            win.innerHTML = 'Berabere';
        }
    }
}

const roll = (rollx) =>{
    if(rollx===roll1){
        scorex = score1;
    }else{
        scorex = score2;
    }
    if (scorex.innerHTML === '0'){
        let rnd1 = Math.floor(Math.random() * 6) + 1;
        let rnd2 = Math.floor(Math.random() * 6) + 1;
        scorex.innerHTML = `${rnd1+rnd2}`;
        dice1.src = `dice${rnd1}.png`;
        dice2.src = `dice${rnd2}.png`;
        rollx.classList.add('op');
        res++;
        check();
    }
}

roll1.addEventListener('click', (e) => roll(e.target));
roll2.addEventListener('click', (e) => roll(e.target));
reset.onclick = prep;