import { Suspense, useCallback, useState } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import type { StudySession } from "./types/study-session";
import { AddSession } from "./pages/add-session";
import { NotFound } from "./pages/not-found";
import { Fallback } from "./components/fallback";


function App() {
  const [sessions, setSession] = useState<StudySession[]>([]);

    const addSession = useCallback((sessions: StudySession) => {
      setSession((prev) => [...prev, sessions])
    }, []);


  return (
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={Fallback}>
        <Suspense fallback={<Loading />}>
          <Route>
            <Routes path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/add" element={<AddSession onAdd={addSession} sessions={sessions} />} />
              <Route path="/session/:id" element={<SessionDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Route>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App
