 var wordList = ["Chennai", "Delhi", "Boston", "Bangalore"];
  var current = 0;

function load() {
 document.querySelector('#speak_button').addEventListener('click', speakHandler);
 document.querySelector('#next_button').addEventListener('click', nextWordHandler);
 document.querySelector('#input_form').addEventListener('submit', checkInputWord);
}

function speakHandler(wordToSay) {
	    chrome.tts.speak(wordList[current], {'rate': 0.8});
}

function nextWordHandler() {
   current++;

   if (current >= wordList.length)
	current = 0;

   speakHandler();
}

function checkInputWord() {
   var myval;

   myval = document.getElementById("input_text").value;

if ( myval.toUpperCase() === wordList[current].toUpperCase() ) {
correctstr = "input word was ";
correctstr = correctstr.concat(myval);
expectedstr = "expected word was ";
expectedstr = expectedstr.concat(wordList[current]);
	    chrome.tts.speak("Correct Answer", {'rate': 0.8});
/*for(i=0; i<1000000; i++);
	    chrome.tts.speak(correctstr, {'rate': 0.8});
for(i=0; i<1000000; i++);
	    chrome.tts.speak(expectedstr, {'rate': 0.8});
for(i=0; i<1000000; i++);*/
}
else
    chrome.tts.speak("Wrong Answer", {'rate': 0.8});
}

document.addEventListener('DOMContentLoaded', load);
