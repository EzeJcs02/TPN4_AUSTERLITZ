const btnCrear = document.getElementById('btnCrear');
const btnDescargar = document.getElementById('btnDescargar');
const btnSlice = document.getElementById('btnSlice');
const mensaje = document.getElementById('mensaje');

let miBlob = null;

btnCrear.addEventListener('click', () => {
  const texto = "Hola profe, este es el texto de prueba para el TP4 de Lenguaje IV.";
  miBlob = new Blob([texto], { type: 'text/plain' });
  mensaje.textContent = "Blob creado correctamente.";
});

btnDescargar.addEventListener('click', () => {
  if (!miBlob) {
    alert("Tenés que crear el Blob primero.");
    return;
  }
  
  const url = URL.createObjectURL(miBlob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'archivo_tp4.txt';
  a.click();
  
  URL.revokeObjectURL(url);
});

btnSlice.addEventListener('click', () => {
  if (!miBlob) {
    alert("Tenés que crear el Blob primero.");
    return;
  }
  
  const porcion = miBlob.slice(0, 10);
  const lector = new FileReader();
  
  lector.onload = (e) => {
    mensaje.textContent = `Resultado del slice (primeros 10 caracteres): "${e.target.result}"`;
  };
  
  lector.readAsText(porcion);
});