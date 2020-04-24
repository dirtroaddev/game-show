/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor() {
        this.missed = 0;
        this.phrases = ['i am the walrus', 'walk to the beach', 'oceans of the sea', 'do not walk over the edge', 'clean the bathroom freak'];
        this.activePhrase = new Phrase(this.getRandomPhrase());
     }


     getRandomPhrase() {
         let rando = Math.ceil(Math.random() * this.phrases.length - 1)
         return this.phrases[rando];
     }

     startGame() {
         const overlay = document.querySelector('#overlay');
         overlay.style.display = 'none';
      
        this.activePhrase.addPhraseToDisplay();
     }

     checkForWin() {
        const letters = document.querySelectorAll('#phrase > ul li.letter');
        return [...letters].every(node => node.classList.contains("show") );
     }

     removeLife() {
        
        const letters = document.querySelector('#qwerty');
        const heart = document.querySelectorAll('#scoreboard > ol > li > img');

        for(let i = this.missed; i < 5; i++) {
                heart[this.missed].setAttribute('src', 'images/lostHeart.png');
        }
        this.missed++;

        if(this.missed === 5) {
            this.gameOver(false);
        }
     }

     gameOver(gameWon) {
        const overlay = document.querySelector('#overlay');
        if(gameWon) {
            
            overlay.style.display = 'block';
            overlay.classList.remove('start');
            overlay.classList.add('win');
        }else {
            overlay.style.display = 'block';
            overlay.classList.remove('start');
            overlay.classList.add('lose');
        }
     }

     handleInteraction(button) {

        if(this.activePhrase.checkLetter(button.textContent)) {
            button.classList.add('chosen');
            button.setAttribute('disabled', 'true');
            this.activePhrase.showMatchedLetter(button.textContent)
            if(this.checkForWin()) {
                return this.gameOver(true);
             }
        }else {
            button.setAttribute('disabled', 'true');
            button.classList.add('wrong');
            game.removeLife();
        }
        
        
     }
 }