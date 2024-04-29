const inputTareas = document.querySelector("#ingresarTarea")   //input
const botonAgregar = document.querySelector("#btnAgregar")      //boton
const listaHtml = document.querySelector("#tbody")              //body
const totalTareas = document.querySelector("#total_tareas")    //total
const tareasRealizadas = document.querySelector("#tareas_realizadas")

const listaDeTareas = [
    {id: 200, nombre: "Estudiar",completado: false},
    {id: 300, nombre: "Hacer las compras",completado: false},
    {id: 400, nombre: "Ordenar la ropa",completado: false}
]

botonAgregar.addEventListener("click", () => {
    const tareasNuevas = { id: Date.now(), nombre: inputTareas.value,completado: false}
    listaDeTareas.push(tareasNuevas)
    inputTareas.value = ""

    render()
})

function render () {
    let html = "";
    for (const tarea of listaDeTareas) {
        html += `
        <tr>
            <td> ${tarea.id}</td>
            <td> ${tarea.nombre}</td>
            <td>
                <input type="checkbox" ${tarea.completado ? "checked" : ""} onchange ="realizadas(${tarea.id})">
                <button onclick="borrar(${tarea.id})"> x </button>
            </td>
        </tr>
    `}

    listaHtml.innerHTML = html
    totalTareas.innerHTML = listaDeTareas.length
    tareasRealizadas.innerHTML = listaDeTareas.filter(( { completado }) => completado).length
}

function borrar (id) {
    const index = listaDeTareas.findIndex (Element => Element.id == id);
    listaDeTareas.splice (index, 1);
    render();
}

function realizadas(id) {
    const index = listaDeTareas.findIndex((tarea) => tarea.id == id)
    listaDeTareas [index].completado = ! listaDeTareas [index].completado
    render()
}
