// 1) JavaScript en Node: se ejecuta desde la terminal.
console.log("Hola desde Node.js");
// 2) TypeScript: variables con tipo (anotaciones).
let nombre: string = "María Torres";
let creditos: number = 18;
let activo: boolean = true;
console.log(nombre, creditos, activo);
// 3) Función tipada: recibe y devuelve tipos declarados.
function saludar(persona: string): string {
return "Bienvenido/a, " + persona;
}
console.log(saludar(nombre));
// 4) Interfaz: describe la forma de un dato.
interface Curso {
nombre: string;
creditos: number;
}
const curso: Curso = { nombre: "JavaScript Avanzado", creditos: 3 };
console.log(`Curso: ${curso.nombre} (${curso.creditos} créditos)`);


function validarCredito(valor2:number =10):string {

    if (valor2>20){
        return "Escribe un credito real";
    }else if (valor2 < 12){
        return "Malo";
    }else {
        return "Bueno";
    }

}
console.log(validarCredito());