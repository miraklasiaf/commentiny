import {
  Box,
  Heading,
  Text,
  Divider,
  Icon,
  Flex,
  Code,
  useColorModeValue
} from '@chakra-ui/core'
import { format, parseISO } from 'date-fns'
import ReactMarkdown from 'react-markdown'
import MDXComponents from '../mdx'

const Feedback = ({ author, text, createdAt, provider, isLast, settings }) => {
  const authorColor = useColorModeValue('gray.900', 'gray.200')
  const textColor = useColorModeValue('gray.800', 'gray.300')
  const dividerColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box borderRadius={4} maxWidth="700px" w="full">
      <Flex align="center">
        <Heading size="sm" as="h3" mb={0} color={authorColor} fontWeight="medium">
          {author}
        </Heading>
        {settings?.icons && <Icon name={provider.slice(0, -4)} size="13px" ml="6px" />}
      </Flex>
      {settings?.timestamp && (
        <Text color="gray.500" mb={4} fontSize="xs">
          {format(parseISO(createdAt), 'PPpp')}
        </Text>
      )}
      <Box color={textColor}>
        <ReactMarkdown
          source={text}
          renderers={{
            paragraph: MDXComponents.p,
            blockquote: MDXComponents.blockquote,
            link: MDXComponents.a,
            list: MDXComponents.ul,
            listItem: MDXComponents.li,
            table: MDXComponents.table,
            tableHead: MDXComponents.th,
            tableCell: MDXComponents.td,
            code: ({ value }) => (
              <pre>
                <Code borderRadius={8} p={4} my={4}>
                  {value}
                </Code>
              </pre>
            ),
            inlineCode: MDXComponents.inlineCode
          }}
        />
      </Box>
      {!isLast && <Divider borderColor={dividerColor} mt={6} mb={6} />}
    </Box>
  )
}

export default Feedback
