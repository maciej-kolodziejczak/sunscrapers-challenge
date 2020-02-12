import { initialState, CompaniesState } from "./state";
import {
  CompaniesAction,
  ADD_COMPANY,
  REMOVE_COMPANY,
  CLEAR_COMPANIES
} from "./types";

export function reducer(
  state = initialState,
  action: CompaniesAction
): CompaniesState {
  switch (action.type) {
    case ADD_COMPANY:
      return state.add(action.payload);
    case REMOVE_COMPANY:
      state.delete(action.payload);
      return state;
    case CLEAR_COMPANIES:
      state.clear();
      return state;
    default:
      return state;
  }
}
