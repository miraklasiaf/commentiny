import { Heading, Flex, Text } from '@chakra-ui/core'

const CommentEmptyState = () => (
  <Flex
    w="full"
    backgroundColor="white"
    borderRadius="8px"
    p={16}
    justify="center"
    align="center"
    direction="column"
  >
    <Heading size="lg" mb={2}>
      There isn't any comment.
    </Heading>
    <Text mb={4}>Share your sites!</Text>
  </Flex>
)

export default CommentEmptyState
