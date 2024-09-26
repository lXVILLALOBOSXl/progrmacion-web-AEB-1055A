const app = document.getElementById('app');

const createCounter = () => {
    let count = 0;
    const counterElement = document.createElement('div');
    const incrementButton = document.createElement('button');
    const decrementButton = document.createElement('button');

    const updateCounter = () => {
        counterElement.textContent = `Contador: ${count}`;
    };

    incrementButton.textContent = 'Incrementar';
    decrementButton.textContent = 'Decrementar';

    incrementButton.addEventListener('click', () => {
        count++;
        updateCounter();
    });

    decrementButton.addEventListener('click', () => {
        count--;
        updateCounter();
    });

    updateCounter();
    app.appendChild(counterElement);
    app.appendChild(incrementButton);
    app.appendChild(decrementButton);
};

createCounter();
incrementButton.classList.add('increment');
decrementButton.classList.add('decrement');

