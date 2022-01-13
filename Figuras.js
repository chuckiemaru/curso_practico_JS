//Código del cuadrado.

function perimetroCuadrado(lado)
{
    return lado * 4;
}

function areaCuadrado(lado)
{
    return lado * lado;
}

//Código del triangulo.

function perimetroTriangulo(lado1, lado2, base)
{
    return lado1 + lado2 + base;
}

function areaTriangulo (base, altura)
{
    return (base * altura) / 2;
}


//Código Circulo

function diametroCirculo(radio)
{
    return radio * 2;
}

function circunferencia(radio)
{
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
}

function areaCirculo(radio)
{
    return (radio * radio) * Math.PI
}

//Triangulo isósceles.

function alturatriangulo(ladoa, ladob)
{
    return Math.sqrt((ladoa * ladoa)-((ladob * ladob)/4))
}

//Funciones en HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
  
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
  }
  function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
  
    const area = areaCuadrado(value);
    alert(area);
  }
