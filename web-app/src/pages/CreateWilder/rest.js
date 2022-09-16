export async function createWilder(firstname, lastname) {
  try {
    const response = await fetch("/wilders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstname, lastname }),
    });
    const newWilder = await response.json();
    if (!response.ok) throw Error(await response.json());
    return newWilder;
  } catch (error) {
    throw Error("Unable to reach the server. Check your internet connection");
  }
}
