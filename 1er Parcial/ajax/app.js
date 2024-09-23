const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const resultsList = document.getElementById('resultsList');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const loadingMessage = document.getElementById('loadingMessage');
const errorMessage = document.getElementById('errorMessage');

let currentPage = 1;
let currentSearchTerm = '';

// Función para hacer una solicitud a la API usando Fetch API
async function fetchUsers(query, page = 1) {
  const apiUrl = `https://jsonplaceholder.typicode.com/users?_limit=5&_page=${page}`;
  
  try {
    loadingMessage.style.display = 'block';
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }

    const data = await response.json();
    loadingMessage.style.display = 'none';
    return data;
  } catch (error) {
    errorMessage.textContent = error.message;
    loadingMessage.style.display = 'none';
  }
}

// Mostrar los resultados en el DOM
function displayResults(users, clear = false) {
  if (clear) {
    resultsList.innerHTML = '';
  }

  users.forEach(user => {
    const li = document.createElement('li');
    li.textContent = `${user.name} (${user.email})`;
    resultsList.appendChild(li);
  });
}

// Manejar el evento de envío del formulario
searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  errorMessage.textContent = ''; // Limpiar mensaje de error
  searchBtn.disabled = true; // Deshabilitar el botón de búsqueda
  resultsList.innerHTML = ''; // Limpiar resultados anteriores

  currentSearchTerm = searchInput.value.trim();
  currentPage = 1;

  if (currentSearchTerm) {
    const users = await fetchUsers(currentSearchTerm, currentPage);
    if (users && users.length > 0) {
      displayResults(users, true);
      loadMoreBtn.style.display = 'block'; // Mostrar el botón para cargar más
    } else {
      errorMessage.textContent = 'No se encontraron resultados.';
    }
  } else {
    errorMessage.textContent = 'Por favor, ingresa un término de búsqueda.';
  }
  
  searchBtn.disabled = false; // Habilitar el botón nuevamente
});

// Manejar la carga de más resultados
loadMoreBtn.addEventListener('click', async () => {
  currentPage++;
  const moreUsers = await fetchUsers(currentSearchTerm, currentPage);
  if (moreUsers && moreUsers.length > 0) {
    displayResults(moreUsers);
  } else {
    loadMoreBtn.style.display = 'none'; // Ocultar el botón si no hay más resultados
  }
});
