import { LayoutProps } from "$fresh/server.ts";
import Header from "../components/Header.tsx";
export default function Layout({ Component, state }: LayoutProps) {
  // do something with state here
  return (
    <div class="layout">
      <Header />
      <Component />
    </div>
  );
}
