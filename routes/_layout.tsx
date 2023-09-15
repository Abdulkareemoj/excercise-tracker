import { LayoutProps } from "$fresh/server.ts";
import Navbar from "../components/Navbar.tsx";
export default function Layout({ Component, state }: LayoutProps) {
  // do something with state here
  return (
    <div class="layout">
      <Navbar />
      <Component />
    </div>
  );
}
