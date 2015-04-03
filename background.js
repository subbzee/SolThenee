chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
    'bounds': {
      'width': 400,
      'height': 500
  }
});


  var wordList = ["Ennui", "Echo", "Dazzle", "Bangalore"];

  for (i = 0; i< wordList.length ; i++) {
    chrome.tts.speak(wordList[i], {'rate': 0.8});
    for(j=0; j< 1000000000 ; j++);
  }

    function myFunction()
    {
		document.alert('hello');
        chrome.tts.speak($("#word").val(), {'rate': 0.8});
  for(j=0; j< 1000000000 ; j++);

    }
    document.getElementById('say').onclick = myFunction();
 
});
