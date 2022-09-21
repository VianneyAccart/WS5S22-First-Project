import {
  HTTPVerb,
  query,
  SCHOOLS_PATH,
  WILDERS_PATH,
} from "../../services/rest";
import { WilderType } from "../../types";

export async function createWilder(
  firstname: string,
  lastname: string,
  school: string
): Promise<WilderType> {
  return query(WILDERS_PATH, HTTPVerb.POST, { firstname, lastname, school });
}

export async function fetchSchools() {
  return query(SCHOOLS_PATH, HTTPVerb.GET);
}
