const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    return a / b;
}

app.post('/calculadora-express', function (req, res) {
    var body = req.body;
    var resultSoma = soma(body.a, body.b);
    var resultSub = subtracao(body.a, body.b);
    var resultMult = multiplicacao(body.a, body.b);
    var resultDiv = divisao(body.a, body.b);
    res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultSoma},
O resultado da subtração de ${body.a} e ${body.b} é ${resultSub},
O resultado da multiplicação de ${body.a} e ${body.b} é ${resultMult},
O resultado da divisão de ${body.a} e ${body.b} é ${resultDiv}`);
});

const PORT = 1010;
app.listen(PORT, () => {
    console.log(`App de Exemplo escutando na porta http://localhost:${PORT}/`);
});
