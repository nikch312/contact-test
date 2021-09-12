import { IContact } from "./Contact"

export type ContextType = {
  contacts: IContact[];
  current: number;
  filter: string;
  setFilterString: (filter: string) => void;
  addContact: (payload: IContact) => void;
  updateContact: (payload: IContact) => void;
  deleteContact: (id: number) => void;
  setCurrentContact: (id: number) => void;
};
