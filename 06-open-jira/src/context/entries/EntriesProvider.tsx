import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

import { Entry } from "../../interfaces";

import { EntriesContext, EntriesReducer } from "./";

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description:
        "Pendiente: Proident dolor duis elit sunt qui dolor laborum veniam ea laboris qui consequat.",
      status: "pending",
      createAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description:
        "En-Progreso Veniam in cupidatat adipisicing Lorem sunt est est ex cillum laboris fugiat officia fugiat.",
      status: "in-progress",
      createAt: Date.now() - 1000000,
    },
    {
      _id: uuidv4(),
      description:
        "Terminadas: Commodo veniam aliqua tempor officia officia non laborum.",
      status: "finished",
      createAt: Date.now() - 100000,
    },
  ],
};
type Props = {
  children: JSX.Element;
};

export const EntriesProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(EntriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      createAt: Date.now(),
      status: "pending",
    };

    dispatch({ type: "[Entry] Add-Entry", payload: newEntry });
  };

  const updateEntry = (entry: Entry) => {
    dispatch({ type: "[Entry] Entry-Updated", payload: entry });
  };

  return (
    <EntriesContext.Provider
      value={{
        ...state,

        // Methods
        addNewEntry,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
