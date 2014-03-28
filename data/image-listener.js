document.body.addEventListener('click', function(event) {
  var element = event.target;
  if (element.nodeName.toUpperCase() === 'IMG') {
    self.port.emit('elementsUrl', element.src);
  }
});
