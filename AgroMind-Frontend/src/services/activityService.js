const BASE_URL = import.meta.env.VITE_API_URL;

export async function addActivity(activity) {
  const res = await fetch(`${BASE_URL}/activities`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(activity),
  });
  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Failed to add activity: ${errorText}`);
  }
  return res.json();
}

export async function getActivities() {
  const res = await fetch(`${BASE_URL}/activities`);
  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Failed to fetch activities: ${errorText}`);
  }
  return res.json();
}