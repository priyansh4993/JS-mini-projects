// let speech = new SpeechSynthesisUtterance();

// let voices = [];

// let voiceSelect = document.querySelector("select");

// window.speechSynthesis.onvoiceschanged = ()=>{
//     voices = window.speechSynthesis.getVoices();
//     speech.voice = voices[0];

//     voices.forEach((voice , i) =>(voiceSelect.option[i] = 
//         new Option(voice.name,i)));
// }

// document.querySelector("button").addEventListener("click", ()=>{
//     speech.text = document.querySelector("textarea").value;
//     window.speechSynthesis.speak(speech)
// })

let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

// Fetch voices when they are available
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    // Clear existing options
    voiceSelect.addEventListener("change", ()=>{
        speech.voice = voices[voiceSelect.value];

    }) 

    // Populate select with voices
    voices.forEach((voice, i) => {
        let option = new Option(voice.name, i);
        voiceSelect.add(option);
    });
};

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
