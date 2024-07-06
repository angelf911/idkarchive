function zoomTo(button) {
  let scale = 2;
  let rect = button.getBoundingClientRect();
  let centerX = rect.left + rect.width / 2;
  let centerY = rect.top + rect.height / 2;
  let translateX = window.innerWidth / 2 - centerX;
  let translateY = window.innerHeight / 2 - centerY;


  document.getElementById('button1').addEventListener('click', function() {
    zoomTo(this);
  });

  document.getElementById('button2').addEventListener('click', function() {
    zoomTo(this);
  });

  document.getElementById('button3').addEventListener('click', function() {
    zoomTo(this);
  });

  document.getElementById('button4').addEventListener('click', function() {
    zoomTo(this);
  });