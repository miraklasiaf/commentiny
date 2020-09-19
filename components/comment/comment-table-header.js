import NextLink from 'next/link'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Flex,
  Box
} from '@chakra-ui/core'

const CommentTableHeader = () => (
  <Box>
    <Breadcrumb>
      <BreadcrumbItem>
        <NextLink href="/dashboard/comment" passHref>
          <BreadcrumbLink>Comment</BreadcrumbLink>
        </NextLink>
      </BreadcrumbItem>
    </Breadcrumb>
    <Flex justifyContent="space-between">
      <Heading mb={8}>All Comment</Heading>
    </Flex>
  </Box>
)

export default CommentTableHeader
