import { Router } from "https://deno.land/x/oak/mod.ts";
import Exercise from "../../models/exercise.model.ts";

const router = new Router();

// router.route("/").get((req, res) => {

// });

// router.route("/add").post((req, res) => {

// });

// router.route("/add").post((req, res) => );
router
  .get(
    "/api/exercise",
    ({ request, response }: { request: any; response: any }) => {
      Exercise.find()
        .then((exercises) => response.json(exercises))
        .catch((err) => response.status(400).json("Error: " + err));
    },
  )
  .post("/api/exercise", (
    { request, response }: { request: any; response: any },
  ) => {
    const username = request.body.username;
    const description = request.body.description;
    const duration = Number(request.body.duration);
    const date = Date.parse(request.body.date);

    const newExercise = new Exercise({
      username,
      description,
      duration,
      date,
    });

    newExercise.save()
      .then(() => response.json("Exercise added!"))
      .catch((err) => response.status(400).json("Error: " + err));
  })
  .get(
    "/api/exercise/:id",
    ({ request, response }: { request: any; response: any }) => {},
  )
  .put(
    "/api/exercise/:id",
    ({ request, response }: { request: any; response: any }) => {},
  )
  .delete(
    "/api/exercise/:id",
    ({ request, response }: { request: any; response: any }) => {},
  );

export default router;
