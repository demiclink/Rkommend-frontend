import { BASE_URL } from "../../config";

export const fetchManyLecturer = async (query) => {
  const url = new URL(`${BASE_URL}/api/lecturers`)
  // append query as string
  if (query) url.search = new URLSearchParams(query).toString()
  const res = await fetch(url, {
    credentials: 'include',
  });
  
  if (!res.ok) throw new Error('Failed to fetch many lecturers');

  return res.json();
}
