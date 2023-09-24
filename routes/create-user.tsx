import { useState } from "preact/hooks";
import { Handlers, PageProps } from "$fresh/server.ts";

interface User {
  username: string;
}

export const handler: Handlers<User> = {
  async POST(req, ctx) {
    const user = await req.json();
    // Add user to database here
    return new Response(JSON.stringify(user), { status: 201 });
  },
};

export default function createUser() {
  const [username, setUsername] = useState("");

  const onChangeUsername = (e: any) => {
    setUsername(e.target.value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    const user = {
      username: username,
    };

    fetch("http://localhost:8000/users/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));

    setUsername("");
  };

  return (
    <div>
      <h3>Create New User</h3>
      <form onSubmit={onSubmit}>
        <div className="">
          <label>Username:</label>
          <input
            type="text"
            required
            className=""
            value={username}
            onChange={onChangeUsername}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
