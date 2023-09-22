const formulario = document.getElementById('formulario');
const tabla = document.getElementById('tabla');
const botonAgregar = document.getElementById('agregar');

botonAgregar.addEventListener('click', () => {

  // Obtener los valores ingresados por el usuario
  const id = document.getElementById('id').value;
  const producto = document.getElementById('producto').value;
  const descripcion = document.getElementById('descripcion').value;
  const costo = document.getElementById('costo').value;
  const cantidad = document.getElementById('cantidad').value; // Nuevo campo

  // Crear una nueva fila en la tabla
  const nuevaFila = tabla.insertRow(-1);

  // Insertar celdas en la nueva fila
  const celdaId = nuevaFila.insertCell(0);
  const celdaProducto = nuevaFila.insertCell(1);
  const celdaDescripcion = nuevaFila.insertCell(2);
  const celdaCosto = nuevaFila.insertCell(3);
  const celdaCantidad = nuevaFila.insertCell(4); // Nueva celda

  // Agregar los valores a las celdas
  celdaId.innerHTML = id;
  celdaProducto.innerHTML = producto;
  celdaDescripcion.innerHTML = descripcion;
  celdaCosto.innerHTML = costo;
  celdaCantidad.innerHTML = cantidad; // Mostrar la cantidad

  //limpiar los compos del formulario
  document.getElementById('id').value = '' ;
  document.getElementById('producto').value  = '' ;
  document.getElementById('descripcion').value  = '' ;
  document.getElementById('costo').value  = '' ;
  document.getElementById('cantidad').value  = '' ;

});