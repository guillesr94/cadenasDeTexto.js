// - Una cadena de texto con tu Nombre
let nombre = "Guillermo";
// - Otra cadena de texto con tu Apellido
let apellido = "Suarez";
// - Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = `${nombre} ${apellido}`;
// - Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
console.log(estudiante.toUpperCase());
// - Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
console.log(estudiante.toLowerCase());
// - Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
console.log(estudiante.length);
// - Una variable que contenga la primera letra del Nombre
console.log(nombre.slice(0,1));
// - Otra variable que contenga la última letra del Apellido
console.log(apellido.slice(apellido.length-1));
// - Una cadena de texto que elimine los espacios de la variable "estudiante"
let cadenaSinEspacios = estudiante.replace(/\s+/g,'');
console.log(cadenaSinEspacios)
// - Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let comprobar = estudiante.includes(nombre)
console.log(comprobar)