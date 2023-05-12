import routerx from "express-promise-router";
import empleadoRouter from "./empleados.routes";
import materiaRouter from "./materia.routes";


const router=routerx();

router.use("/empleado",empleadoRouter)
router.use("/materia",materiaRouter)

export default router;