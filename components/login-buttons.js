import { Button, HStack } from '@chakra-ui/core'
import { useAuth } from '@/context/auth'
import { Github, Google } from '@/components/icons'

const LoginButtons = () => {
  const auth = useAuth()

  return (
    <HStack mt={4}>
      <Button
        onClick={() => auth.signinWithGitHub()}
        bg="gray.900"
        color="white"
        fontWeight="medium"
        leftIcon={<Github w={5} />}
        _hover={{ bg: 'gray.700' }}
        _active={{
          bg: 'gray.800',
          transform: 'scale(0.95)'
        }}
      >
        Continue with GitHub
      </Button>
      <Button
        onClick={() => auth.signinWithGoogle()}
        bg="white"
        color="gray.900"
        variant="outline"
        fontWeight="medium"
        leftIcon={<Google />}
        _hover={{ bg: 'gray.100' }}
        _active={{
          bg: 'gray.100',
          transform: 'scale(0.95)'
        }}
      >
        Continue with Google
      </Button>
    </HStack>
  )
}

export default LoginButtons
