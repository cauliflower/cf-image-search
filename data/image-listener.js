var images = document.querySelectorAll('img');

for (var i=0, l=images.length; i<l; i++) {
  images.addEventListener('click', handleClickListener);
}
