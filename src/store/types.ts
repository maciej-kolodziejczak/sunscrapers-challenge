import { Company } from "../types";

export const ADD_COMPANY = "ADD_COMPANY";
export const REMOVE_COMPANY = "REMOVE_COMPANY";
export const CLEAR_COMPANIES = "CLEAR_COMPANIES";

export interface AddCompanyAction {
  type: typeof ADD_COMPANY;
  payload: Company;
}

export interface RemoveCompanyAction {
  type: typeof REMOVE_COMPANY;
  payload: Company;
}

export interface ClearCompaniesAction {
  type: typeof CLEAR_COMPANIES;
}

export type CompaniesAction =
  | AddCompanyAction
  | RemoveCompanyAction
  | ClearCompaniesAction;
