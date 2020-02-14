import { initialState, CompaniesState } from "./state";
import { CompaniesAction, ADD_COMPANY } from "./types";

export function reducer(
  state = initialState,
  action: CompaniesAction
): CompaniesState {
  switch (action.type) {
    case ADD_COMPANY:
      return [...state, action.payload];
    default:
      return state;
  }
}
