window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var noneheader = document.getElementById('noneheader');
    
    if (window.scrollY + window.innerHeight >= noneheader.offsetTop) {
      header.style.display = 'none';
    } else {
      header.style.display = 'block';
    }
  });
const menuButton = document.getElementById('menuButton');
const popupMenu = document.getElementById('popupMenu');

menuButton.addEventListener('click', function() {
  if (popupMenu.style.display === 'none' || popupMenu.style.display === '') {
    popupMenu.style.display = 'block';
  } else {
    popupMenu.style.display = 'none';
  }
});