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

// EJERCICIO 1:
// - Sabiendo lo que miden los 3 lados, encontrar la altura.
// - Debe ser un triángulo isósceles (dos lados iguales y uno diferente)

function ejercicioAlturaTriangulo(lado, base) {
    if (lado == base) {
        console.warn('¡Error, este no es un triángulo isósceles!');
    } else {
        // Fórmula = raiz(lado**2 - (b**2)/4)
        return Math.sqrt((Math.pow(lado, 2)) - ((Math.pow(base, 2))/4)).toFixed(2);
    }
}

console.log(ejercicioAlturaTriangulo(3, 5));

// EJERCICIO 2:
// - Sabiendo lo que miden los 3 lados, encuentra la altura.
// - Debe ser un triángulo escaleno (todos los lados diferentes).

function alturaEscaleno(A, B, C) {
    if (A == B || A == C || B == C) {
        console.warn('¡Error, este no es un triángulo escaleno!')
    } else {
        const semiperimetro = (A + B + C) / 2;

        return (2/A) * Math.sqrt(semiperimetro * (semiperimetro - A) * (semiperimetro - B) * (semiperimetro - C));
    }
}

console.log(alturaEscaleno(5, 4, 2));