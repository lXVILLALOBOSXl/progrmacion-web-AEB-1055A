const app = document.getElementById('app');

const createCounter = () => {
    let count = 0;
    const counterElement = document.createElement('div');
    const incrementButton = document.createElement('button');
    const decrementButton = document.createElement('button');

    // Verificando si los botones se crean
    console.log('Creando botones');

    const updateCounter = () => {
        counterElement.textContent = `Contador: ${count}`;
    };

    // Configuración de los botones
    incrementButton.textContent = 'Incrementar';
    decrementButton.textContent = 'Decrementar';

    // Añadiendo clases CSS
    incrementButton.classList.add('increment');
    decrementButton.classList.add('decrement');

    // Eventos de los botones
    incrementButton.addEventListener('click', () => {
        count++;
        updateCounter();
    });

    decrementButton.addEventListener('click', () => {
        count--;
        updateCounter();
    });

    // Inicialización del contador
    updateCounter();

    // Verificando si los botones se añaden al DOM
    console.log('Añadiendo botones al DOM');
    app.appendChild(counterElement);
    app.appendChild(incrementButton);
    app.appendChild(decrementButton);

    // Verificación final
    console.log('Botón Incrementar:', incrementButton);
    console.log('Botón Decrementar:', decrementButton);
};

createCounter();




