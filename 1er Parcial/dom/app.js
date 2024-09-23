// Cambiar color de fondo
const changeColorBtn = document.getElementById('changeColorBtn');
changeColorBtn.addEventListener('click', () => {
  const colors = ['#f4a261', '#e76f51', '#2a9d8f', '#264653', '#e9c46a'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});

// Agregar y eliminar elementos de la lista
const addItemBtn = document.getElementById('addItemBtn');
const itemInput = document.getElementById('itemInput');
const itemList = document.getElementById('itemList');

addItemBtn.addEventListener('click', () => {
  const newItemText = itemInput.value.trim();
  if (newItemText !== '') {
    const li = document.createElement('li');
    li.textContent = newItemText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.addEventListener('click', () => {
      itemList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    itemList.appendChild(li);
    itemInput.value = '';
  }
});

// Contador
let counter = 0;
const counterValue = document.getElementById('counterValue');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const counterError = document.getElementById('counterError');

incrementBtn.addEventListener('click', () => {
  counter++;
  counterValue.textContent = counter;
  counterError.textContent = '';
});

decrementBtn.addEventListener('click', () => {
  if (counter > 0) {
    counter--;
    counterValue.textContent = counter;
    counterError.textContent = '';
  } else {
    counterError.textContent = 'El contador no puede ser negativo.';
  }
});

// Galería de imágenes
const galleryImage = document.getElementById('galleryImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const images = ['img1.jpg', 'img2.jpg', 'img3.jpg'];
let currentIndex = 0;

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  galleryImage.src = images[currentIndex];
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  galleryImage.src = images[currentIndex];
});
