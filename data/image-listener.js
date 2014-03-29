var actionKeyCode = 83;
var currentURL;

document.body.addEventListener('click', function(event) {
  var element = event.target;
  var urlRe = /url\("(.*)"\)/;
  var computedBackgroundImage;
  var match;

  if (element.nodeName.toUpperCase() === 'IMG') {
    currentURL = element.src;
  }
  else {
    computedBackgroundImage = window.getComputedStyle(element).getPropertyValue('background-image');
    // According to https://developer.mozilla.org/en-US/docs/Web/CSS/background-image,
    // computed property of `background-image` contains resolved URLs.
    if (match = urlRe.exec(computedBackgroundImage)) {
      currentURL = match[1];
    } else {
      currentURL = undefined;
    }
  }
  console.log('Image found: ' + currentURL);
});

document.addEventListener('keyup', function(event) {
  console.log('code', event.keyCode);
  if (event.keyCode === actionKeyCode && currentURL !== undefined) {
    self.port.emit('element-url', currentURL);
  }
});
