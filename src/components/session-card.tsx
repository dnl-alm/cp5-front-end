import type { StudySession } from "../types/study-session";


interface SessionCardProps {
  session: StudySession;
}

export function SessionCard({ session }: SessionCardProps) {
  return (
    <div className="bg-white shadow rounded-lg p-4 w-3/5">
      <h2 className="text-lg font-bold text-red-600">{session.subject}</h2>
      <p className="text-gray-600">Duração: {session.minutes} min</p>
      <p className="text-gray-600">Anotações: {session.notes}/</p>
      <p className="text-gray-600">Data: {session.date}</p>
    </div>
  );
}