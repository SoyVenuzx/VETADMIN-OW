function cargarPartials() {
  // document.getElementById('sidemenu-container').innerHTML='<object type="text/html" data="/partials/sidemenu.html"></object>'
  fetch("/partials/sidemenu.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("sidemenu-container").innerHTML = html;
    });

  fetch("/partials/topmenu.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("nav-container").innerHTML = html;
    });
}

window.onload = cargarPartials();

function mostrarModal() {
  const modal = new bootstrap.Modal(document.getElementById("modal"));

  modal.show();
}
