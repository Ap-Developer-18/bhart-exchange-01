import { createFileRoute } from "@tanstack/react-router";
import SignUpPage from "../../homepage/sign-up";

export const Route = createFileRoute("/sign-up/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <SignUpPage />
    </div>
  );
}
