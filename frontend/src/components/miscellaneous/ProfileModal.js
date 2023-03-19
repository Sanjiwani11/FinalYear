import { useDisclosure, IconButton } from '@chakra-ui/react';
import React from 'react';
import { ViewIcon } from '@chakra-ui/icons';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Image,
} from "@chakra-ui/react";


const ProfileModal = ({ user, children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton display={{ base: "flex" }} icon={<ViewIcon />} onClick={onOpen} />
            )}
        <Modal size="lg" onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader
                fontSize="30px"
                fontFamily="Work sans"
                display="flex"
                justifyContent="center"
            >
                {user.name}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
          >
            <Image
              borderRadius="full"
              boxSize="150px"
              src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
              alt={user.name}
            />
            <Text
              fontSize={{ base: "28px", md: "30px" }}
              fontFamily="Work sans"
            >
              Email: {user.email}
            </Text>
          </ModalBody>
            <ModalFooter>
                <Button colorScheme="blue" mr="3" onClick={onClose}>Close</Button>
            </ModalFooter>
            </ModalContent>
      </Modal>      
    </>
  );
};

export default ProfileModal;
