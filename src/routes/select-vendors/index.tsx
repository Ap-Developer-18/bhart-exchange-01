import { createFileRoute } from "@tanstack/react-router";
import SelectVendors from "../../molecules/select-vendors";

export const Route = createFileRoute("/select-vendors/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <SelectVendors />
    </div>
  );
}
