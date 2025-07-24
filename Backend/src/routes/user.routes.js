import {Router} from "express";  // Importing Router from Express

const Router = Router();  // Creating a new Router instance

router.route("/login")
router.route("/register")
router.route("/add_to_activity")
router.route("/get_all_activity")

export default Router;  // Exporting the Router instance for use in other files