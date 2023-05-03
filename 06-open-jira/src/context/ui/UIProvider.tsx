import { useReducer } from 'react';
import { UIContext } from './UIContext';
import { uiReducer } from './uiReducer';

export interface UIState{
    sideMenuOpen: boolean;
}
const UI_INITIAL_STATE: UIState ={
    sideMenuOpen: false
}
type Props = {
  children: JSX.Element
}
export const UIProvider = ({children}: Props) => {
    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)
  return (
    <UIContext.Provider value={{
        sideMenuOpen: false
        }}>
            {children}
    </UIContext.Provider>
  )
}