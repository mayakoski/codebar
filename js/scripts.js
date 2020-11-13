import { generarCodigos } from "./tabla.js";
import { validateCodigo, resetform } from "./validateForm.js";

const d = document;

const contenedorCod = d.getElementById("contenedorCod");
const btnPrint = d.getElementById("btnPrint");

const fileInput = document.getElementById('file')
const img = document.getElementById('img')

d.addEventListener("DOMContentLoaded", (e) => {
  validateCodigo("#codigoActivo", "#btnGenerar", "#btnReset");
  resetform("#btnReset", "#btnGenerar", "#btnPrint");
  generarCodigos(
    "#codigoActivo",
    "#etiquetaNum",
    "#btnGenerar",
    "#btnPrint",
    "#descripcion",
    'img'
  );
});

btnPrint.addEventListener("click", (e) => {
  const contenido = contenedorCod.innerHTML;
  const contenidoOriginal = document.body.innerHTML;
  document.body.innerHTML = contenido;
  window.print();
  document.body.innerHTML = contenidoOriginal;
  location.reload();
});

fileInput.addEventListener('change', (e)=>{
   const file = e.target.files[0]
   const fileReader = new FileReader()
   fileReader.readAsDataURL(file)
   fileReader.addEventListener('load', (e)=>{
      img.setAttribute('src', e.target.result);
      
      console.log(img.getAttribute('src'));
   })
})