import { BASE_URL } from "../../config";

export const fetchManyInstitution = async (query) => {
  const url = new URL(`${BASE_URL}/api/institutions`)
  // append query as string
  if (query) url.search = new URLSearchParams(query).toString()
  const res = await fetch(url, {
    credentials: 'include',
  });
  
  if (!res.ok) throw new Error('Failed to fetch many institutions');

  return res.json();
}
