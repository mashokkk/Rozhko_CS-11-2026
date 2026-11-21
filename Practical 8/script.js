const image_folder = 'images';
const lowercase_letters = 'small_';
const format = 'png';
const delay = 0.05;
const shift = 10;

const input = document.getElementById('source-text');
const convert_button = document.getElementById('go');
const result = document.getElementById('result-text');

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getImagePath(letter) {
  const isUpper = letter === letter.toUpperCase();
  if (isUpper) {
    return `${image_folder}/${letter}.${format}`;
  }
  return `${image_folder}/${lowercase_letters}${letter}.${format}`;
}
function createLetterElement(item, index) {
  const img = document.createElement('img');
  img.src = getImagePath(item);
  img.alt = item;
  img.style.setProperty('--anim-delay', `${index * delay}s`);
  img.style.setProperty('--shift', `${randomInt(-shift, shift)}px`);
  return img;
}
function createSymbolElement(item, index) {
  const span = document.createElement('span');
  span.textContent = item === ' ' ? '\u00A0' : item;
  span.style.setProperty('--anim-delay', `${index * delay}s`);
  return span;
}
function convert() {
  const text = input.value;
  result.innerHTML = '';
  for (let i = 0; i < text.length; i++) {
    const item = text[i];
    if (item === '\n') {
      result.appendChild(document.createElement('br')); 
      continue;
    }
    if (/[a-z]/i.test(item)) {
      result.appendChild(createLetterElement(item, i));
      continue;
    }
    result.appendChild(createSymbolElement(item, i));
}
}
convert_button.addEventListener('click', convert);