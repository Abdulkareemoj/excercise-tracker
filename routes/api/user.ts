import { Router } from "https://deno.land/x/oak/mod.ts";
import User from "../../models/user.model.ts";
import userController from "../../controllers/user.controller.ts";
const router = new Router();

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;

  const newUser = new User({ username });

  newUser.save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});
router
  .get("/api/user", userController.getAllUsers)
  .post("/api/user", userController.createUser)
  .get("/api/user/:id", userController.getUserById)
  .put("/api/user/:id", userController.updateUserById)
  .delete("/api/user/:id", userController.deleteUserById);

export default router;
