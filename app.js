document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.keys button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.innerText;

            if (value === 'C') {
                clearDisplay();
            } else if (value === '=') {
                calculate();
            } else {
                appendToDisplay(value);
            }
        });
    });

    function appendToDisplay(value) {
        if (display.innerText === '0') {
            display.innerText = value;
        } else {
            display.innerText += value;
        }
    }

    function clearDisplay() {
        display.innerText = '0';
    }

    function calculate() {
        try {
            display.innerText = eval(display.innerText);
        } catch (e) {
            display.innerText = 'Error';
        }
    }
});
