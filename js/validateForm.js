const d = document;

const formIsValid = {
  codigoActivo: false,
};

export function validateForm() {
  d.addEventListener("submit", (e) => {
    let valid = 0;
    // alert("entro");
    e.preventDefault();
    const formValues = Object.values(formIsValid);
    valid = formValues.findIndex((value) => value == false);
    if (valid != -1) alert("Ingrese todos los datos");
    else alert("todo bien");
  });
}

export function validateCodigo(codigo, btnGen, btnReset) {
  d.addEventListener("change", (e) => {
    if (e.target.matches(codigo)) {
      if (e.target.value.trim().length > 0) {
        formIsValid.codigoActivo = true;
      }
      d.querySelector(btnGen).disabled = false;
      d.querySelector(btnReset).disabled = false;
    }
  });
}

export function resetform(btnReset, btnGen, btnPrint) {
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnReset)) {
      d.querySelector(btnGen).disabled = true;
      d.querySelector(btnReset).disabled = true;
      d.querySelector(btnPrint).disabled = true;
      location.reload();
    }
  });
}
