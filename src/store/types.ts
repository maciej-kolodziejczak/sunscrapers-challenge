import { Company } from "../types";

export const ADD_COMPANY = "ADD_COMPANY";

export interface AddCompanyAction {
  type: typeof ADD_COMPANY;
  payload: Company;
}

export type CompaniesAction = AddCompanyAction;
