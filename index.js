//const express=requiere("express");
import express from "express";
//const cors=requiere("express");
import cors from "express";
//const mongoose=requiere("mongoose");
import mongoose from "mongoose";
import path from "path";


//importacion de las rutas
import router from "./routes";

//iniciar conexion a la base de datos
mongoose.Promise=global.Promise;        //para obtener todas las caracteristicas de mongo
const dbUrl=("mongodb://127.0.0.1:27017/proyecto2")
mongoose.connect(dbUrl,{useNewUrlParser:true,useUnifiedTopology:true})
.then(mongoose=>console.log('Conectando a la BD en el puerto 27017'))
.catch(err=>console.log(err));

//inicia express
const app=express();

app.set('port', process.env.Port || 4000);

app.use(cors()); //para no tener problema con los navegadores

app.use(express.json());//para leer paquetes json
app.use(express.urlencoded({extended:true}));//para no encriptar datos
app.use(express.static(path.join(__dirname,'public')));//para espicibicar que tendremos una carpeta tipo publico donde guardaremos cosas

app.use("/api",router);

//escuchar el puerto
app.listen(app.get('port'),()=>{
    console.log("Servidor ejecutandose en el puerto" + app.get('port'))
});
