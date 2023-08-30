// Variables
let tasks = [];

// Función para agregar una tarea
function addTask(event) {
  event.preventDefault();

  // Obtener los valores del formulario
  const taskName = document.getElementById("task-name").value;
  const taskDescription = document.getElementById("task-description").value;

  // Crear un objeto tarea
  const task = {
    name: taskName,
    description: taskDescription,
    completed: false,
  };

  // Agregar la tarea al array
  tasks.push(task);

  // Limpiar los campos del formulario
  document.getElementById("task-name").value = "";
  document.getElementById("task-description").value = "";

  // Actualizar la lista de tareas
  updateTaskList();
}

// Función para modificar una tarea
function modifyTask(index, newName, newDescription, newCompleted) {
  tasks[index].name = newName;
  tasks[index].description = newDescription;
  tasks[index].completed = newCompleted;

  updateTaskList();
}

// Función para eliminar una tarea
function deleteTask(index) {
  tasks.splice(index, 1);

  updateTaskList();
}

// Función para mostrar todas las tareas
function showAllTasks() {
  tasks.forEach(function (task) {
    console.log(`Nombre: ${task.name}`);
    console.log(`Descripción: ${task.description}`);
    console.log(`Estado: ${task.completed ? "Completada" : "Pendiente"}`);
    console.log("------------------------");
  });
}

// Función para actualizar la lista de tareas
function updateTaskList() {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = "";

  // Recorrer el array de tareas y crear elementos para mostrarlas
  tasks.forEach(function (task, index) {
    const taskItem = document.createElement("div");
    taskItem.innerHTML = `
            <h3 class="${task.completed ? "completed" : ""}">${task.name}</h3>
            <p>${task.description}</p>
            <p>${task.completed ? "Completada" : "Pendiente"}</p>
            <button onclick="modifyTask(${index}, prompt('Nuevo nombre:'), prompt('Nueva descripción:'), ${!task.completed})">Modificar</button>
            <button onclick="deleteTask(${index})">Eliminar</button>
        `;
    taskList.appendChild(taskItem);
  });

  // Mostrar todas las tareas en la consola
  showAllTasks();
}

// Event Listener para el formulario de agregar tarea
document.getElementById("task-form").addEventListener("submit", addTask);
