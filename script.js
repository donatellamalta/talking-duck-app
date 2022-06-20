/*To avoid that desktop and smartphone versions have two different voices, load all the voices before.
Once browser finish to load all its voices, we can change it */

// let voices = [];

// speechSynthesis.addEventListener('voiceschanged', function(){
//     voices = speechSynthesis.getVoiches();
// })
//TO DEVELOP


// Collect from page all elements used

const textArea = document.querySelector('textArea');
const playButton = document.querySelector('button');
const pitchBar = document.querySelector('input');
const duckFigure = document.querySelector('figure');

playButton.addEventListener('click', function(){
    const textLength = textArea.value.trim().length; //check if the text is empty, removing spaces at the beginning and at the end
    
    if(textLength > 0){
        talk();
    }
});

function talk(){
    //1. Take pitch and text
    const text = textArea.value;
    const pitch = pitchBar.value;

    //2. Prepare a phrase for the speech synthesis
    const utterance = new SpeechSynthesisUtterance(text);

    //3. specify other details of the phrase
    utterance.volume = 1;
    utterance.rate = 1;
    utterance.pitch = pitch; //use the one the user choose

    //4. Speak
    speechSynthesis.speak(utterance);

    utterance.addEventListener('start', function(){ //activate animation
        //block elements in use (text, button and pitch)
        textArea.disabled = true;
        pitchBar.disabled = true;
        playButton.disabled = true;

        duckFigure.classList.add('talking');
        
    });

    utterance.addEventListener('end', function(){
        textArea.disabled = false;
        pitchBar.disabled = false;
        playButton.disabled = false;

        duckFigure.classList.remove('talking');
    })

}

