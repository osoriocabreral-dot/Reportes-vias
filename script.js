const form = document.getElementById("reporteForm");
const lista = document.getElementById("listaReportes");

form.addEventListener("submit", function (e) {
e.preventDefault();

const usuario = document.getElementById("usuario").value;
const ubicacion = document.getElementById("ubicacion").value;
const tipoDanio = document.getElementById("tipoDanio").value;
const comentario = document.getElementById("comentario").value;

const nuevoReporte = document.createElement("li");
nuevoReporte.innerHTML = `
<strong>${ubicacion}</strong> (${tipoDanio})<br>
Reportado por: ${usuario}<br>
Comentario: ${comentario}<br>
<button onclick="votar(this)">Votar</button> <span class="votos">0</span> votos
`;

lista.appendChild(nuevoReporte);
form.reset();
});

function votar(boton) {
const votos = boton.nextElementSibling;
votos.textContent = parseInt(votos.textContent) + 1;
}