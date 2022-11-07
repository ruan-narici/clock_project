const hora = document.getElementById('horas');
const minuto = document.getElementById('minutos');
const segundo = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let DataDeHoje = new Date();
    let hr = DataDeHoje.getHours();
    let min = DataDeHoje.getMinutes();
    let s = DataDeHoje.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (s < 10) s = '0' + s;

    hora.textContent = hr;
    minuto.textContent = min;
    segundo.textContent = s;
});