import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import SectionButtons from "../components/SectionButtons";
import MembersTable from "../components/MembersTable";
import { getMembers } from "../services/membersApi";

export default function UserHome() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    async function loadMembers() {
      const data = await getMembers();
      setMembers(data);
    }
    loadMembers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-200">
      <Nav />
      <div className="flex flex-col items-center pt-16">
        <h1 className="text-4xl font-extrabold text-center leading-tight">
          Generation Thailand
          <br />
          Home - User Section
        </h1>
        <SectionButtons />
        <div className="mt-14 w-full max-w-3xl">
          <MembersTable members={members} />
        </div>
      </div>
    </div>
  );
}
