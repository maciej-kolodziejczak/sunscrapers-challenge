import { Company } from "../types";

export type CompaniesState = Set<Company>;

export const initialState: CompaniesState = new Set();
