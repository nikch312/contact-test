import { useContext } from "react";
import { ListItem } from "@chakra-ui/react";

import { IContact, ContextType } from "../../types";
import { ContactContext } from "../../context";

export const ContactItem: React.FC<IContact> = (contact) => {
  const { current, setCurrentContact } = useContext(
    ContactContext
  ) as ContextType;

  return (
    <ListItem
      cursor="pointer"
      border={current === contact.id ? "1px solid #707070" : "unset"}
      borderRadius="4px"
      p={1}
      onClick={() => {
        setCurrentContact(contact.id);
      }}
    >{`${contact.firstName} ${
      contact.middleName ? contact.middleName[0] + "." : ""
    } ${contact.lastName}`}</ListItem>
  );
};
