import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Button,
  Input,
  useToast,
  useDisclosure
} from '@chakra-ui/core'
import { useForm } from 'react-hook-form'
import { mutate } from 'swr'
import { createSite } from '@/lib/db'
import { useAuth } from '@/context/auth'

const AddSiteModal = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { handleSubmit, register } = useForm()
  const auth = useAuth()
  const toast = useToast()

  const onCreateSite = ({ name, url }) => {
    const newSite = {
      authorId: auth.user.uid,
      createdAt: new Date().toISOString(),
      name,
      url,
      settings: {
        icons: true,
        timestamp: true,
        ratings: false
      }
    }

    const { id } = createSite(newSite)
    toast({
      title: 'Success!',
      description: "We've added your site.",
      status: 'success',
      duration: 5000,
      isClosable: true
    })
    mutate(
      ['/api/sites', auth.user.token],
      async (data) => ({
        sites: [{ id, ...newSite }, ...data.sites]
      }),
      false
    )
    onClose()
  }

  return (
    <>
      <Button
        id="add-site-modal-button"
        onClick={onOpen}
        bg="gray.900"
        color="white"
        fontWeight="medium"
        _hover={{ bg: 'gray.700' }}
        _active={{
          bg: 'gray.800',
          transform: 'scale(0.95)'
        }}
      >
        {children}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay>
          <ModalContent as="form" onSubmit={handleSubmit(onCreateSite)}>
            <ModalHeader fontWeight="bold">Add Site</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  id="site-input"
                  placeholder="My site"
                  name="name"
                  ref={register({ required: true })}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Link</FormLabel>
                <Input
                  id="link-input"
                  placeholder="https://website.com"
                  name="url"
                  ref={register({ required: true })}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button onClick={onClose} mr={3} fontWeight="medium">
                Cancel
              </Button>
              <Button
                id="create-site-button"
                colorScheme="blue"
                fontWeight="medium"
                type="submit"
              >
                Create
              </Button>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  )
}

export default AddSiteModal
