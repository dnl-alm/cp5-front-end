import type { StudySession } from "../types/study-session";
import { StudyResume } from "./session-resume";

interface SessionListProps {
    sessionList: StudySession[]
}

export function SessionList( {sessionList}: SessionListProps ) {
    return(
        <>
            {sessionList.map((value) => {
                return <StudyResume session={value} /> 
            })}
        </>
    )
}