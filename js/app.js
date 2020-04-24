/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//  const phrase = new Phrase('life IS like a box OF chocalates');
const game = new Game();
const button = document.querySelector('#btn__reset');




button.addEventListener('click', e => {
    // const game = new Game();
    const ul = document.querySelector('#phrase > ul');
    console.log(ul)
   
    game.startGame();
    
});

const letters = document.querySelector('#qwerty');
letters.addEventListener('click', e => {
    game.handleInteraction(e.target);
});



