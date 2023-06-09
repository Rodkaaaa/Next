import { useEffect, useReducer } from "react";
import { useSnackbar } from "notistack";
import { Entry } from "../../interfaces";
import { EntriesContext, EntriesReducer } from "./";
import { entriesApi } from "@/apis";

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
  const { enqueueSnackbar } = useSnackbar();

  const addNewEntry = async (description: string) => {
    const { data } = await entriesApi.post<Entry>("/entries", { description });

    dispatch({ type: "[Entry] Add-Entry", payload: data });
  }; 

  const updateEntry = async (
    { _id, description, status }: Entry,
    showSnackbar = false
  ) => {
    try {
      const { data } = await entriesApi.put<Entry>(`/entries/${_id}`, {
        description: description,
        status: status,
      });
      dispatch({ type: "[Entry] Entry-Updated", payload: data , showSnackbar});

      //TODO: mostrar SnackBar
      if (showSnackbar) {
        enqueueSnackbar("Entrada Actualizada", {
          variant: "success",
          autoHideDuration: 1500,
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        });
      }
    } catch (error) {
      console.log({ error });
    }
  };

  const refreshEntries = async () => {
    const { data } = await entriesApi.get<Entry[]>("/entries");
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
