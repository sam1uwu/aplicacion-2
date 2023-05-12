import models from "../models";

export default{
    crearEmpleado: async (req,res,next)=>{      //asyn = asincrono
    try {
            //const {nombre,apellidos,email,rol,fechaNac}=req.body; //para usar el campo que necesite
            const empleado=new models.Empleados(req.body) //para usar todo los campos
    
            const guardarEmpleado=await empleado.save();        //usar siempre await para asyn y crear tiempos de espera
            res.status(200).json(guardarEmpleado);
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

};