export default {
  getAllExercises: () => {
    Exercise.find()
      .then((exercises) => res.json(exercises))
      .catch((err) => res.status(400).json("Error: " + err));
  },
  createExercise: async () => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
      username,
      description,
      duration,
      date,
    });

    newExercise.save()
      .then(() => res.json("Exercise added!"))
      .catch((err) => res.status(400).json("Error: " + err));
  },
  getExerciseById: () => {},
  updateExerciseById: async () => {},
  deleteExerciseById: () => {},
};
