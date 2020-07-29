import { CHANGE_LANG_SUCCESS, CHANGE_LANG_FAIL } from "../types";

const INITIAL_STATE = {
  locale: "en",
  isRTL: false,
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case CHANGE_LANG_SUCCESS:
      return {
        ...state,
        locale: action.payload.locale,
        isRTL: action.payload.isRTL,
      };
    case CHANGE_LANG_FAIL:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};
