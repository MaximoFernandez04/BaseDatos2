const fs = require('fs');


function getFechaHoraActual() {
  const ahora = new Date();
  const fecha = ahora.toISOString().split('T')[0];
  const hora = ahora.toTimeString().split(' ')[0];
  return `[${fecha} ${hora}]`;
}

function escribirLog(mensaje) {
  const linea = `${getFechaHoraActual()} - ${mensaje}\n`;
  
  fs.appendFile('log.txt', linea, (error) => {
    if (error) {
      console.error('Error al escribir en el log:', error);
    }
  });
}

escribirLog('Inicio del programa');
escribirLog('Ejecutando tarea....');


setTimeout(() => {
  escribirLog('Tarea completadaa');
}, 5000);