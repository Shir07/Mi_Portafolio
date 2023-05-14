export class persona{
    id?:number;
    nombre:String;
    apellido: String;
    imagen: String;
    titulo: String;
    descripcion: String;

    constructor(nombre:String, apellido: String, imagen:String, titulo:String, descripcion:String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.imagen = imagen; 
        this.titulo = titulo;
        this.descripcion = descripcion;

    }
}