export default function Navbar() {
  return (
    // <nav className="">
    //   <Link to="/" className="">ExcerTracker</Link>
    //   <div className="">
    //     <ul className="">
    //       <li className="">
    //         <Link to="/" className="">Exercises</Link>
    //       </li>
    //       <li className="">
    //         <Link to="/create" className="">Create Exercise Log</Link>
    //       </li>
    //       <li className="">
    //         <Link to="/user" className="">Create User</Link>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
    <nav className="">
      <a href="/" className="">ExcerTracker</a>
      <div className="">
        <ul className="">
          <li className="">
            <a href="/exerciselist" className="">Exercises</a>
          </li>
          <li className="">
            <a href="/create-exercise" className="">Create Exercise Log</a>
          </li>
          <li className="">
            <a href="/user" className="">Create User</a>
          </li>
          <li className="">
            <a href="/edit/:id" className="">Edit Exercise</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
