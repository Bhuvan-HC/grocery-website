export default function Navbar() {
  return (
    <nav className="w-full py-4 px-8 flex justify-between items-center bg-white sticky top-0 z-50 border-b">

      <span className="font-bold text-lg text-orange-500">
        EVORA
      </span>

      <div className="text-sm text-gray-700 space-x-6">
        <a href="/login" className="hover:text-orange-500 transition">
          Login
        </a>
        <a href="/register" className="hover:text-orange-500 transition">
          Register
        </a>
      </div>

    </nav>
  );
}