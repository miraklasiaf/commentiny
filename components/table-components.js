import { chakra, useColorModeValue } from '@chakra-ui/core'

export const Th = (props) => (
  <chakra.th
    bg={useColorModeValue('gray.100', 'gray.700')}
    color={useColorModeValue('gray.500', 'white')}
    fontSize="xs"
    fontWeight="medium"
    letterSpacing="wider"
    lineHeight={4}
    px={6}
    py={3}
    textTransform="uppercase"
    borderBottomWidth="1px"
    {...props}
  />
)

export const Td = (props) => (
  <chakra.td
    fontSize="sm"
    align="center"
    py={2}
    bg={useColorModeValue('white', 'gray.800')}
    borderBottomWidth="1px"
    whiteSpace="nowrap"
    {...props}
  />
)

export const Tr = (props) => (
  <chakra.tr
    backgroundColor="gray.50"
    borderTopRadius={8}
    borderBottom="1px solid"
    borderBottomColor="gray.200"
    height="40px"
    {...props}
  />
)

export const Table = (props) => {
  return <chakra.table w="full" {...props} />
}

export const TableContainer = (props) => (
  <chakra.div mx={{ sm: `-${6}`, lg: `-${8}` }} overflowX="auto">
    <chakra.div
      minWidth="full"
      px={{ sm: 6, lg: 8 }}
      display="inline-block"
      minWidth="full"
      verticalAlign="middle"
    >
      <chakra.div boxShadow="md" overflow="hidden" borderBottomRadius={{ sm: 'lg' }}>
        {props.children}
      </chakra.div>
    </chakra.div>
  </chakra.div>
)
