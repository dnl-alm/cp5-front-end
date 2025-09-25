import { Link } from "react-router-dom";
import type { StudySession } from "../types/study-session";

interface SessionResumeProps {
    session: StudySession
}

export function StudyResume( {session}: SessionResumeProps ) {
    return (
        <div className="w-3/5 rounded-lg shadow px-3 py-4 flex flex-col gap-5 mb-3 bg-white">

            <div className="flex flex-col gap-3">

                <h2 className="font-bold text-gray-600">{session.subject}</h2>

                <div>

                    <Link
                    to={`/session/${session.id}`}
                    state={{ session }}
                    className="text-red-600 font-bold hover:underline rounded border border-blue-600 p-2"
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