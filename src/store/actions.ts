import { CompaniesAction, ADD_COMPANY } from "./types";
import { Company } from "../types";

export function addCompany(payload: Company): CompaniesAction {
  return {
    type: ADD_COMPANY,
    payload
  };
}
