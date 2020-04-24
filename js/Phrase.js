/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
 class Phrase {
     constructor(phrase) {
         this.phrase = phrase;
     }

     addPhraseToDisplay() {
         const ul = document.querySelector('#phrase > ul');
        //  console.log(ul);
         for(let i = 0; i < this.phrase.length; i++) {
             const li = document.createElement('li');
            ul.appendChild(li);
            if(this.phrase[i] == ' ') {
                li.classList.add('hide', 'space');
            }else {
                li.classList.add('hide', 'letter',`${this.phrase[i]}`);
            }
            
            li.textContent = this.phrase[i];
         }
         return ul;
     }

     checkLetter(letter) {
         return this.phrase.includes(letter);
        // console.log(this.phrase)
     }

     showMatchedLetter(letter) {
        //  const letters = document.querySelector('#qwerty');
         const ul = document.querySelectorAll('#phrase > ul > li');
        

        ul.forEach(li => {
            if(li.textContent === letter) {
                li.classList.remove('hide');
                li.classList.add('show');
            } 
        });
        
        
     }
 }