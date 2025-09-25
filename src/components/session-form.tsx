import { useState } from "react";
import type { StudySession } from "../types/study-session";

interface SessionFormProps {
    onAdd: (session: StudySession) => void
}

export function SessionForm( {onAdd}: SessionFormProps ) {
    const [subject, setSubject] = useState("")
    const [minutes, setMinutes] = useState(0)
    const [date, setDate] = useState("")
    const [notes, setNotes] = useState("")
    
    function handleSubmit(event: React.FormEvent) {
        event.preventDefault()

        const session: StudySession = {
            id: crypto.randomUUID(),
            subject,
            minutes,
            date,
            notes,
        };

        onAdd(session)

        setSubject("")
        setMinutes(0)
        setDate("")
        setNotes("")
    }

    return(
        <form
        onSubmit={handleSubmit}
        className=""
        >
            <label htmlFor="session-subject">Matéria de Estudo</label>
            <input
            type="text"
            id="session-subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="materia de estudo"
            className=""
            />

            <label htmlFor="session-minutes">Duração (min)</label>
            <input
            type="number"
            id="session-minutes"
            value={minutes}
            onChange={(e) => setMinutes(Number(e.target.value))}
            placeholder="Duração (min)"
            className=""
            />

            <label htmlFor="session-date">Data</label>
            <input
            type="date"
            id="session-date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="Data"
            className=""
            />

            <label htmlFor="session-notes">Anotações</label>
            <input
            type="text"
            id="session-notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Anotações"
            className=""
            />

            <button
            type="submit"
            className=""
            >
            Adicionar sessão
            </button>
    </form>
    )
}