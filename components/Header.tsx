type Props = {
  active: string;
};
export default function Header({ active }: Props) {
  const links = [
    { name: "ExerTracker", href: "/" },
    { name: "Exercises", href: "/exerciselist" },
    { name: "Create Exercise Log", href: "/create-exercise" },
    { name: "Create User", href: "/create-user" },
    { name: "Edit Exercise", href: "/edit/:id" },
  ];
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
    // <nav className="">
    //   <a href="/" className="">ExcerTracker</a>
    //   <div className="">
    //     <ul className="">
    //       <li className="">
    //         <a href="/exerciselist" className="">Exercises</a>
    //       </li>
    //       <li className="">
    //         <a href="/create-exercise" className="">Create Exercise Log</a>
    //       </li>
    //       <li className="">
    //         <a href="/user" className="">Create User</a>
    //       </li>
    //       <li className="">
    //         <a href="/edit/:id" className="">Edit Exercise</a>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
    <div class="bg-white w-full max-w-screen-lg py-6 px-8 flex flex-col md:flex-row gap-4">
      <div class="text-2xl ml-1 font-bold">
        Fresh
      </div>
      <ul class="flex items-center gap-6">
        {links.map((link) => (
          <li>
            <a
              href={link.href}
              class={"text-gray-500 hover:text-gray-700 py-1 border-gray-500" +
                (link.href === active ? "font-bold border-b-2" : "")}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
