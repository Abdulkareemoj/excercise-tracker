export default {
  getAllUsers: ({ request, response }: { request: any; response: any }) => {
    User.find()
      .then((users) => response.json(users))
      .catch((err) => response.status(400).json("Error: " + err));
  },

  createUser: async (
    { request, response }: { request: any; response: any },
  ) => {
    const username = request.body.username;

    const newUser = new User({ username });

    newUser.save()
      .then(() => response.json("User added!"))
      .catch((err) => response.status(400).json("Error: " + err));
  },
  getUserById: () => {},
  updateUserById: async () => {},
  deleteUserById: () => {},
};
