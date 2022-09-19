const grid = document.querySelector('.grid');
const spawnPlayer = document.querySelector('.player');
const timer = document.querySelector('.time');

let page = document.querySelector('.titulo');

if (page == null){

    function character(){
        const character = [
            'akashi',
            'ayano',
            'gojo',
            'goku',
            'kira',
            'l',
            'luffy',
            'naruto',
            'saitama',
            'tomioka',
        ];

        return character;
    }

    var estado_game = 1;

}
else{

    function character (){

    
    const character = [
        'near',
        'vegeta',
        'aomine',
        'sasuke',
        'shinigami',
        'sonic',
        'sukuna',
        'tanjirp',
        'zoro',
        'yusuke',

    ];

    return character;
}
    var estado_game = 2;

}

character = character();

const createElement = (tag,className) =>{
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstcard = '';
let secondcard = '';

const checkendgame = () =>{
    const disabledcard = document.querySelectorAll('.disabled-card');
    const btn = document.querySelector('.vencedor1');
    if(disabledcard.length == 20){
        clearInterval(this.loop);
        


        if(estado_game == 20){

            alert(`Parabéns,${spawnPlayer.innerHTML}! seu tempo foi: ${timer.innerHTML}`)
            
            
            window.location = '../pages/game_dois.html';
            
            ;
        }

        else{

            alert(`Parabéns,${spawnPlayer.innerHTML}! seu novo tempo foi: ${timer.innerHTML}`)
            window.location = '../pages/game_dois.html';
            ;
        }
    
        alert('Em breve atualizações: ');
            
        btn.addEventListener("click", () =>{
            location.reload();
        })
    
        }

    }

const checkCards = () =>{
    const firstCharacter = firstcard.getAttribute('data-character');
    const secondCharacter = secondcard.getAttribute('data-character');

    if(firstCharacter == secondCharacter){

        firstcard.firstChild.classList.add('disabled-card');
        secondcard.firstChild.classList.add('disabled-card');

        firstcard = '';
        secondcard = '';
        
        checkendgame();
    
    }   else{
        setTimeout(() => {
            
          firstcard.classList.remove('reveal-card');
            
          secondcard.classList.remove('reveal-card');

          firstcard = '';
          secondcard = '';
        }, 500);
        
    }
}

const revealCard = ({target}) =>{
    
    if (target.parentNode.className.includes('reveal-card')){
        return;
    }

    if (firstcard == ''){
        target.parentNode.classList.add('reveal-card');
        firstcard = target.parentNode;
    }else if (secondcard == ''){
        target.parentNode.classList.add('reveal-card') ;
        secondcard = target.parentNode;


        checkCards();
    }
    
}

const creatCard = (character) =>{
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../images_animes/${character}.jpg')`;


    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click',revealCard);

    card.setAttribute('data-character',character);
20
    return card;

}

const loadGame = () =>{

    const duplicateCharacters = [ ...character, ...character];

    const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

    Math.random
    
    shuffledArray.forEach((character) =>{

        const card = creatCard(character);
        grid.appendChild(card);

    });
}

const startTimer = () =>{
    this.loop = setInterval(() =>{

        const currenttime = +timer.innerHTML;
        timer.innerHTML = currenttime + 1;

    },1000);
}

window.onload = () =>{

    const playerName = localStorage.getItem('player');

    spawnPlayer.innerHTML = playerName;

    startTimer();
    loadGame();
}

