import { Link } from "react-router-dom";
import type { StudySession } from "../types/study-session";

interface SessionResumeProps {
    session: StudySession
}

export function StudyResume( {session}: SessionResumeProps ) {
    return (
        <div className="w-3/5 rounded-lg shadow px-3 py-4 flex flex-col gap-5 mb-3 bg-[white]">

            <div className="flex flex-col gap-3">

                <div className="flex justify-between items-start">

                    <h2 className="font-bold text-black">{session.subject}</h2>

                    <Link
                    to={`/session/${session.id}`}
                    state={{ session }}
                    className="text-white font-bold bg-yellow-500 rounded border p-2 transition-transform duration-200 hover:scale-105"
                    >
                    Detalhes
                    </Link>

                </div>

                <h3>Data: {session.date}</h3>
                <h3>Anotações: {session.notes}</h3>

            </div>


        </div>
    )
}