function evenOrodd() {
    let num = document.querySelector('.number').value;

    if (num > 0) {
        if (num % 2 == 0) {
            document.querySelector('.demo').textContent = num + " is an Even number";
        } else {
            document.querySelector('.demo').textContent = num + " is an Odd number";
        }
    } else {
        document.querySelector('.demo').textContent = 'Enter a valid number';
    }
}

function reset() {
    document.querySelector('.number').value = "";
    document.querySelector('.demo').textContent = "";
}

// Keyboard accessibility
document.addEventListener('keydown', function (event) {
    const key = event.key;

    if (key === 'Enter') {
        evenOrodd();
    }
});
