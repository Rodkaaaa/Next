import { useReducer } from 'react';
import { EntriesContext } from './';
import { EntriesReducer } from './';
import { Entry } from '@/interfaces';
import { v4 as uuidv4 } from 'uuid';

export interface EntriesState{
   entries: Entry[];
}
const ENTRIES_INITIAL_STATE: EntriesState ={
    entries: [
      {
        _id: uuidv4(),
        description:'',
        createAt:,
        status: ;
      }
    ]
}
type Props = {
  children: JSX.Element
}
export const EntriesProvider = ({children}: Props) => {
    const [state, dispatch] = useReducer(EntriesReducer, ENTRIES_INITIAL_STATE)
  return (
    <EntriesContext.Provider value={{
        ...state,
        }}>
            {children}
    </EntriesContext.Provider>
  )
}