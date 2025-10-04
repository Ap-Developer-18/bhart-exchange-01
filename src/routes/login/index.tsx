import { createFileRoute } from "@tanstack/react-router";
import LoginPage from "../../homepage/login";

export const Route = createFileRoute("/login/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <LoginPage />
    </div>
  );
}
