var actionKeyCode = 83;
var currentURL;

document.body.addEventListener('click', function(event) {
  var element = event.target;
  if (element.nodeName.toUpperCase() === 'IMG') {
    currentURL = element.src;
  }
});

document.addEventListener('keyup', function(event) {
  console.log('code', event.keyCode);
  if (event.keyCode === actionKeyCode && currentURL !== undefined) {
    self.port.emit('element-url', currentURL);
  }
});
