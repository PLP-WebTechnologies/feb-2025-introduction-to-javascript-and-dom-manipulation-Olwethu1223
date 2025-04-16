const outfitBtn = document.getElementById('change-outfit-button');
const outfitDesc = document.getElementById('outfit-description');

outfitBtn.addEventListener('click', () => {
  const looks = [
    'Slaying a holographic crop top with baggy jeans and chunky boots 👢✨',
    'Serving cozy glam with an oversized pastel hoodie & rhinestone shades 😎',
    'Retro revival! Baby tee, mini skirt, and a furry pink bucket hat 💖',
    'Kawaii punk: fishnets, plaid skirt, and butterfly clips 🦋💀'
  ];
  const randomLook = looks[Math.floor(Math.random() * looks.length)];
  outfitDesc.textContent = randomLook;
});

const themeBtn = document.getElementById('change-theme-button');
let isLightTheme = true;

themeBtn.addEventListener('click', () => {
  if (isLightTheme) {
    document.body.style.background = 'linear-gradient(to right, #ffd6ff, #caffbf)';
  } else {
    document.body.style.background = 'linear-gradient(to right, #f5d3e6, #e0c3fc)';
  }
  isLightTheme = !isLightTheme;
});

const addBtn = document.getElementById('add-item-button');
const removeBtn = document.getElementById('remove-item-button');
const container = document.getElementById('fashion-item-container');

addBtn.addEventListener('click', () => {
  const item = document.createElement('div');
  item.className = 'fashion-item';
  item.innerHTML = `
    <img src="your-fashion-image.jpg" alt="Fashion Look" />
    <p>✨ New Y2K-Inspired Look Added!</p>
  `;
  container.appendChild(item);
});

removeBtn.addEventListener('click', () => {
  const lastItem = container.lastElementChild;
  if (lastItem) {
    container.removeChild(lastItem);
  }
});

