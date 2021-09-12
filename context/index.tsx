import { createContext, useState } from "react";

import { IContact, ContextType } from "../types";
import initContacts from "../data/contacts.json";

export const ContactContext = createContext<ContextType | null>(null);

const ContactProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [contacts, setContacts] = useState<IContact[]>(initContacts);
  const [current, setCurrent] = useState<number>(-1);

  const addContact = (payload: IContact) => {
    const newContact: IContact = {
      ...payload,
      id: new Date().getTime(),
    };
    setContacts([...contacts, newContact]);
  };

  const updateContact = (payload: IContact) => {
    setContacts(
      contacts.map((c: IContact) =>
        c.id === payload.id ? { ...c, ...payload } : c
      )
    );
  };

  const deleteContact = (id: number) => {
    setContacts(contacts.filter((contact: IContact) => contact.id !== id));
  };

  const setCurrentContact = (id: number) => {
    setCurrent(id);
  };

  return (
    <ContactContext.Provider
      value={{
        contacts,
        current,
        addContact,
        updateContact,
        deleteContact,
        setCurrentContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactProvider;
