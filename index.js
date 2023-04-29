function openGallery(id) {
    closeAll();
    const gallery = document.getElementById('gallery-'+id);
    const card = document.getElementById('card-'+id);
    gallery.classList.add('Gallery--active');
    card.classList.add('Card--active');
  }
  
  function closeAll() {
    const galleryActv = document.querySelector('.Gallery--active');
    const cardActv = document.querySelector('.Card--active');
    if (galleryActv) {
      galleryActv.classList.remove('Gallery--active');
    }
    if (cardActv) {
      cardActv.classList.remove('Card--active');
    }
  }


let progressBar1 = document.getElementById("progress-bar-1");
let progressBar2 = document.getElementById("progress-bar-2");
let progressBar3 = document.getElementById("progress-bar-3");
let progressBar4 = document.getElementById("progress-bar-4");
let progressBar5 = document.getElementById("progress-bar-5");


let progressValue1 = document.getElementById("progress-value-1");
let progressValue2 = document.getElementById("progress-value-2");
let progressValue3 = document.getElementById("progress-value-3");
let progressValue4 = document.getElementById("progress-value-4");
let progressValue5 = document.getElementById("progress-value-5");


let progress1 = 0;
let progress2 = 0;
let progress3 = 0;
let progress4 = 0;
let progress5 = 0;


function animateProgress(progressBar, progressValue, percentage) {
  let width = 0;
  let interval = setInterval(() => {
    if (width < percentage) {
      width++;
      progressBar.style.width = `${width}%`;
      progressValue.textContent = `${width}%`;
    } else {
      clearInterval(interval);
    }
  }, 10);
}


animateProgress(progressBar1, progressValue1, 98);
animateProgress(progressBar2, progressValue2, 95);
animateProgress(progressBar3, progressValue3, 90);
animateProgress(progressBar4, progressValue4, 70);
animateProgress(progressBar5, progressValue5, 50);

// ACTIVE PAGE
var url = window.location.href;

var links = document.querySelectorAll('.nav-link');

for (var i = 0; i < links.length; i++) {
  if (links[i].href === url) {
    links[i].classList.add('active');
    links[i].style.background = 'none';
    links[i].style.borderBottom = '2px solid #0dcaf0';
  }
}

