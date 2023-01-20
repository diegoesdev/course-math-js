console.log( '%c Taller de Matematicas', 'color: yellow; font-size: 18px;');

// Perímetro y área de un cuadrado

console.group('Cuadrado');

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado
});

console.groupEnd('Cuadrado');

// Perímetro y área de un triangulo

console.group('Triangulo');

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

console.log({
    perimetroTriangulo,
    areaTriangulo
})

// De mejor forma podemos realizar los mismos cálculos en una función

function calculosTriangulo(lado1, lado2, base, altura) {
    return {
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2
    };
}

calculosTriangulo(6, 6, 4, 5.5);

console.groupEnd('Triangulo');

// Circunferencia y área de un círculo

console.group('Circulo');

function calculosCirculo(radio) {
    const diametro = radio * 2;
    const radioAlCuadrado = Math.pow(radio, 2);

    return {
        circunferencia: diametro * Math.PI.toFixed(4),
        area: radioAlCuadrado * Math.PI.toFixed(3)
    }
}

console.log(calculosCirculo(5));

console.groupEnd('Circulo');