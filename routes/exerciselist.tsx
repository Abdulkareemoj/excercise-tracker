// import { Response, ServerRequest } from "https://deno.land/std/http/server.ts";
// import { json } from "https://deno.land/std/encoding/json.ts";
// import { Context, Handlers } from "https://deno.land/x/fresh/mod.ts";
// import { useEffect, useState } from "preact/hooks";
// interface Exercise {
//   username: string;
//   description: string;
//   duration: number;
//   date: Date;
//   _id: string;
//   exercise: {
//     username: string;
//     description: string;
//     duration: number;
//     date: string;
//     _id: string;
//   };
// }

// export const handler: Handlers<{ exercise: Exercise[] }> = {
//   async GET(req: ServerRequest, ctx: Context<{ exercise: Exercise[] }>) {
//     const exercises = await fetch("http://localhost:8000/exercises/")
//       .then((res) => res.json());
//     if (!exercises) {
//       return { status: 404, body: "No exercises found" };
//     }
//     return ctx.render({ exercise: exercises });
//   },

//   async DELETE(req: ServerRequest, ctx: Context<{ exercise: Exercise[] }>) {
//     const id = req.url.split("/").pop();
//     const exercise = await fetch(`http://localhost:8000/exercises/${id}`, {
//       method: "DELETE",
//     })
//       .then((res) => res.json())
//       .catch((error) => console.log(error));
//     return ctx.render({ exercise: exercise });
//   },
// };

// export default function ExerciseList() {
//   const [exercises, setExercises] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:8000/exercises/")
//       .then((res) => res.json())
//       .then((data) => setExercises(data))
//       .catch((error) => console.log(error));
//   }, []);

//   const deleteExercise = (id) => {
//     fetch(`http://localhost:8000/exercises/${id}`, {
//       method: "DELETE",
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setExercises(exercises.filter((el) => el._id !== id));
//       })
//       .catch((error) => console.log(error));
//   };

//   const Exercise = (props: Exercise) => (
//     <tr>
//       <td>{props.exercise.username}</td>
//       <td>{props.exercise.description}</td>
//       <td>{props.exercise.duration}</td>
//       <td>{props.exercise.date.substring(0, 10)}</td>
//       <td>
//         <a href={"/edit/" + props.exercise._id}>edit</a> |{" "}
//         <a
//           href="#"
//           onClick={() => {
//             deleteExercise(props.exercise._id);
//           }}
//         >
//           delete
//         </a>
//       </td>
//     </tr>
//   );

//   return (
//     <div>
//       <h3>Logged Exercises</h3>
//       <table className="table">
//         <thead className="thead-light">
//           <tr>
//             <th>Username</th>
//             <th>Description</th>
//             <th>Duration</th>
//             <th>Date</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {exercises.map((currentexercise) => (
//             <Exercise
//               exercise={currentexercise}
//               deleteExercise={deleteExercise}
//               key={currentexercise._id}
//             />
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
