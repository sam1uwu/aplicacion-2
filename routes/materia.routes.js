import routerx from "express-promise-router";
import materiaController from "../controllers/materia.controller";

const router=routerx();
router.post("/crearMateria",materiaController.crearMateria);
router.get("/consultarMaterias/:empleado",materiaController.consultarMaterias) //consultar todos los registros
//router.get("/consultarEmpleados",empleadosController.consultarEmpleados) //consultar todos los registros
router.get("/consultarOneMateria/:id",materiaController.consultarOneMateria)   //consultar un registro
export default router;