import {Router} from "express";  // Importing Router from Express
import { login, register } from "../controllers/user.controller.js";  // Importing user controller functions

const Router = Router();  // Creating a new Router instance

router.route("/login").post(login);  // Defining the route for user login
router.route("/register").post(register);  // Defining the route for user registration
router.route("/add_to_activity")
router.route("/get_all_activity")

export default Router;  // Exporting the Router instance for use in other files