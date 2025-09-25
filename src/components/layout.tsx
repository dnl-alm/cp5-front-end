import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="min-h-screen bg-[#5682B1]">
      <nav className="bg-black mb-6 shadow">
        <div className="flex justify-start items-center p-3">
          <h1 className="text-white font-bold text-4xl h-1">
            StudyLog
          </h1>
        </div>
        <div className="flex justify-end items-center p-4 gap-5">
          <Link to="/" className="text-[white] hover:underline font-bold text-lg">
            HOME
          </Link>
          <Link to="/add" className="bg-white text-black px-4 py-2 rounded transition-transform duration-200 hover:scale-105">

            Nova sessão
          </Link>
        </div>
      </nav>
      <main className="flex flex-col justify-center items-center px-4 w-full">
        <Outlet />
      </main>
    </div>
  );
}