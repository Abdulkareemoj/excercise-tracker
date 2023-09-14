import { Router } from "https://deno.land/x/oak/mod.ts";
import User from "../../models/user.model.ts";
const router = new Router();

// router.route("/").get((req, res) => {

// });

// router.route("/add").post((req, res) => );
router
  .get(
    "/api/user",
    ({ request, response }: { request: any; response: any }) => {
      User.find()
        .then((users) => response.json(users))
        .catch((err) => response.status(400).json("Error: " + err));
    },
  )
  .post("/api/user", (
    { request, response }: { request: any; response: any },
  ) => {
    const username = request.body.username;

    const newUser = new User({ username });

    newUser.save()
      .then(() => response.json("User added!"))
      .catch((err) => response.status(400).json("Error: " + err));
  })
  .get(
    "/api/user/:id",
    ({ request, response }: { request: any; response: any }) => {},
  )
  .put(
    "/api/user/:id",
    ({ request, response }: { request: any; response: any }) => {},
  )
  .delete(
    "/api/user/:id",
    ({ request, response }: { request: any; response: any }) => {},
  );

export default router;
