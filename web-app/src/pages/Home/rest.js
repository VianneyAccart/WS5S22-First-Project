export async function fetchWilders() {
  const response = await fetch("/wilders");
  const wilders = await response.json();
  return wilders;
}
