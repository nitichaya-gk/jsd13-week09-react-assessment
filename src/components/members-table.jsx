export default function MembersTable({ members, onDelete }) {
  return (
    <div>
      <p className="text-xs text-gray-500 mb-1">Table 1</p>
      <table className="border-collapse w-full max-w-3xl">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Last Name</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Position</th>
            {onDelete && (
              <th className="border border-gray-300 px-4 py-2 text-left">Action</th>
            )}
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td className="border border-gray-300 px-4 py-2 bg-white">{member.name}</td>
              <td className="border border-gray-300 px-4 py-2 bg-white">{member.lastName}</td>
              <td className="border border-gray-300 px-4 py-2 bg-white">{member.position}</td>
              {onDelete && (
                <td className="border border-gray-300 px-4 py-2 bg-white">
                  <button
                    onClick={() => onDelete(member.id)}
                    className="text-red-600 font-semibold hover:underline"
                  >
                    Delete
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
