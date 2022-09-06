class Persona {

    constructor(nombre, apellido, telefono, direccion) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._telefono = telefono;
        this._direccion = direccion;

    }

    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get apellido() {
        return this._apellido;
    }
    set apellido(apellido) {
        this.apellido = apellido;
    }
    get telefono() {
        return this._telefono;
    }
    set telefono(telefono) {
        this._telefono = telefono;

    }

    get direccion() {
        return this._direccion;
    }

    set direccion(direccion) {
        this._direccion = direccion;
    }
}


const personas = [
    new Persona('Karla', 'Fernandez', '1231241541', 'Portales de alicante'),
    new Persona('Beyner', 'web', '124123412', 'Portales de alicante')
]

function mostrarPersonas() {
    let texto = '';
    for (let persona of personas) {
        texto += `<li>${persona.nombre} - ${persona.apellido} - Telefono ${persona.telefono} - Direccion : ${persona.direccion} </li> </br>`;
        console.log(texto);
    }
    document.getElementById('personas').innerHTML = texto;

}

function agregarPersona() {
    let mensaje = '';
    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];
    const telefono = forma['telefono'];
    const direccion = forma['direccion']
   

    if(nombre.value != '' && apellido.vale != '' && telefono.value != '' && direccion.value != '') {
        const persona = new Persona(nombre.value, apellido.value, telefono.value, direccion.value);
        personas.push(persona);
        mensaje = 'Se Inserto Nuevo contacto';
        document.getElementById('mensaje').innerHTML = mensaje;
        mostrarPersonas();
    }else{
        
        mensaje = 'HUBO UN ERROR AL INSERTAR LA ';
    }

}