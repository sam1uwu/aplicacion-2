import {model,Schema} from "mongoose";

const empleado=new Schema({    //creando un objeto del tipo esquema dentro de la variable empleado
    nombre:String,
    apellidos:String,
    email:{
        type:String,
        unique:true     //para que sea un dato unico
    },
    rol:String,
    fechaNac:Date,
    created:{
        type:Date,
        default:Date.now //para cuando modifique un dato se actualice
    }
});

export default model("empleado",empleado);