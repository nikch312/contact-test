import { useContext } from "react";
import { Box, List } from "@chakra-ui/react";

import { ContactItem } from "./ContactItem";
import { ContactContext } from "../../context";
import { IContact, ContextType } from "../../types";

const sortFunc = (a: IContact, b: IContact): number => {
  const astr = `${a.firstName} ${a.middleName ? a.middleName[0] + "." : ""} ${
    a.lastName
  }`;
  const bstr = `${b.firstName} ${b.middleName ? b.middleName[0] + "." : ""} ${
    b.lastName
  }`;

  if (astr > bstr) return 1;
  else if (astr < bstr) return -1;
  else return 0;
};

export const Contact: React.FC = () => {
  const { contacts } = useContext(ContactContext) as ContextType;
  return (
    <Box mt="4" p={2} h="calc(100vh - 208px)" border="1px solid #707070">
      <List spacing={3} h="100%">
        {contacts
          .sort((a: IContact, b: IContact) => sortFunc(a, b))
          .map((contact: IContact) => (
            <ContactItem key={contact.id} {...contact} />
          ))}
      </List>
    </Box>
  );
};
