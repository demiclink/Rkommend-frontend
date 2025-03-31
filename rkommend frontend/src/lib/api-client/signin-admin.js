import { BASE_URL } from "../../config";

export const signinAdmin = async (body) => {
  const res = await fetch(`${BASE_URL}/api/admins/signin`, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) throw new Error("Failed to sign in as admin");

  return res.json();
};
