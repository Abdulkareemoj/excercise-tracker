import { Router } from "https://deno.land/x/oak/mod.ts";
import Exercise from "../../models/exercise.model";
import exerciseController from "../../controllers/exercise.controller.ts";

const router = new Router();

// router.route("/").get((req, res) => {

// });

// router.route("/add").post((req, res) => {

// });

// router.route("/add").post((req, res) => );
router
  .get("/api/exercise", exerciseController.getAllExercises)
  .post("/api/exercise", exerciseController.createExercise)
  .get("/api/exercise/:id", exerciseController.getExerciseById)
  .put("/api/exercise/:id", exerciseController.updateExerciseById)
  .delete("/api/exercise/:id", exerciseController.deleteExerciseById);

export default router;
