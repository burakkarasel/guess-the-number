const input = document.querySelector('.num-input')

const guessBtn = document.querySelector('.guess')

const life = document.querySelector('.life')

const result = document.querySelector('.result')

const replayBtn = document.querySelector('.replay')

const main = document.querySelector('main')

window.onload = function(){
    input.focus();
};

let randomNumber;

const randomNumberGenerator = () =>{
    return Math.trunc(Math.random()*100) + 1
}

randomNumber = randomNumberGenerator()


const checkInput = () => {
    if(life.innerText > 1){
        if(input.value == randomNumber){
            result.innerText = 'You won'

            life.innerText--

            guessBtn.removeEventListener('click', checkInput)
            
            replayBtn.classList.add('replay-active')

            input.value = ''
        }else if(input.value > randomNumber){

            result.innerText = 'Too much'

            life.innerText--

            input.value = ''

        }else if(input.value < randomNumber){

            result.innerText = 'Too less'

            life.innerText--

            input.value = ''
        }
    }else{
        life.innerText--

        result.innerText = 'You lost'

        guessBtn.removeEventListener('click', checkInput)

        replayBtn.classList.add('replay-active')

        input.value = ''
    }
}

guessBtn.addEventListener('click', checkInput)


const replayEvent = () => {
    if(confirm('Want to play again ?')){

        guessBtn.addEventListener('click', checkInput)

        life.innerText = 5

        result.innerText = 'Give it a try'

        randomNumber = randomNumberGenerator()

        replayBtn.classList.remove('replay-active')

        input.value = ''
    }
}

replayBtn.addEventListener('click', replayEvent)