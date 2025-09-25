import { useMemo } from "react"
import type { StudySession } from "../types/study-session"
import { SessionForm } from "../components/session-form"

interface AddSessionProps {
    sessions: StudySession[]
    onAdd: (session: StudySession) => void
}

export function AddSession( {sessions , onAdd}: AddSessionProps ) {
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
            <h2 className="font-bold text-white text-3xl  mb-3">
            Adicionar nova sessão de estudos
            </h2>

            <p className="text-lg font-bold text-gray-800">Total de sessões: {sessionTotal}</p>

            <p className="text-lg font-bold text-gray-800 pb-4">Tempo da sessão: {sessionMinutes}</p>

            <SessionForm onAdd={onAdd} />
      
        </>
    )
}