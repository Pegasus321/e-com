import { Filters_Action } from "../utils/actions";

export const initialFiltersState = {
  allProducts: [],
  filteredProducts: [],
  displayableProductsLength: 0,
  paginateIndex: 0,
};

export const filterReducers = (action, state) => {
  switch (action.type) {
    case Filters_Action.UPDATE_PAGINATION:
      return {
        ...state,
        paginateIndex: action.payloadIndex,
      };
  }
};
