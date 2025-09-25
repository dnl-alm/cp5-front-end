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
        className="bg-white shadow rounded-lg p-4 flex flex-col gap-3 mb-5 w-4/5 font-bold"
        >
            <label htmlFor="session-subject">Matéria de Estudo</label>
            <input
            type="text"
            id="session-subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="materia de estudo"
            className="border rounded p-2"
            />

            <label htmlFor="session-minutes">Duração (min)</label>
            <input
            type="number"
            id="session-minutes"
            value={minutes}
            onChange={(e) => setMinutes(Number(e.target.value))}
            placeholder="Duração (min)"
            className="border rounded p-2"
            />

            <label htmlFor="session-date">Data</label>
            <input
            type="date"
            id="session-date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="Data"
            className="border rounded p-2"
            />

            <label htmlFor="session-notes">Anotações</label>
            <input
            type="text"
            id="session-notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Anotações"
            className="border rounded p-2"
            />

            <button
            type="submit"
            className="bg-yellow-500 text-black font-bold px-4 py-2 rounded hover:bg-yellow-700 transition-transform duration-200 hover:scale-101"
            >
            Adicionar sessão
            </button>
    </form>
    )
}