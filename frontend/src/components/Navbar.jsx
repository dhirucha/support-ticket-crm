import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white border-b sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        <Link
          to="/"
          className="font-bold text-2xl text-blue-600"
        >
          Support CRM
        </Link>

        <Link
          to="/create"
          className="
          bg-blue-600
          hover:bg-blue-700
          text-white
          px-5
          py-2
          rounded-lg
          transition
          "
        >
          + New Ticket
        </Link>

      </div>

    </nav>
  );
};

export default Navbar;