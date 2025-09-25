import { Suspense, useCallback, useState } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import type { StudySession } from "./types/study-session";
import { Fallback } from "./components/fallback";
import { Loading } from "./components/loading";
import { Layout } from "./components/layout";

const Home = lazy(() =>
  import("./pages/home").then((m) => ({ default: m.Home }))
);

const AddSession = lazy(() =>
  import("./pages/add-session").then((m) => ({ default: m.AddSession }))
);

const SessionDetails = lazy(() =>
  import("./pages/session-details").then((m) => ({ default: m.SessionDetails }))
);

const NotFound = lazy(() =>
  import("./pages/not-found").then((m) => ({ default: m.NotFound }))
);

function App() {
  const [sessions, setSession] = useState<StudySession[]>([]);

  const addSession = useCallback((sessions: StudySession) => {
    setSession((prev) => [...prev, sessions])
  }, []);


  return (
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={Fallback}>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home sessions={sessions} />} />
              <Route path="/add" element={<AddSession onAdd={addSession} sessions={sessions} />} />
              <Route path="/session/:id" element={<SessionDetails />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App
