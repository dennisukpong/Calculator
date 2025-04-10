const display = document.querySelector('.display');
        const buttons = document.querySelectorAll('button');
        let currentInput = '';
        let result = '';

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const value = button.textContent;

                if (button.classList.contains('clear')) {
                    currentInput = '';
                    result = '';
                    display.value = '';
                }
                else if (button.classList.contains('backspace')) {
                    currentInput = currentInput.slice(0, -1);
                    display.value = currentInput;
                }
                else if (button.classList.contains('equals')) {
                    try {
                        result = eval(currentInput);
                        display.value = result;
                        currentInput = result.toString();
                    } catch (error) {
                        display.value = 'Error';
                        currentInput = '';
                    }
                }
                else {
                    currentInput += value;
                    display.value = currentInput;
                }
            });
        });

        // Keyboard support
        document.addEventListener('keydown', (event) => {
            const key = event.key;
            if (/[0-9+\-*/().]/.test(key)) {
                currentInput += key;
                display.value = currentInput;
            }
            else if (key === 'Enter' || key === '=') {
                try {
                    result = eval(currentInput);
                    display.value = result;
                    currentInput = result.toString();
                } catch (error) {
                    display.value = 'Error';
                    currentInput = '';
                }
            }
            else if (key === 'Escape') {
                currentInput = '';
                result = '';
                display.value = '';
            }
            else if (key === 'Backspace') {
                currentInput = currentInput.slice(0, -1);
                display.value = currentInput;
            }
        });