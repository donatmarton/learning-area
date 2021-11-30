const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for (let i = 1; i <= 5; i++) {
  const newImage = document.createElement('img');
  const picturePath = `images/pic${i}.jpg`;
  newImage.setAttribute('src', picturePath);
  thumbBar.appendChild(newImage);

  newImage.addEventListener('click', enlargeImage);
}

function enlargeImage(event) {
  const newImagePath = event.target.getAttribute('src');
  displayedImage.setAttribute('src', newImagePath);
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', applyDarken);

function applyDarken(event) {
  const currentClassName = event.target.getAttribute('class');
  
  const darkening = currentClassName === 'dark';
  const lightening = currentClassName === 'light';
  if (darkening) {
    overlay.style.background = 'rgba(0,0,0,0.5)';
    event.target.setAttribute('class', 'light');
    event.target.textContent = 'Lighten';
  }
  else if (lightening) {
    overlay.style.background = 'rgba(0,0,0,0)';
    event.target.setAttribute('class', 'dark');
    event.target.textContent = 'Darken';
  }
}