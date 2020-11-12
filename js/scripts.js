import { generarCodigos } from "./tabla.js";
import { validateCodigo, resetform } from "./validateForm.js";

const d = document;

const contenedorCod = d.getElementById("contenedorCod");
const btnPrint = d.getElementById("btnPrint");

d.addEventListener("DOMContentLoaded", (e) => {
  validateCodigo("#codigoActivo", "#btnGenerar", "#btnReset");
  resetform("#btnReset", "#btnGenerar", "#btnPrint");
  generarCodigos(
    "#codigoActivo",
    "#etiquetaNum",
    "#btnGenerar",
    "#btnPrint",
    "#descripcion"
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
