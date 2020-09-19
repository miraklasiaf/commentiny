import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Button,
  Input,
  useToast,
  useDisclosure
} from '@chakra-ui/core';
import LoginButtons from './login-buttons';
import { useAuth } from '@/context/auth';

const AuthModal = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const auth = useAuth();
  const toast = useToast();

  const onCreateSite = ({ name, url }) => {
    toast({
      title: 'Success!',
      description: "We've added your site.",
      status: 'success',
      duration: 5000,
      isClosable: true
    });
    onClose();
  };

  return (
    <>
      <Button
        id="auth-modal-button"
        variant="ghost"
        onClick={onOpen}
        fontWeight="medium"
        _active={{
          transform: 'scale(0.95)'
        }}
      >
        Log in
      </Button>

      <Modal size="3xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay>
          <ModalContent>
            <ModalHeader align="center" fontWeight="bold">
              Sign Up on Commentiny
            </ModalHeader>
            <ModalBody pb={6}>
              <LoginButtons />
            </ModalBody>

            <ModalFooter justify="center">
              <Text>
                We'll never post to any of your accounts without your
                permission.
              </Text>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  );
};

export default AuthModal;
