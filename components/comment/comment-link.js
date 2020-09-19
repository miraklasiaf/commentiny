import { Flex, Link, useColorModeValue } from '@chakra-ui/core'

export default function FeedbackLink({ paths }) {
  const linkColor = useColorModeValue('gray.900', 'gray.100')

  return (
    <Flex
      align={['flex-start', 'center']}
      justifyContent="space-between"
      mb={8}
      w="full"
      mt={1}
      direction={['column', 'row']}
    >
      <Link
        color={linkColor}
        fontWeight="bold"
        fontSize="sm"
        href={`/site/${paths.join('/')}`}
        target="_blank"
      >
        Leave a comment →
      </Link>
      <Link fontSize="xs" color="gray.500" href="/" target="_blank">
        Powered by Commentiny (Alpha)
      </Link>
    </Flex>
  )
}
