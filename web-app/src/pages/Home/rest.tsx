import { HTTPVerb, query, WILDERS_PATH } from "../../services/rest";

export async function fetchWilders() {
  return query(WILDERS_PATH, HTTPVerb.GET);
}
