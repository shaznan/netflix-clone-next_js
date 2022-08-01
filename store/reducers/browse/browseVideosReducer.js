import { SET_SELECTED_MENU_ITEM } from "../../actionTypes/browse/browseVideosTypes";

const initialState = {
  selectedMenuItem: null,
};

const browse = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_MENU_ITEM:
      return { ...state, selectedMenuItem: action?.payload || null };
    default:
      return state;
  }
};

export default browse;
