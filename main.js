var nombre = "Jorge";
var altura = 180;

alert("Hola "+nombre);

if(altura>=170)
{
    datos.innerHTML += '<h1>Soy una persona alta.</h1>';
}
else
{
    datos.innerHTML += '<h1>Soy una persona baja.</h1>';
}

for(var i = 0; i <= 2020; i++)
{
    datos.innerHTML += "<h2> Estamos en el año: " + i;
}

function MuestraMiNombre(nombre, altura)
{
    var misdatos = `
    <h1>Soy: ${nombre}</h1>
    <h2>Mido: ${altura} cm</h2>
    `;

    return misdatos;
}

function Imprimir()
{
    var datos = document.getElementById("datos");
    datos.innerHTML = MuestraMiNombre(nombre, altura);
}

Imprimir();

var nombres = ['Victor', 'Antonio', 'Jose', 'Andres'];

for(i=0; i<nombres.length; i++)
{
    document.write(nombres[i] + '<br/>');
}

nombres.forEach((nombre) => {
    document.write(nombre + '<br/>');
});



