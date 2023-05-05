import { useReducer } from 'react';
import { UIContext } from './UIContext';
import { uiReducer } from './uiReducer';

export interface UIState{
    sideMenuOpen: boolean;
    isAddingEntry: boolean;
}
const UI_INITIAL_STATE: UIState ={
    sideMenuOpen: false,
    isAddingEntry: false,
}
type Props = {
  children: JSX.Element
}
export const UIProvider = ({children}: Props) => {
    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)
    
    const openSideMenu = () => {
        dispatch({type: 'UI - Open Sidebar'})
    }

    const closeSideMenu  = () => {
        dispatch({type: 'UI - Close Sidebar'})
    }

    const setIsAddingEntry = (isAdding: boolean) => {
      dispatch({type: "UI - Set isAddingEntry", payload: isAdding})
    }

  return (
    <UIContext.Provider value={{
        ...state, 
        openSideMenu,
        closeSideMenu,
        setIsAddingEntry,
        }}>
            {children}
    </UIContext.Provider>
  )
}