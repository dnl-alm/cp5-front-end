import { useLocation, useParams } from "react-router-dom";
import { SessionCard } from "../components/session-card";


export function SessionDetails() {
  const { id } = useParams();

  const { state } = useLocation();

  return (
    <>
      <h2 className="font-bold text-gray-600 text-xl mb-3">
        Detalhes da sessão - ID {id}
      </h2>

      <SessionCard session={state.session} />
    </>
  );
}