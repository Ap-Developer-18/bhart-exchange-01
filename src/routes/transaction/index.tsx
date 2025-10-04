import { createFileRoute } from "@tanstack/react-router";
import Transaction from "../../molecules/transaction";

export const Route = createFileRoute("/transaction/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Transaction />
    </>
  );
}
