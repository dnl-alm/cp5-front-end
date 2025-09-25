import { Link } from "react-router-dom";
import type { StudySession } from "../types/study-session";

interface SessionResumeProps {
    session: StudySession
}

export function StudyResume( {session}: SessionResumeProps ) {
    return (
        <div className="">

            <div className="">

                <h2>{session.subject}</h2>

                <div>

                    <Link 
                    to={`/session/${session.id}`}
                    state={session}
                    className=""
                    >
                    detalhes
                    </Link>

                </div>

                <h3>Data: {session.date}</h3>

            </div>


        </div>
    )
}