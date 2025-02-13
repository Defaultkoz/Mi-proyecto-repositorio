const express=require('express');
const app=express()
const port=3001
const sqlite3= require('sqlite3')
const db = new sqlite3.Database('db.sql'); // Puedes usar ':memory:' para una base de datos en memoria o especificar un archivo // Crear una tabla de ejemplo
 db.serialize(() => { db.run(" CREATE TABLE IF NOT EXISTS users (id INT, name TEXT)");
     db.run("INSERT INTO users (id,name) VALUES (1, 'John Doe')");
      db.run("INSERT INTO users (id, name) VALUES (2, 'Jane Doe')");
     });

app.get('/',(req,res)=>{
   const usuario= req.params.users
   if (usuario==usuario){
  res.send("¡Hola mundo cruel!")}
})
app.post('/',(req,res)=>{
  res.send("Enviado")  
})
app.listen(port,()=>{
    console.log(
        `Servidor por el puerto ${port}`
    )
})
