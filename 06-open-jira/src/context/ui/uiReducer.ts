import { UIState } from "./";
type UItActionype =
  | { type: "UI - Open Sidebar" }
  | { type: "UI - Close Sidebar" };
export const uiReducer = (state: UIState, action: UItActionype): UIState => {
  switch (action.type) {
    case "UI - Open Sidebar":
      return {
        ...state,
        sideMenuOpen: true,
      };
    case "UI - Close Sidebar":
      return {
        ...state,
        sideMenuOpen: false,
      };
      break;

    default:
      return state;
  }
};
