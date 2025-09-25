import { useMemo } from "react"
import type { StudySession } from "../types/study-session"
import { StudyForm } from "../components/session-form"

interface AddStudyProps {
    sessions: StudySession[]
    onAdd: (session: StudySession) => void
}

export function AddStudy( {sessions , onAdd}: AddStudyProps ) {
    const sessionTotal = useMemo(() => {
        return sessions.length
    }, [sessions])

    const sessionMinutes = useMemo(() => {
        let sessionMinutes: number = 0;
        sessions.map((sessions) => {
            sessionMinutes += sessions.minutes
        }, [sessions])

        const hours = sessionMinutes / 60
        const minutes = sessionMinutes % 60

        return `Horas: ${hours} Minutos: ${minutes}`
    }, [sessions])

    return (
        <>
            <h2 className="">
            Adicionar nova sessão de estudos
            </h2>

            <p className="">Total de sessões: {sessionTotal}</p>

            <p className="">Tempo da sessão: {sessionMinutes}</p>

            <StudyForm onAdd={onAdd} />
      
        </>
    )
}