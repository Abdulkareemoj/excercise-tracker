export default {
  getAllExercises: ({ request, response }: { request: any; response: any }) => {
    Exercise.find()
      .then((exercises) => response.json(exercises))
      .catch((err) => response.status(400).json("Error: " + err));
  },
  createExercise: async (
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
  },
  getExerciseById: () => {},
  updateExerciseById: async () => {},
  deleteExerciseById: () => {},
};
