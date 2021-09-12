import { IContact } from "./Contact"

export type ContextType = {
  contacts: IContact[];
  current: number;
  addContact: (payload: IContact) => void;
  updateContact: (payload: IContact) => void;
  deleteContact: (id: number) => void;
  setCurrentContact: (id: number) => void;
};
