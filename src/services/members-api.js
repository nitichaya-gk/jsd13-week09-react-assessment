const MEMBERS_API_URL = "https://67eca027aa794fb3222e43e2.mockapi.io/members";

function normalizeMember(member) {
  return {
    ...member,
    lastName: member.lastName ?? member.lastname ?? "",
  };
}

async function request(path = "", options = {}) {
  const response = await fetch(`${MEMBERS_API_URL}${path}`, options);

  if (!response.ok) {
    throw new Error(`Member request failed: ${response.status}`);
  }

  return response.status === 204 ? null : response.json();
}

export async function getMembers() {
  const members = await request();
  return members.map(normalizeMember);
}

export function createMember({ name, lastName, position }) {
  return request("", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, lastName, position }),
  });
}

export function deleteMember(id) {
  return request(`/${id}`, { method: "DELETE" });
}
