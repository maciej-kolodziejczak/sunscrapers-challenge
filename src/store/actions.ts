import {
  CompaniesAction,
  ADD_COMPANY,
  REMOVE_COMPANY,
  CLEAR_COMPANIES
} from "./types";
import { Company } from "../types";

export function addCompany(payload: Company): CompaniesAction {
  return {
    type: ADD_COMPANY,
    payload
  };
}

export function removeCompany(payload: Company): CompaniesAction {
  return {
    type: REMOVE_COMPANY,
    payload
  };
}

export function clearCompanies(): CompaniesAction {
  return {
    type: CLEAR_COMPANIES
  };
}
