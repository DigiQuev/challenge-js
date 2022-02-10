function randomize() {
    document.getElementById('bg').style.backgroundColor = randomColors();
  }


  function randomColors() {
    return '#' + Math.floor(Math.random() * 12938446).toString(16);
  }