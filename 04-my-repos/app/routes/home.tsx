import type { Route } from "./+types/home";
import { Welcome } from "@/welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "My Repos" },
    { name: "description", content: "My repos" },
  ];
}

export default function Home() {
  return <Welcome />;
}
