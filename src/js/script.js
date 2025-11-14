document.addEventListener('DOMContentLoaded', function () {
    var boton = document.getElementById('infoBtn');
    var caja = document.getElementById('infoBox');
  
    if (boton && caja) {
      boton.onclick = function () {
        if (caja.style.display === 'none') {
          caja.style.display = 'block';
        } else {
          caja.style.display = 'none';
        }
      };
    }
  });