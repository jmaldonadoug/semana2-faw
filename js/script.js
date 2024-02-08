const ejercicio1 = () => {
    const n1 = document.getElementById('ej1-n1').value;
    const n2 = document.getElementById('ej1-n2').value;
    const respuesta = document.getElementById('ej1-respuesta');

    const result = Math.pow(n1, n2);

    respuesta.innerHTML = `El resultado es ${result}`
}

const ejercicio2 = () => {
    const n1 = document.getElementById('ej2-n1').value;
    const respuesta = document.getElementById('ej2-respuesta');

    const result = (n1 * 9 / 5) + 32;

    respuesta.innerHTML = `El resultado son ${result} grados fahrenheit`;
}

const ej3ArrayAgregar = [];
const ejercicio3Agregar = () => {
    const input1 = document.getElementById('ej3-input1').value;
    const nombres1 = document.getElementById('ej3-nombres1');

    if (input1) {
        ej3ArrayAgregar.push(input1);

        let html = '<ul>';
        ej3ArrayAgregar.map(item => {
            html += `<li>${item}</li>`;
        });
        html += '</ul>';

        nombres1.innerHTML = html;
    } else {
        alert('Ingrese un nombre');
    }
}

const ej3ArrayFiltrar = [];
const ejercicio3Filtrar = () => {
    const input2 = document.getElementById('ej3-input2').value;
    const nombres2 = document.getElementById('ej3-nombres2');

    if (input2 > 0) {
        const filtro = ej3ArrayAgregar.filter(item => item.length === Number(input2));

        let html = '<ul>';
        filtro.map(item => {
            html += `<li>${item}</li>`;
        });
        html += '</ul>';

        nombres2.innerHTML = html;
    } else {
        alert('Ingrese un numero mayor a 0');
    }
}

const ej4Array = [];
const ejercicio4Agregar = () => {
    const nombre = document.getElementById('ej4-input1').value;
    const fecha = document.getElementById('ej4-input2').value;
    const lista = document.getElementById('ej4-lista1');

    ej4Array.push({ nombre, fecha });

    let html = '<ul>';
    ej4Array.map(item => {
        html += `<li><b>Nombre:</b> ${item.nombre}<br><b>Fecha nacimiento:</b> ${item.fecha}</li>`;
    });
    html += '</ul>';

    lista.innerHTML = html;
}

const ejercicio4MostrarEdad = () => {
    const fecha = document.getElementById('ej4-input3').value;
    const lista = document.getElementById('ej4-lista2');

    let html = '<ul>';
    ej4Array.map(item => {
        const actual = new Date(fecha);
        const nacimiento = new Date(item.fecha);
        let years = actual.getFullYear() - nacimiento.getFullYear();
        let months = actual.getMonth() - nacimiento.getMonth();
        let days = actual.getDate() - nacimiento.getDate();

        // Ajustar la edad si el mes o el día actual es menor que el de nacimiento
        if (months < 0 || (months === 0 && days < 0)) {
            years--;
        }
        html += `<li><b>Nombre:</b> ${item.nombre}<br><b>Edad:</b> ${years}</li>`;
    });
    html += '</ul>';

    lista.innerHTML = html;
}

const ejercicio5 = () => {
    const input = document.getElementById('ej5-input');
    const respuesta = document.getElementById('ej5-respuesta');

    const result = input.value.trim().split(' ').length;
    respuesta.innerHTML = `Escribiste ${result} palabras`;
}

const ej6Array = [];
const ejercicio6Agregar = () => {
    const input = document.getElementById('ej6-input').value;
    const numeros = document.getElementById('ej6-numeros');

    ej6Array.push(input);

    let html = '<ul>';
    ej6Array.map(item => {
        html += `<li>${item}</li>`;
    });
    html += '</ul>';
    numeros.innerHTML = html;
}

const ejercicio6Promedio = () => {
    const respuesta = document.getElementById('ej6-respuesta');
    let suma = 0;

    ej6Array.map(item => {
        suma = Number(suma) + Number(item);
    });

    const result = (Number(suma) / ej6Array.length).toFixed(2);

    respuesta.innerHTML = `El promedio es de ${result}`;
}

const ejercicio7 = () => {
    const color = document.getElementById('ej7-input').value;
    const respuesta = document.getElementById('ej7-respuesta');

    respuesta.style.width = '50px';
    respuesta.style.height = '50px';
    respuesta.style.backgroundColor = color;
}