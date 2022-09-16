import { query, WILDERS_PATH } from "../../services/rest";

export async function createWilder(firstname, lastname) {
  return query(WILDERS_PATH, "POST", { firstname, lastname });
}
