export async function createWilder(firstname, lastname) {
  let httpStatusError = false;
  try {
    const response = await fetch("/wilders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstname, lastname }),
    });
    const message = await response.json();
    if (!response.ok) {
      httpStatusError = true;
      throw Error(message.error);
    }
    return message;
  } catch (error) {
    if (httpStatusError) throw Error(error.message);
    throw Error("Unable to reach the server. Check your internet connection");
  }
}
