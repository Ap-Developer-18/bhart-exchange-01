import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/homepage/")({
  component: () => <div>Welcome to Homepage</div>,
});
