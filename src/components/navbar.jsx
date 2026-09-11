import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="flex justify-end gap-6 px-8 py-5 border-b border-gray-400">
      <Link to="/" className="font-medium hover:underline">
        Home
      </Link>
      <Link to="/owner" className="font-medium hover:underline">
        Owner
      </Link>
    </nav>
  );
}
