import { createFileRoute } from "@tanstack/react-router";
import Homepage from "./homepage/home-page";

export const Route = createFileRoute("/")({
  component: Homepage,
});
