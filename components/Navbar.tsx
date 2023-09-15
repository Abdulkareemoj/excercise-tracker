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
            <a href="/" className="">Exercises</a>
          </li>
          <li className="">
            <a href="/create" className="">Create Exercise Log</a>
          </li>
          <li className="">
            <a href="/user" className="">Create User</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
