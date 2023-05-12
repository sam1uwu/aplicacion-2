import routerx from "express-promise-router";
import empleadosController from "../controllers/empleados.controller";

const router=routerx();
router.post("/crearEmpleado",empleadosController.crearEmpleado);
router.get("/consultarEmpleados",empleadosController.consultarEmpleados) //consultar todos los registros
router.get("/consultarOneEmpleado/:empleado",empleadosController.consultarOneEmpleado)   //consultar un registro
export default router;