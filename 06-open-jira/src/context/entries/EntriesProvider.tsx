import { useEffect, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

import { Entry } from "../../interfaces";

import { EntriesContext, EntriesReducer } from "./";
import { entriesApi } from "@/apis";
import { data } from "autoprefixer";

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [],
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

  const refreshEntries = async () => {
    const {data} = await entriesApi.get<Entry[]>("/entries");
    dispatch({ type: "[Entry] Refresh-Data", payload: data });
  };

  useEffect(() => {
    refreshEntries();
  }, []);

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
