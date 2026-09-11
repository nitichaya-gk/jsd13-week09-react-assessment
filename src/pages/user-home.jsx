import { useState, useEffect } from "react";
import Nav from "../components/navbar";
import SectionButtons from "../components/section-buttons";
import MembersTable from "../components/members-table";
import { getMembers } from "../services/members-api";

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
