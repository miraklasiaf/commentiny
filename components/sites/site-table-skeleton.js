import { Box, Skeleton, chakra } from '@chakra-ui/core'
import { TableContainer, Tr, Th, Td } from '@/components/table-components'

const SkeletonRow = ({ width }) => (
  <Box as="tr">
    <Td>
      <Skeleton height="10px" w={width} my={4} />
    </Td>
    <Td>
      <Skeleton height="10px" w={width} my={4} />
    </Td>
    <Td>
      <Skeleton height="10px" w={width} my={4} />
    </Td>
    <Td>
      <Skeleton height="10px" w={width} my={4} />
    </Td>
  </Box>
)

const SiteTableSkeleton = () => {
  return (
    <TableContainer>
      <chakra.table w="full">
        <thead>
          <Tr>
            <Th>Name</Th>
            <Th>Site Link</Th>
            <Th>Feedback Link</Th>
            <Th>Date Added</Th>
            <Th>{''}</Th>
          </Tr>
        </thead>
        <tbody>
          <SkeletonRow width="75px" />
          <SkeletonRow width="125px" />
          <SkeletonRow width="50px" />
          <SkeletonRow width="100px" />
          <SkeletonRow width="75px" />
        </tbody>
      </chakra.table>
    </TableContainer>
  )
}

export default SiteTableSkeleton
