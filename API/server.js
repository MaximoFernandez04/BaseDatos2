const express = require('express');
require('dotenv').config(); 

const app = express();


// TODO: Agregar un middleware que registre la fecha, el método, la URL y la IP del cliente.
app.use((req, res, next)=>{
    const fecha = new Date().toISOString();
    const metodo = req.method;
    const url = req.url;
    const ip = req.ip;
    console.log(`[${fecha}] ${metodo} ${url} - ${ip}`);
    next();
})

// TODO: Crear una ruta principal '/' que devuelva un mensaje de bienvenida.

app.get('/', (req, res) => {
    res.send('¡Bienvenido a la API con Express!');
});
// TODO: Crear una ruta con parámetro en la URL, por ejemplo '/saludo/:nombre'.
// Debe devolver un saludo personalizado.

app.get(`/saludo/:nombre`,(req,res)=>{      //http://localhost:3000/saludo/Maximo
    const nombre = req.params.nombre;
    res.send(`¡Hola, ${nombre}!`);
});

// TODO: Crear una ruta '/suma' que reciba num1 y num2 por query string y devuelva la suma.
// Ejemplo: /suma?num1=10&num2=5

app.get(`/suma`,(req, res)=>{
    const num1 = parseFloat(req.query.num1)
    const num2 = parseFloat(req.query.num2)

    if (!req.query.num1) {
        return res.status(400).send('Falta el parámetro num1');
    }


    res.send(`La suma de ${num1} + ${num2} es ${num1 + num2}`);
   
})

// TODO: Manejar los casos en los que los parámetros sean inválidos o falten.

// TODO: Crear una ruta extra, por ejemplo '/fecha', que devuelva la fecha actual.
app.get(`/fecha`,(req, res)=>{
    const fecha = new Date()

    res.send(`La fecha de hoy es ${fecha.toLocaleDateString()}`)  //24/10/2025
})




// Iniciar el servidor

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${process.env.PORT}`);
});
