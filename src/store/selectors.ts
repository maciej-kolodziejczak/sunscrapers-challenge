import { Company } from "../types";
import { CompaniesState } from "./state";

export function selectCompanies(state: CompaniesState): Company[] {
  return [...state.values()];
}
