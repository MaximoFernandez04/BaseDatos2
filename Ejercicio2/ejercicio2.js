const fs = require('fs');

const contenido = `Nombre: Maximo
Edad: 21
Carrera: TUP

`;

fs.writeFile('archivo.txt', contenido, (error) => {
   if (error) {
     console.error('Error al escribir el archivo:', error);
   }else{
     console.log('Archivo escrito exitosamente');
   }
});

fs.readFile('archivo.txt', 'utf8', (error, data) => {
  if (error) {
    console.error('Error al leer el archivo:', error);
    return;
  }
  console.log(data);

  agregarFecha();
});

function agregarFecha() {
  const ahora = new Date();
  const fecha = ahora.toISOString().split('T')[0]; 
  const hora = ahora.toTimeString().split(' ')[0];
  const lineaFecha = `\nFecha de modificación: ${fecha} ${hora}`;

  fs.appendFile('archivo.txt', lineaFecha, (error) => {
    if (error) {
      console.error('Error al agregar la fecha:', error);
      return;
    }
    console.log('\n🕒 Fecha de modificación agregada correctamente.');
  });
}