import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="min-h-screen bg-[#CFFFE2]">
      <nav className="bg-black mb-6 shadow">
        <div className="flex justify-center items-center p-4 gap-5">
          <Link to="/" className="text-white hover:underline font-bold">
            Home
          </Link>
          <Link to="/add" className="text-white hover:underline font-bold">
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