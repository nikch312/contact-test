import { useContext, useRef, useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  CloseButton,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";

import { ContactContext } from "../../context";
import { IContact, ContextType } from "../../types";

interface ModalProps {
  open: boolean;
  type: boolean;
  close: () => void;
}

export const Modal: React.FC<ModalProps> = ({ open, type, close }) => {
  const { current, contacts, addContact, updateContact, setCurrentContact } =
    useContext(ContactContext) as ContextType;
  const cancelRef = useRef<HTMLButtonElement>(null);

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [group, setGroup] = useState("");

  useEffect(() => {
    if (!type) {
      const contact: IContact = contacts.find(
        (c: IContact) => c.id === current
      ) as IContact;

      setFirstName(contact.firstName);
      setMiddleName(contact.middleName || "");
      setLastName(contact.lastName);
      setEmail(contact.email);
      setGroup(contact.group);
    }
  }, [open]);

  const clear = () => {
    setFirstName("");
    setMiddleName("");
    setLastName("");
    setEmail("");
    setGroup("");
  };

  const save = () => {
    const contact: IContact = {
      id: type ? 0 : current,
      firstName,
      middleName,
      lastName,
      email,
      group,
    };

    if (type) addContact(contact);
    else {
      updateContact(contact);
      setCurrentContact(contact.id);
    }
    clear();
    close();
  };

  const onClose = () => {
    clear();
    close();
  };

  return (
    <AlertDialog
      isOpen={open}
      isCentered={true}
      motionPreset="slideInRight"
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      size="2xl"
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader>
            <Flex alignItems="center" justifyContent="space-between">
              <Text variant="title">{type ? "Add" : "Edit"}</Text>
              <CloseButton
                size="lg"
                _focus={{ outline: "none" }}
                onClick={onClose}
              />
            </Flex>
          </AlertDialogHeader>
          <AlertDialogBody>
            <FormControl id="firstName">
              <FormLabel>First name</FormLabel>
              <Input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FormControl>
            <FormControl id="middleName">
              <FormLabel>Middle name</FormLabel>
              <Input
                type="text"
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
              />
            </FormControl>
            <FormControl id="lastName">
              <FormLabel>Last name</FormLabel>
              <Input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={email}
                isRequired
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="Group">
              <FormLabel>Group</FormLabel>
              <Select
                size="md"
                value={group}
                onChange={(e) => setGroup(e.target.value)}
              >
                <option value="family">family</option>
                <option value="friends">friends</option>
                <option value="school">school</option>
                <option value="work">work</option>
              </Select>
            </FormControl>
          </AlertDialogBody>
          <AlertDialogFooter display="flex" justifyContent="space-between">
            <Button colorScheme="red" onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={save}>
              Save
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};
