import { SessionList } from "../components/session-list";
import type { StudySession } from "../types/study-session";


interface HomeProps {
  sessions: StudySession[]
}

export function Home( { sessions }: HomeProps) {
  return (
    <>
      <h2 className="font-bold text-[#000000] text-2xl mb-6">
        Página Inicial - Lista de Sessões
      </h2>
 
      <SessionList sessionList={sessions}  />

    </>
  );
}