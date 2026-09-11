import { useNavigate } from "react-router-dom";

export default function SectionButtons() {
  const navigate = useNavigate();

  return (
    <div className="flex gap-10 mt-10">
      <button
        onClick={() => navigate("/user")}
        className="bg-white shadow px-6 py-3 rounded-md font-semibold hover:shadow-md transition"
      >
        User Home Section
      </button>
      <button
        onClick={() => navigate("/admin")}
        className="bg-white shadow px-6 py-3 rounded-md font-semibold hover:shadow-md transition"
      >
        Admin Home Section
      </button>
    </div>
  );
}
