import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import SectionButtons from "../components/SectionButtons";
import MembersTable from "../components/MembersTable";
import { getMembers, createMember, deleteMember } from "../services/membersApi";

export default function AdminHome() {
  const [members, setMembers] = useState([]);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");

  async function loadMembers() {
    const data = await getMembers();
    setMembers(data);
  }

  useEffect(() => {
    loadMembers();
  }, []);

  async function handleSave() {
    if (!name || !lastName || !position) return;
    await createMember({ name, lastName, position });
    setName("");
    setLastName("");
    setPosition("");
    loadMembers();
  }

  async function handleDelete(id) {
    await deleteMember(id);
    loadMembers();
  }

  return (
    <div className="min-h-screen bg-gray-200">
      <Nav />
      <div className="flex flex-col items-center pt-16">
        <h1 className="text-4xl font-extrabold text-center leading-tight">
          Generation Thailand
          <br />
          Home - Admin Section
        </h1>
        <SectionButtons />

        <div className="w-full max-w-3xl mt-14">
          <h2 className="font-bold mb-3">Create User Here</h2>

          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex-1 bg-white rounded-md px-4 py-2 outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="flex-1 bg-white rounded-md px-4 py-2 outline-none"
            />
            <input
              type="text"
              placeholder="Position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="flex-1 bg-white rounded-md px-4 py-2 outline-none"
            />
            <button
              onClick={handleSave}
              className="bg-indigo-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-indigo-700 transition"
            >
              Save
            </button>
          </div>

          <div className="mt-10">
            <MembersTable members={members} onDelete={handleDelete} />
          </div>
        </div>
      </div>
    </div>
  );
}
