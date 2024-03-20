import  express  from "express";
import authcontroller from "../controllers/authController.js";
import isUserAuthenticated from "../middlewares/authMiddleware.js";
const router = express.Router();
router.post("/users/register",authcontroller.userRegistration);
router.post("/users/login",authcontroller.userLogin);
router.get("/users/alldata",isUserAuthenticated,authcontroller.userdata);
export default router;