import {model,Schema} from "mongoose";

const materia=new Schema({    //creando un objeto del tipo esquema dentro de la variable empleado
    nombre:String,
    creditos:Number,
    temas:Number,
    empleado:{
        type:Schema.Types.ObjectId,ref:"empleado"    //relacionar empleado con materia
    },
   created: {
        type:Date,
        default:Date.now
   }
});

export default model("materia",materia);