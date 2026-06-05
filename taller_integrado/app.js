// =============================================================================
// ESTADO — Variables fuera de funciones para que persistan entre llamadas.
// Si estuvieran dentro, se reiniciarían a su valor inicial en cada ejecución.
// =============================================================================
let tareas = []; // array con todos los objetos tarea
let idCounter = 0; // genera un id único para cada tarea nueva
let drawerOpenId = null; // id de la tarea cuyo drawer está abierto (null = cerrado)

// Mapa categoría → emoji. Un solo lugar para mantenerlo.
const emojis = {
  trabajo: "💼",
  estudio: "📚",
  personal: "🏠",
  urgente: "🔴",
  otra: "✏️",
};

// =============================================================================
// EVENTO: mostrar / ocultar el campo "Otra categoría"
// Usamos addEventListener porque la lógica lee un valor y modifica otro elemento
// — más compleja que una acción de un solo propósito (eso sería onclick).
// =============================================================================
const selectCategoria = document.getElementById("categoria");

selectCategoria.addEventListener("change", function () {
  const campoOtra = document.getElementById("otra-categoria");

  if (selectCategoria.value === "otra") {
    campoOtra.style.display = "block";
  } else {
    campoOtra.style.display = "none";
    campoOtra.value = "";
  }

  console.log("Categoría seleccionada:", selectCategoria.value);
});

// =============================================================================
// FUNCIÓN: agregar tarea
// Llamada con onclick="agregarTarea()" — acción simple, un solo propósito.
// =============================================================================
function agregarTarea() {
  const inputTarea = document.getElementById("input-tarea");
  const spanError = document.getElementById("error");
  const campoOtra = document.getElementById("otra-categoria");

  // .trim() elimina espacios al inicio y al final.
  // Sin él, presionar la barra espaciadora pasaría la validación.
  const textoTarea = inputTarea.value.trim();

  // Campo vacío → mostrar error en pantalla, NO con alert().
  // alert() pausa el script y es intrusivo; el span da feedback sin interrumpir.
  if (textoTarea === "") {
    spanError.textContent = "El campo no puede estar vacío.";
    console.log("Intento de agregar tarea vacía — operación cancelada.");
    return; // salir de la función sin hacer nada más
  }

  spanError.textContent = ""; // borrar error previo si lo había

  const categoriaValor = selectCategoria.value;
  let etiqueta =
    categoriaValor === "otra"
      ? campoOtra.value.trim() || "Otra"
      : categoriaValor.charAt(0).toUpperCase() + categoriaValor.slice(1);

  // Objeto que representa una tarea — todo su estado en un solo lugar
  const nueva = {
    id: idCounter++,
    texto: textoTarea,
    categoria: etiqueta,
    emoji: emojis[categoriaValor],
    hecha: false,
    urgente: false,
  };

  tareas.push(nueva);
  console.log("Nueva tarea agregada:", nueva.texto, "| ID:", nueva.id);

  renderTareas();
  actualizarContador();

  // Dejar el formulario limpio para la próxima tarea
  inputTarea.value = "";
  campoOtra.value = "";
  campoOtra.style.display = "none";
  selectCategoria.value = "trabajo";
}

// =============================================================================
// FUNCIÓN: reconstruir toda la lista desde el array `tareas`
// Cada vez que cambia el estado de cualquier tarea, re-renderizamos todo.
// =============================================================================
function renderTareas() {
  const lista = document.getElementById("lista-tareas");
  const emptyState = document.getElementById("empty-state");

  lista.innerHTML = "";

  if (tareas.length === 0) {
    lista.style.display = "none";
    emptyState.style.display = "block";
    return;
  }

  lista.style.display = "block";
  emptyState.style.display = "none";

  tareas.forEach(function (tarea) {
    const li = document.createElement("li");
    li.classList.add("tarea");
    if (tarea.hecha) li.classList.add("hecha");
    if (tarea.urgente) li.classList.add("urgente");

    // innerHTML construye el contenido interno del <li>:
    // punto de estado | texto y categoría | botones de acción
    li.innerHTML = `
            <span class="tarea-dot"></span>
            <span class="tarea-info">
                <span class="tarea-texto">${tarea.texto}</span>
                <span class="tarea-cat">${tarea.emoji} ${tarea.categoria}</span>
            </span>
            <div class="tarea-acciones" onclick="event.stopPropagation()">
                <button class="btn-accion" onclick="marcarHecha(${tarea.id})">
                    ${tarea.hecha ? "Deshacer" : "Hecha"}
                </button>
                <button class="btn-accion" onclick="marcarUrgente(${tarea.id})">
                    ${tarea.urgente ? "Normal" : "Urgente"}
                </button>
                <button class="btn-accion btn-eliminar" onclick="eliminarTarea(${tarea.id})">
                    Eliminar
                </button>
            </div>
        `;

    // Clic en la fila (fuera de los botones) → abre el drawer.
    // Los botones tienen stopPropagation(), así que no llegan hasta aquí.
    li.addEventListener("click", function () {
      abrirDrawer(tarea.id);
    });

    lista.appendChild(li);
  });
}

// =============================================================================
// FUNCIÓN: actualizar los números del contador en el sidebar
// .textContent solo reemplaza el número dentro del <span>, no toda la frase.
// =============================================================================
function actualizarContador() {
  const total = tareas.length;
  const hechas = tareas.filter(function (t) {
    return t.hecha;
  }).length;
  document.getElementById("total").textContent = total;
  document.getElementById("hechas").textContent = hechas;
}

// =============================================================================
// FUNCIÓN: alternar estado "hecha" de una tarea
// =============================================================================
function marcarHecha(id) {
  const tarea = tareas.find(function (t) {
    return t.id === id;
  });
  if (!tarea) return;

  tarea.hecha = !tarea.hecha;
  renderTareas();
  actualizarContador();
  if (drawerOpenId === id) actualizarDrawer(id); // sincronizar el drawer si está abierto

  console.log("Tarea ID", id, "→ hecha:", tarea.hecha);
}

// =============================================================================
// FUNCIÓN: alternar estado "urgente" de una tarea
// =============================================================================
function marcarUrgente(id) {
  const tarea = tareas.find(function (t) {
    return t.id === id;
  });
  if (!tarea) return;

  tarea.urgente = !tarea.urgente;
  renderTareas();
  if (drawerOpenId === id) actualizarDrawer(id);

  console.log("Tarea ID", id, "→ urgente:", tarea.urgente);
}

// =============================================================================
// FUNCIÓN: eliminar una tarea
// confirm() devuelve true si el usuario acepta, false si cancela.
// =============================================================================
function eliminarTarea(id) {
  const ok = confirm("¿Eliminar esta tarea?");
  if (!ok) return;

  // filter crea un nuevo array sin la tarea eliminada
  tareas = tareas.filter(function (t) {
    return t.id !== id;
  });
  renderTareas();
  actualizarContador();
  if (drawerOpenId === id) cerrarDrawer(); // cerrar si la tarea del drawer fue eliminada

  console.log("Tarea ID", id, "eliminada. Restantes:", tareas.length);
}

// =============================================================================
// DRAWER — abrir, actualizar y cerrar
// =============================================================================

function abrirDrawer(id) {
  drawerOpenId = id;
  actualizarDrawer(id);
  document.getElementById("drawer").classList.add("open");
  document.getElementById("drawer-overlay").classList.add("visible");
}

// Pobla el drawer con los datos actuales de la tarea
function actualizarDrawer(id) {
  const tarea = tareas.find(function (t) {
    return t.id === id;
  });
  if (!tarea) return;

  document.getElementById("drawer-emoji").textContent = tarea.emoji;
  document.getElementById("drawer-titulo").textContent = tarea.texto;

  let badgesHTML = `<span class="badge badge-cat">${tarea.emoji} ${tarea.categoria}</span>`;
  if (tarea.hecha)
    badgesHTML += `<span class="badge badge-hecha">✓ Completada</span>`;
  if (tarea.urgente)
    badgesHTML += `<span class="badge badge-urgente">⚡ Urgente</span>`;
  document.getElementById("drawer-badges").innerHTML = badgesHTML;

  // El texto del botón cambia según el estado actual
  document.getElementById("drawer-btn-hecha").textContent = tarea.hecha
    ? "Desmarcar como hecha"
    : "Marcar como hecha";
  document.getElementById("drawer-btn-urgente").textContent = tarea.urgente
    ? "Quitar urgente"
    : "Marcar como urgente";
}

function cerrarDrawer() {
  drawerOpenId = null;
  document.getElementById("drawer").classList.remove("open");
  document.getElementById("drawer-overlay").classList.remove("visible");
}

// Cerrar drawer: botón X y clic en el overlay
document.getElementById("drawer-close").addEventListener("click", cerrarDrawer);
document
  .getElementById("drawer-overlay")
  .addEventListener("click", cerrarDrawer);

// Acciones desde el drawer — los botones dentro del panel también modifican el estado
document
  .getElementById("drawer-btn-hecha")
  .addEventListener("click", function () {
    if (drawerOpenId !== null) marcarHecha(drawerOpenId);
  });

document
  .getElementById("drawer-btn-urgente")
  .addEventListener("click", function () {
    if (drawerOpenId !== null) marcarUrgente(drawerOpenId);
  });

document
  .getElementById("drawer-btn-eliminar")
  .addEventListener("click", function () {
    if (drawerOpenId !== null) eliminarTarea(drawerOpenId);
  });

// =============================================================================
// PUNTO EXTRA: limpiar todas las completadas
// El confirm() informa cuántas se van a eliminar antes de confirmar.
// =============================================================================
document.getElementById("btn-limpiar").addEventListener("click", function () {
  const completadas = tareas.filter(function (t) {
    return t.hecha;
  });
  const cantidad = completadas.length;

  if (cantidad === 0) {
    alert("No hay tareas completadas para limpiar.");
    return;
  }

  const ok = confirm("¿Eliminar " + cantidad + " tarea(s) completada(s)?");
  if (ok) {
    tareas = tareas.filter(function (t) {
      return !t.hecha;
    });
    renderTareas();
    actualizarContador();
    cerrarDrawer();
    console.log("Limpiar completadas: se eliminaron", cantidad, "tareas.");
  }
});
