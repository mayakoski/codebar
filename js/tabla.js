import { validateForm } from "./validateForm.js";
const d = document;

export function generarCodigos(
  codigo,
  numEtiquetas,
  btnGenerar,
  btnPrint,
  descripcion
) {
  // Crea un elemento <table> y un elemento <tbody>
  let tabla = d.createElement("table");
  let tblBody = d.createElement("tbody");

  tabla.classList.add("modal__content");

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnGenerar)) {
      validateForm();
      let $numEtiquetas = d.querySelector(numEtiquetas).value;
      let descItem;

      // Crea las celdas
      for (let i = 0; i < $numEtiquetas / 5; i++) {
        // Crea las hileras de la tabla
        let hilera = d.createElement("tr");

        for (let j = 0; j < 5; j++) {
          // Crea un elemento <td> y un nodo de texto, haz que el nodo de
          // texto sea el contenido de <td>, ubica el elemento <td> al final
          // de la hilera de la tabla
          let celda = d.createElement("td");
          celda.classList.add("celda");

          let descItem = document.createElement("p");
          let texto = document.createTextNode(
            d.querySelector(descripcion).value
          );
          descItem.appendChild(texto);

          descItem.classList.add("descripcion");
          let logo = d.createElement("img");
          logo.src = "./assets/logo.png";
          logo.classList.add("logo");
          let etiquetaCelda = d.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg"
          );
          etiquetaCelda.classList.add("barcode");
          celda.appendChild(descItem);
          celda.appendChild(logo);
          celda.appendChild(etiquetaCelda);

          hilera.appendChild(celda);
        }

        // agrega la hilera al final de la tabla (al final del elemento tblbody)
        tblBody.appendChild(hilera);
        // posiciona el <tbody> debajo del elemento <table>
        tabla.appendChild(tblBody);
      }

      // appends <table> into <div>
      contenedorCod.appendChild(tabla);

      // modifica el atributo "border" de la tabla y lo fija a "2";
      // tabla.setAttribute("border", "2");
      d.querySelector(btnGenerar).disabled = true;
      llenarTabla(codigo);

      d.querySelector(btnPrint).disabled = false;
    }
  });
}

function llenarTabla(codigo) {
  let codigoActivo = d.querySelector(codigo).value;
  $(".barcode").JsBarcode(codigoActivo, { fontSize: 20 });
}
