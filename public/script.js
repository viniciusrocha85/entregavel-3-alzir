document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('calculatorForm');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const a = parseFloat(document.getElementById('a').value);
        const b = parseFloat(document.getElementById('b').value);

        axios.post('http://localhost:1010/calculadora-express', { a, b })
            .then(response => {
                resultDiv.textContent = response.data;
            })
            .catch(error => {
                console.error('Erro ao fazer requisição:', error);
            });
    });
});
