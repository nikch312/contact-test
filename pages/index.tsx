import { useState } from "react";
import { Box, Button, Flex, Input } from "@chakra-ui/react";

import { Modal } from "../components/modal";
import { Profile } from "../components/profile";
import { Contact } from "../components/contact";

const IndexPage: React.FC = () => {
  const [isModal, setModalVisible] = useState(false);
  const [type, setType] = useState(true);
  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <>
      <Flex
        as="main"
        w="calc(100% - 32px)"
        h="calc(100vh - 32px)"
        m={4}
        p={8}
        border="1px solid #707070"
      >
        <Box w="30%">
          <Input border="1px solid #707070 !important" />
          <Contact />
          <Button
            w="100%"
            mt={4}
            onClick={() => {
              setType(true);
              openModal();
            }}
          >
            Add
          </Button>
        </Box>
        <Box ml="20" w="70%">
          <Profile openModal={openModal} setType={setType} />
        </Box>
      </Flex>
      <Modal type={type} open={isModal} close={closeModal} />
    </>
  );
};

export default IndexPage;
