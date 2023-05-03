import { useReducer } from "react";
import { EntriesContext } from "./";
import { EntriesReducer } from "./";
import { Entry } from "@/interfaces";
import { v4 as uuidv4 } from "uuid";

export interface EntriesState {
  entries: Entry[];
}
const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description:
        "Commodo exercitation officia est consectetur deserunt anim fugiat nulla anim nisi cupidatat.",
      createAt: Date.now(),
      status: "pending",
    },
    {
      _id: uuidv4(),
      description:
        "Commodo exercitation officia est consectetur deserunt anim fugiat nulla anim nisi cupidatat.",
      createAt: Date.now() - 100000,
      status: "in-progress",
    },
    {
      _id: uuidv4(),
      description:
        "Commodo exercitation officia est consectetur deserunt anim fugiat nulla anim nisi cupidatat.",
      createAt: Date.now() - 10000,
      status: "finished",
    },
    {
      _id: uuidv4(),
      description:
        "Commodo exercitation officia est consectetur deserunt anim fugiat nulla anim nisi cupidatat.",
      createAt: Date.now() - 10000000,
      status: "pending",
    },
  ],
};
type Props = {
  children: JSX.Element;
};
export const EntriesProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(EntriesReducer, ENTRIES_INITIAL_STATE);
  return (
    <EntriesContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
