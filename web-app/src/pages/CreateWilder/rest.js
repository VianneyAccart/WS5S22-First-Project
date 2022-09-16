import { query, SCHOOLS_PATH, WILDERS_PATH } from "../../services/rest";

export async function createWilder(firstname, lastname, school) {
  return query(WILDERS_PATH, "POST", { firstname, lastname, school });
}

export async function fetchSchools() {
  return query(SCHOOLS_PATH, "GET");
}
