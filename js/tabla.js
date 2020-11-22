import { validateForm } from "./validateForm.js";
const d = document;

export function generarCodigos(
  codigo,
  numEtiquetas,
  btnGenerar,
  btnPrint,
  descripcion,
  logo,
  precio
) {
  // Crea un elemento <table> y un elemento <tbody>
  let tabla = d.createElement("table");
  let tblBody = d.createElement("tbody");

  const tablaFragment = d.createDocumentFragment()
  const tblBodyFragment = d.createDocumentFragment()

  
  tabla.classList.add("table");
  
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnGenerar)) {

      const logoLoad = d.getElementById(logo)
      // const precioVenta = d.getElementById(precio)


      validateForm();
      let $numEtiquetas = d.querySelector(numEtiquetas).value;
      // let descItem;

      
      // Crea las celdas
      for (let i = 0; i < $numEtiquetas / 5; i++) {
        // Crea las hileras de la tabla
        let hilera = d.createElement("TR");

        for (let j = 0; j < 5; j++) {
          // Crea un elemento <td> y un nodo de texto, haz que el nodo de
          // texto sea el contenido de <td>, ubica el elemento <td> al final
          // de la hilera de la tabla
          let celda = d.createElement("td");
          celda.classList.add("table__data");

          let descItem = document.createElement("P");
          let precioVenta = d.createElement('P')
          
          let texto = document.createTextNode(
            d.querySelector(descripcion).value
          );

          precioVenta.textContent = d.getElementById(precio).value   
          precioVenta.classList.add('form__field-precio')  
          console.log(precioVenta.textContent);

          descItem.appendChild(texto);

          descItem.classList.add("descripcion");
          let logo = d.createElement("img");
          (logoLoad.getAttribute('src')=='#') 
            ? logo.src = "./assets/logo.png"
            : logo.src = logoLoad.getAttribute('src');
          logo.classList.add("logo");
          let etiquetaCelda = d.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg"
          );

          etiquetaCelda.classList.add("barcode");
          celda.appendChild(descItem);
          celda.appendChild(logo);
          celda.appendChild(etiquetaCelda);
          celda.appendChild(precioVenta);

          hilera.appendChild(celda);
        }

        // agrega la hilera al final de la tabla (al final del elemento tblbody)
        tblBody.appendChild(hilera);
        tblBodyFragment.appendChild(tblBody)

        // posiciona el <tbody> debajo del elemento <table>
        tabla.appendChild(tblBodyFragment);
        tablaFragment.appendChild(tabla)
      }

      // appends <table> into <div>
      contenedorCod.appendChild(tablaFragment);

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
