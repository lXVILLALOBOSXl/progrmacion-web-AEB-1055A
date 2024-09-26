const app = document.getElementById('app');

const createCounter = () => {
    let count = 0;
    const counterElement = document.createElement('div');
    const buttonElement = document.createElement('button');

    const updateCounter = () => {
        counterElement.textContent = `Contador: ${count}`;
    };

    buttonElement.textContent = 'Incrementar';
    buttonElement.addEventListener('click', () => {
        count++;
        updateCounter();
    });

    updateCounter();
    app.appendChild(counterElement);
    app.appendChild(buttonElement);
};

createCounter();
