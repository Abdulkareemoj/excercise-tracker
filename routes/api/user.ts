import { Router } from "https://deno.land/x/oak/mod.ts";
import User from "../../models/user.model.ts";
import userController from "../../controllers/user.controller.ts";
const router = new Router();

// router.route("/").get((req, res) => {

// });

// router.route("/add").post((req, res) => );
router
  .get("/api/user", userController.getAllUsers)
  .post("/api/user", userController.createUser)
  .get("/api/user/:id", userController.getUserById)
  .put("/api/user/:id", userController.updateUserById)
  .delete("/api/user/:id", userController.deleteUserById);

export default router;
