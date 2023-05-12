import models from "../models";

export default{
    crearMateria: async (req,res,next)=>{      //asyn = asincrono
    try {
            //const {nombre,apellidos,email,rol,fechaNac}=req.body; //para usar el campo que necesite
            const materia=new models.Materias(req.body) //para usar todo los campos
    
            const guardarMateria=await materia.save();        //usar siempre await para asyn y crear tiempos de espera
            res.status(200).json(guardarMateria);
            console.log(req.body);
    } catch (error) {
        res.status(500).send({
            msg:"Ocurrido un error al guardar"
        });
        next(error);
}
},
consultarEmpleados: async(req,res,next)=>{
    try {
        
        const consultar= await models.Empleados.find(); //para consultar empleados
        res.json(consultar);

    } catch (error) {
        res.status(500).send({
            msg:"Ocurrido un error al guardar"
        });
        next(error);
        
    }
},

consultarOneEmpleado: async(req,res,next)=>{
    try {
        
        const consultarOneEmp = await models.Empleados.findById(req.params.id); //para consultar los datos de un solo empleado
        if(!consultarOneEmp){
            res.status(404).send({
                msg:"No se encuentra el registro"
            })
        }else{
            res.status(200).json(consultarOneEmp);
        }

    } catch (error) {
        res.status(500).send({
            msg:"Ocurrido un error al guardar"
        });
        next(error);
        
    }
},
consultarMaterias: async(req,res,next)=>{
    try {
        
        const consultar= await models.Materias.find({empleado: req.params.empleado}).populate({path: 'empleado'}); //para consultar materias que pertenece a empleao
        res.json(consultar);
        console.log(consultar)

    } catch (error) {
        res.status(500).send({
            msg:"Ocurrido un error al guardar"
        });
        next(error); 
    }

},
consultarOneMateria: async(req,res,next)=>{
    try {
        
        const consultarOneMat = await models.Materias.findById(req.params.id); //para consultar los datos de un solo empleado
        if(!consultarOneMat){
            res.status(404).send({
                msg:"No se encuentra el registro"
            })
        }else{
            res.status(200).json(consultarOneMat);
        }

    } catch (error) {
        res.status(500).send({
            msg:"Ocurrido un error al guardar"
        });
        next(error);
        
    }
},
}