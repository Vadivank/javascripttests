const valueInputNode = document.querySelector('.js-value-input');
const currencySelectorNode = document.querySelector('.js-current-selector');
const outputNode = document.querySelector('.js-output');

function getInput() {
    return {
        rub: Number(valueInputNode.value),
        currency: currencySelectorNode.value
    }
}

function render(result) {
    outputNode.innerText = result;
    
}

valueInputNode.addEventListener('input', () => {
    const result = convert(getInput());
    render(result);
});

currencySelectorNode.addEventListener('change', function() {
    const result = convert(getInput());
    render(result);
});
