import { Flex, Heading, Text, Button, Box, Icon, Link } from '@chakra-ui/core'
import { getLayout } from '@/layouts/default'
import { MY_APP } from '@/utils/constants'
import { useAuth } from '@/context/auth'
import { Comment, CommentLink } from '@/components/comment'
import LoginButtons from '@/components/login-buttons'
import { Logo } from '@/components/icons'

const SITE_ID = process.env.NEXT_PUBLIC_HOME_PAGE_SITE_ID

const Home = () => {
  const auth = useAuth()

  return (
    <>
      <Box bg="gray.100" py={16}>
        <Flex as="main" direction="column" maxW="700px" margin="0 auto">
          <Icon as={Logo} color="black" boxSize={12} mb={2} />
          <Text mb={4} fontSize="lg" py={4}>
            <Text as="span" fontWeight="bold" display="inline">
              {MY_APP}
            </Text>
            {` is the easiest way to add comments or reviews to your static site. It's still a work-in-progress, but you can try it out by leaving a comment below.`}
          </Text>
          {auth.user ? (
            <Button
              as="a"
              href="/dashboard"
              backgroundColor="gray.900"
              color="white"
              fontWeight="medium"
              mt={4}
              maxW="200px"
              _hover={{ bg: 'gray.700' }}
              _active={{
                bg: 'gray.800',
                transform: 'scale(0.95)'
              }}
            >
              View Dashboard
            </Button>
          ) : (
            <LoginButtons />
          )}
        </Flex>
      </Box>
      <Flex
        direction="column"
        justify="center"
        w="full"
        maxWidth="700px"
        margin="0 auto"
        mt={8}
      >
        <CommentLink paths={[SITE_ID]} />
      </Flex>
    </>
  )
}

Home.getLayout = getLayout

export default Home
